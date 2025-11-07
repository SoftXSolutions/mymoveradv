import { useState } from 'react';
import PageHeader from './PageHeader';
import SearchBar from './SearchBar';
import UserTable from './UserTable';
import UserModal from './UserModal';
import BulkActions from './BulkActions';
import { ExportButton, ExportModal } from './export';
import { 
  exportToCSV, 
  exportToJSON, 
  exportToExcel, 
  exportToPDF, 
  prepareExportData,
  generateFilename 
} from '../../services/exportService';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      status: 'active',
      emailVerified: true,
      phoneVerified: true,
      leads: 5,
      joined: '2024-03-15',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      phone: '+1 (555) 234-5678',
      status: 'active',
      emailVerified: true,
      phoneVerified: true,
      leads: 3,
      joined: '2025-10-10',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      phone: '+1 (555) 345-6789',
      status: 'inactive',
      emailVerified: false,
      phoneVerified: false,
      leads: 0,
      joined: '2025-09-20',
      lastActive: '2 weeks ago'
    }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    status: 'active',
    emailVerified: false,
    phoneVerified: false
  });

  // Assign Movers modal state
  const [showAssignModal, setShowAssignModal] = useState(false);
  const [assignForUser, setAssignForUser] = useState(null);
  const [selectedLeadId, setSelectedLeadId] = useState('');
  const [selectedMovers, setSelectedMovers] = useState([]);

  const getStoredRequests = () => {
    try {
      const arr = JSON.parse(localStorage.getItem('myRequests') || '[]');
      return Array.isArray(arr) ? arr : [];
    } catch {
      return [];
    }
  };

  const saveStoredRequests = (arr) => {
    localStorage.setItem('myRequests', JSON.stringify(arr));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.phone.includes(searchQuery)
  );

  const handleAddUser = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      status: 'active',
      emailVerified: false,
      phoneVerified: false
    });
    setShowAddModal(true);
  };

  const handleOpenAssign = (user) => {
    setAssignForUser(user);
    setSelectedLeadId('');
    setSelectedMovers([]);
    setShowAssignModal(true);
  };

  const handleConfirmAssign = () => {
    if (!selectedLeadId || selectedMovers.length === 0) return;
    const reqs = getStoredRequests();
    const updated = reqs.map(r => {
      if (r.id === selectedLeadId) {
        return { ...r, assignedMovers: selectedMovers, status: 'Distributed' };
      }
      return r;
    });
    saveStoredRequests(updated);
    setShowAssignModal(false);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      status: user.status,
      emailVerified: user.emailVerified,
      phoneVerified: user.phoneVerified
    });
    setShowEditModal(true);
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSaveNewUser = () => {
    const newUser = {
      id: users.length + 1,
      ...formData,
      leads: 0,
      joined: new Date().toISOString().split('T')[0],
      lastActive: 'Just now'
    };
    setUsers([...users, newUser]);
    setShowAddModal(false);
  };

  const handleSaveEdit = () => {
    setUsers(users.map(user =>
      user.id === selectedUser.id
        ? { ...user, ...formData }
        : user
    ));
    setShowEditModal(false);
  };

  const handleExport = (format, fields) => {
    const exportData = prepareExportData(filteredUsers, fields);
    
    const extensionMap = {
      csv: 'csv',
      excel: 'xlsx',
      json: 'json',
      pdf: 'pdf'
    };

    const filename = generateFilename('users_export', extensionMap[format]);

    switch (format) {
      case 'csv':
        exportToCSV(exportData, filename);
        break;
      case 'excel':
        exportToExcel(exportData, filename);
        break;
      case 'json':
        exportToJSON(exportData, filename);
        break;
      case 'pdf':
        exportToPDF(exportData, filename, 'User Management Report');
        break;
      default:
        console.error('Unknown export format:', format);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers(prev => 
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map(user => user.id));
    }
  };

  const handleBulkActivate = () => {
    if (window.confirm(`Activate ${selectedUsers.length} selected users?`)) {
      setUsers(users.map(user =>
        selectedUsers.includes(user.id)
          ? { ...user, status: 'active' }
          : user
      ));
      setSelectedUsers([]);
    }
  };

  const handleBulkSuspend = () => {
    if (window.confirm(`Suspend ${selectedUsers.length} selected users?`)) {
      setUsers(users.map(user =>
        selectedUsers.includes(user.id)
          ? { ...user, status: 'suspended' }
          : user
      ));
      setSelectedUsers([]);
    }
  };

  const handleBulkDelete = () => {
    if (window.confirm(`Delete ${selectedUsers.length} selected users? This action cannot be undone.`)) {
      setUsers(users.filter(user => !selectedUsers.includes(user.id)));
      setSelectedUsers([]);
    }
  };

  const exportFields = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
    { key: 'status', label: 'Status' },
    { key: 'emailVerified', label: 'Email Verified' },
    { key: 'phoneVerified', label: 'Phone Verified' },
    { key: 'leads', label: 'Leads' },
    { key: 'joined', label: 'Joined Date' },
    { key: 'lastActive', label: 'Last Active' }
  ];

  return (
    <div>
      <PageHeader
        title="User Management"
        subtitle="Manage customer accounts and activity"
        actions={
          <>
            <ExportButton onClick={() => setShowExportModal(true)} />
            <button
              onClick={handleAddUser}
              className="px-4 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add User
            </button>
          </>
        }
      />

      <SearchBar
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search users by name, email, or phone..."
        onFilter={() => console.log('Open filters')}
      />

      <BulkActions
        selectedCount={selectedUsers.length}
        onActivate={handleBulkActivate}
        onSuspend={handleBulkSuspend}
        onDelete={handleBulkDelete}
      />

      <UserTable
        users={filteredUsers}
        onEdit={handleEditUser}
        onDelete={handleDeleteUser}
        selectedUsers={selectedUsers}
        onSelectUser={handleSelectUser}
        onSelectAll={handleSelectAll}
        onAssign={handleOpenAssign}
      />

      <UserModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveNewUser}
        isEdit={false}
      />

      <UserModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        user={selectedUser}
        formData={formData}
        setFormData={setFormData}
        onSave={handleSaveEdit}
        isEdit={true}
      />

      <ExportModal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        onExport={handleExport}
        totalRecords={filteredUsers.length}
        availableFields={exportFields}
      />

      {/* Assign Movers Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowAssignModal(false)} />
          <div className="relative bg-white rounded-xl w-[92%] max-w-lg shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-gray-200">
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <h3 className="text-lg font-bold text-gray-800">Assign Movers {assignForUser ? `to ${assignForUser.name}` : ''}</h3>
              <button onClick={() => setShowAssignModal(false)} className="p-2 rounded hover:bg-gray-100">✕</button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Select User Lead</div>
                <select
                  value={selectedLeadId}
                  onChange={(e)=>setSelectedLeadId(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Choose a lead...</option>
                  {getStoredRequests().map((r)=> (
                    <option key={r.id} value={r.id}>{r.id} • {[r.from?.city, r.to?.city].filter(Boolean).join(' → ') || 'Lead'}</option>
                  ))}
                </select>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-2">Select Movers (multiple)</div>
                <div className="space-y-2">
                  {['Premier Moving Co.','Swift Movers LLC','Elite Moving Services','Family First Movers'].map((m,i)=> {
                    const checked = selectedMovers.includes(m);
                    return (
                      <label key={i} className={`flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 ${checked?'border-black':''}`}>
                        <input type="checkbox" checked={checked} onChange={() => setSelectedMovers(prev => checked ? prev.filter(x=>x!==m) : [...prev, m])} className="rounded" />
                        <div>
                          <div className="font-medium text-gray-800">{m}</div>
                          <div className="text-xs text-gray-500">Professional Plan • 4.8★</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="px-5 py-4 border-t bg-gray-50 flex justify-between items-center">
              <button onClick={() => setShowAssignModal(false)} className="px-4 py-2 rounded-lg border">Cancel</button>
              <button onClick={handleConfirmAssign} disabled={!selectedLeadId || selectedMovers.length===0} className={`px-4 py-2 rounded-lg text-white ${(!selectedLeadId || selectedMovers.length===0) ? 'bg-gray-400 cursor-not-allowed' : 'bg-black'}`}>Assign {selectedMovers.length>0?`(${selectedMovers.length})`:''}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
