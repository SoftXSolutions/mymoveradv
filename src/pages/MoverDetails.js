import { useParams, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

const MOVERS_DB = {
  'Premier Moving Co.': {
    rating: 4.8, reviews: 2100, location: 'San Francisco, CA', plan: 'Premium',
    phone: '+1 (555) 100-1000', email: 'contact@premiermoving.com', website: 'https://premiermoving.com'
  },
  'Swift Movers LLC': {
    rating: 4.6, reviews: 1800, location: 'Oakland, CA', plan: 'Professional',
    phone: '+1 (555) 200-2000', email: 'hello@swiftmovers.com', website: 'https://swiftmovers.com'
  },
  'Elite Moving Services': {
    rating: 4.9, reviews: 3200, location: 'San Jose, CA', plan: 'Premium',
    phone: '+1 (555) 300-3000', email: 'team@elitemoving.com', website: 'https://elitemoving.com'
  },
  'Family First Movers': {
    rating: 4.7, reviews: 1400, location: 'San Mateo, CA', plan: 'Professional',
    phone: '+1 (555) 400-4000', email: 'support@familyfirstmovers.com', website: 'https://familyfirstmovers.com'
  }
};

const decodeSlug = (slug) => decodeURIComponent(slug);

export default function MoverDetails(){
  const { slug } = useParams();
  const navigate = useNavigate();
  const name = decodeSlug(slug || '');
  const info = MOVERS_DB[name] || {};
  const [showReviews, setShowReviews] = useState(false);

  const initials = name ? name.split(' ').map(w=>w[0]).slice(0,2).join('') : '?';

  // Mock reviews per mover for demo
  const reviews = useMemo(() => {
    const base = [
      { id: 1, user: 'Alex K.', stars: 5, date: '2025-09-14', text: 'Excellent service, arrived on time and handled everything carefully.' },
      { id: 2, user: 'Maria P.', stars: 4, date: '2025-08-21', text: 'Great move overall. One box got a small dent, but they compensated quickly.' },
      { id: 3, user: 'Samir R.', stars: 5, date: '2025-07-30', text: 'Team was professional and fast. Highly recommend.' },
      { id: 4, user: 'Lina H.', stars: 3, date: '2025-06-12', text: 'Average experience, scheduling was a bit confusing.' },
      { id: 5, user: 'Chris D.', stars: 4, date: '2025-05-03', text: 'Good value for the price. Would use again.' }
    ];
    return base.map(r => ({ ...r, mover: name }));
  }, [name]);

  const breakdown = useMemo(() => {
    const counts = {5:0,4:0,3:0,2:0,1:0};
    reviews.forEach(r => { counts[r.stars] = (counts[r.stars]||0)+1; });
    const total = reviews.length || 1;
    const pct = k => Math.round((counts[k] / total) * 100);
    return { counts, total, pct };
  }, [reviews]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <button onClick={() => navigate(-1)} className="mb-4 text-sm text-blue-600 hover:underline">← Back</button>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-semibold">
            {initials}
          </div>
          <div className="flex-1">
            <div className="text-xl font-semibold text-gray-900">{name || 'Mover'}</div>
            <button onClick={()=>setShowReviews(s=>!s)} className="text-left text-sm text-gray-600 flex items-center gap-2 flex-wrap hover:underline">
              <span className="text-yellow-500">★</span>
              <span>{info.rating ?? '—'}</span>
              {info.reviews ? (<><span className="text-gray-400">•</span><span>{info.reviews.toLocaleString()} reviews</span></>) : null}
              {info.location ? (<><span className="text-gray-400">•</span><span>{info.location}</span></>) : null}
              {info.plan ? (
                <span className={`ml-auto px-2 py-0.5 rounded text-xs border ${info.plan==='Premium'?'bg-purple-50 text-purple-700 border-purple-200':'bg-blue-50 text-blue-700 border-blue-200'}`}>{info.plan}</span>
              ) : null}
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 text-sm">
          {info.phone && <div><span className="text-gray-500">Phone:</span> <a href={`tel:${info.phone}`} className="text-blue-600 hover:underline">{info.phone}</a></div>}
          {info.email && <div><span className="text-gray-500">Email:</span> <a href={`mailto:${info.email}`} className="text-blue-600 hover:underline">{info.email}</a></div>}
          {info.website && <div><span className="text-gray-500">Website:</span> <a href={info.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">{info.website}</a></div>}
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <div className="text-base font-semibold text-gray-900">Ratings & Reviews</div>
            <button onClick={()=>setShowReviews(s=>!s)} className="text-sm text-blue-600 hover:underline">{showReviews ? 'Hide' : 'View all'}</button>
          </div>

          {/* Breakdown */}
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {[5,4,3,2,1].map(st => (
                <div key={st} className="flex items-center gap-3 py-1">
                  <span className="w-10 text-sm text-gray-700">{st}★</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded">
                    <div className="h-2 rounded bg-yellow-400" style={{ width: `${breakdown.pct(st)}%` }} />
                  </div>
                  <span className="w-12 text-right text-xs text-gray-500">{breakdown.pct(st)}%</span>
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Average rating <span className="font-semibold text-gray-900">{info.rating ?? '—'}</span> based on {info.reviews?.toLocaleString?.() || breakdown.total} reviews.
            </div>
          </div>

          {/* Reviews list */}
          {showReviews && (
            <div className="mt-4 divide-y border rounded-lg">
              {reviews.map(r => (
                <div key={r.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-gray-900">{r.user}</div>
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span>{r.stars}</span>
                      <span className="text-gray-400">•</span>
                      <span>{r.date}</span>
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">{r.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
