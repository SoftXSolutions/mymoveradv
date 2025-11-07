const LeadDetails = ({ lead }) => {
  if (!lead) return null;

  if (lead.locked) {
    return (
      <div className="bg-white rounded-xl border border-red-200 shadow-[0_6px_24px_rgba(0,0,0,0.06)] p-5">
        <div className="text-red-700 font-semibold mb-2">You have not provided details.</div>
        <div className="text-sm text-red-600">This lead is locked. Provide required details to unlock and view customer information.</div>
      </div>
    );
  }

  const d = lead.details || {};

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-[0_6px_24px_rgba(0,0,0,0.06)] p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs text-gray-500">Lead #{lead.id}</div>
          <div className="text-lg font-bold text-gray-800">{lead.customer?.name}</div>
        </div>
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">{lead.status}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Lead number</div>
          <div className="font-medium text-gray-800">#{lead.id}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Lead date</div>
          <div className="font-medium text-gray-800">{d.date || '—'}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Lead fee</div>
          <div className="font-medium text-gray-800">{lead.fee ?? '—'}</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-sm text-gray-600 mb-1">Lead type</div>
          <div className="font-medium text-gray-800">{lead.tier || '—'}</div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-lg p-4">
          <div className="font-semibold text-gray-800 mb-2">Move Details</div>
          <div className="text-sm text-gray-700">{d.move || '—'}</div>
          <div className="text-xs text-gray-500 mt-1">{d.distance ? `${d.distance}` : '—'}</div>
        </div>
        <div className="bg-white border rounded-lg p-4">
          <div className="font-semibold text-gray-800 mb-2">Contact</div>
          <div className="text-sm text-gray-700">{lead.customer?.email || '—'}</div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
