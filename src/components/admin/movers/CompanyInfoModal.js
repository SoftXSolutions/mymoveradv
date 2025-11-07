import { useState } from 'react';

const CompanyInfoModal = ({ isOpen, onClose, mover }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isOpen || !mover) return null;

  // Mock leads data - will be fetched from backend in production
  const mockLeads = [
    {
      id: 1,
      customerName: 'John Smith',
      from: 'New York, NY',
      to: 'Los Angeles, CA',
      date: '2025-11-05',
      status: 'claimed',
      value: '$2,500',
      type: 'Residential'
    },
    {
      id: 2,
      customerName: 'Sarah Johnson',
      from: 'Chicago, IL',
      to: 'Miami, FL',
      date: '2025-11-03',
      status: 'quoted',
      value: '$3,200',
      type: 'Commercial'
    },
    {
      id: 3,
      customerName: 'Michael Brown',
      from: 'Seattle, WA',
      to: 'Austin, TX',
      date: '2025-11-01',
      status: 'completed',
      value: '$1,800',
      type: 'Residential'
    }
  ];

  // Mock compliance history - replace with backend data when available
  const insuranceHistory = [
    {
      id: 'ins-active',
      status: 'active',
      type: 'General Liability',
      policyNumber: mover.insuranceNumber || 'INS-000000',
      agencyName: 'Secure Shield Insurance',
      amount: '$1,000,000',
      contact: 'support@secureshield.com',
      effective: '2025-02-02',
      expiration: mover.insuranceExpiry || '2026-02-02'
    },
    {
      id: 'ins-prev-1',
      status: 'expired',
      type: 'General Liability',
      policyNumber: 'INS-4523189',
      agencyName: 'Apex Mutual',
      amount: '$1,000,000',
      contact: 'contact@apexmutual.com',
      effective: '2024-02-02',
      expiration: '2025-02-01'
    }
  ];

  const licenseHistory = [
    {
      id: 'lic-active',
      status: 'active',
      state: 'NJ',
      type: 'Household Goods Mover - Out of State',
      licenseNo: mover.businessLicense || 'BL-000000',
      name: mover.name,
      effective: '2025-01-01',
      expiration: '2026-01-01'
    },
    {
      id: 'lic-prev-1',
      status: 'expired',
      state: 'NJ',
      type: 'Household Goods Mover',
      licenseNo: 'BL-2023-00001',
      name: mover.name,
      effective: '2024-01-01',
      expiration: '2024-12-31'
    }
  ];

  const getStatusBadge = (status) => {
    const styles = {
      claimed: 'bg-blue-100 text-blue-800',
      quoted: 'bg-yellow-100 text-yellow-800',
      completed: 'bg-green-100 text-green-800',
      lost: 'bg-red-100 text-red-800',
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const CompanyLogo = () => {
    if (mover.logo) {
      return <img src={mover.logo} alt={mover.name} className="w-full h-full object-cover" />;
    }
    return (
      <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-4xl font-bold">
        {mover.name.charAt(0).toUpperCase()}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl max-w-6xl w-full my-8">
        {/* Header with Logo */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-r from-orange-500 to-orange-600"></div>
          <div className="px-4 sm:px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-start gap-4 -mt-16">
              {/* Company Logo */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-4 border-white shadow-lg bg-white flex-shrink-0">
                <CompanyLogo />
              </div>
              
              {/* Company Info */}
              <div className="flex-1 pt-12 sm:pt-12 w-full">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 truncate">{mover.name}</h2>
                    <p className="text-gray-600 mt-1 flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="truncate">{mover.location}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        mover.status === 'active' ? 'bg-green-100 text-green-800' :
                        mover.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {mover.status.toUpperCase()}
                      </span>
                      <span className="flex items-center gap-1 text-yellow-500">
                        <svg className="w-4 sm:w-5 sm:h-5 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold text-gray-900 text-sm">{mover.rating}</span>
                      </span>
                      <span className="text-xs sm:text-sm text-gray-600">
                        {mover.yearsInBusiness} years
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 text-3xl leading-none self-start"
                  >
                    ×
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
              <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-blue-600 font-medium">Total Leads</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{mover.leads}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-green-600 font-medium">Revenue</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">${mover.revenue.toLocaleString()}</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-purple-600 font-medium">Conversion</div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">{mover.conversionRate}%</div>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                <div className="text-xs sm:text-sm text-orange-600 font-medium">Plan</div>
                <div className="text-base sm:text-lg font-bold text-gray-900 mt-1 truncate">{mover.plan}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto">
            {['overview', 'leads', 'compliance', 'documents'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 border-b-2 font-medium transition-colors whitespace-nowrap text-sm ${
                  activeTab === tab
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'leads' && ` (${mockLeads.length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-20">Email:</span>
                      <span className="text-gray-900 font-medium break-all">{mover.email}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-20">Phone:</span>
                      <span className="text-gray-900 font-medium">{mover.phone}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-20">Website:</span>
                      <a href={mover.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Business Information
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-32">License #:</span>
                      <span className="text-gray-900 font-medium">{mover.businessLicense}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-32">Insurance #:</span>
                      <span className="text-gray-900 font-medium">{mover.insuranceNumber}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-32">Insurance Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        mover.insuranceStatus === 'valid' ? 'bg-green-100 text-green-800' :
                        mover.insuranceStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {mover.insuranceStatus}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Description
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {mover.description || 'No description provided.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Previous Leads</h3>
                <span className="text-xs sm:text-sm text-gray-500">{mockLeads.length} total</span>
              </div>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Route</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Type</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Value</th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {mockLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-gray-50">
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-900">{lead.customerName}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">
                            <div className="flex items-center gap-1">
                              <span className="truncate max-w-[100px] sm:max-w-none">{lead.from}</span>
                              <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                              <span className="truncate max-w-[100px] sm:max-w-none">{lead.to}</span>
                            </div>
                          </td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-700">{lead.type}</td>
                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium text-gray-900">{lead.value}</td>
                          <td className="px-3 sm:px-4 py-3">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBadge(lead.status)}`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Required Documents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { name: 'DOT Certificate', status: mover.documents?.dot || 'missing' },
                  { name: 'MC Number', status: mover.documents?.mc || 'missing' },
                  { name: 'Insurance Certificate', status: mover.documents?.insurance || 'pending' },
                  { name: 'W9 Tax Form', status: mover.documents?.w9 || 'missing' }
                ].map((doc, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3 sm:p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 text-xs sm:text-sm truncate">{doc.name}</div>
                        <div className="text-xs text-gray-500">PDF</div>
                      </div>
                    </div>
                    {doc.status === 'valid' ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : doc.status === 'pending' ? (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'compliance' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Insurance */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs">🛡️</span>
                    Insurance Details
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">Status:</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        mover.insuranceStatus === 'valid' ? 'bg-green-100 text-green-800' :
                        mover.insuranceStatus === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {mover.insuranceStatus || 'unknown'}
                      </span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">Policy #:</span>
                      <span className="text-gray-900 font-medium">{mover.insuranceNumber || '—'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">Expires:</span>
                      <span className="text-gray-900 font-medium">{mover.insuranceExpiry || '—'}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Previous Policies</h5>
                    <div className="space-y-2">
                      {insuranceHistory.filter(i => i.status !== 'active').map((p) => (
                        <div key={p.id} className="bg-gray-50 rounded p-3 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 truncate">{p.type}</div>
                            <div className="text-gray-600 truncate">Policy #{p.policyNumber} • {p.agencyName}</div>
                          </div>
                          <div className="text-gray-500 whitespace-nowrap">{p.effective} → {p.expiration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* License */}
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                    <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-orange-100 text-orange-700 text-xs">📜</span>
                    License Details
                  </h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">License #:</span>
                      <span className="text-gray-900 font-medium">{mover.businessLicense || '—'}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">Type:</span>
                      <span className="text-gray-900 font-medium">{licenseHistory[0]?.type}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="text-gray-500 sm:w-36">Valid Till:</span>
                      <span className="text-gray-900 font-medium">{licenseHistory[0]?.expiration}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h5 className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">Previous Licenses</h5>
                    <div className="space-y-2">
                      {licenseHistory.filter(l => l.status !== 'active').map((l) => (
                        <div key={l.id} className="bg-gray-50 rounded p-3 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div className="min-w-0">
                            <div className="font-medium text-gray-900 truncate">{l.type}</div>
                            <div className="text-gray-600 truncate">{l.state} • #{l.licenseNo}</div>
                          </div>
                          <div className="text-gray-500 whitespace-nowrap">{l.effective} → {l.expiration}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition text-sm sm:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoModal;
