import React, { useState } from 'react';

const COMPANY_EMAIL = 'support@moveconsult.com';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const setField = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || 'New inquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contact</h1>
      <p className="text-gray-600 mb-8">Have a question about Move Consult? Send us a message and we’ll get back to you.</p>

      <form onSubmit={submit} className="bg-white border rounded-xl p-6 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Name</label>
            <input value={form.name} onChange={setField('name')} className="w-full border rounded-md px-3 py-2" placeholder="Your full name" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Email</label>
            <input type="email" value={form.email} onChange={setField('email')} className="w-full border rounded-md px-3 py-2" placeholder="you@example.com" required />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Phone</label>
            <input value={form.phone} onChange={setField('phone')} className="w-full border rounded-md px-3 py-2" placeholder="(201) 555-0123" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">Subject</label>
            <input value={form.subject} onChange={setField('subject')} className="w-full border rounded-md px-3 py-2" placeholder="How can we help?" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-800 mb-1">Message</label>
          <textarea rows={6} value={form.message} onChange={setField('message')} className="w-full border rounded-md px-3 py-2" placeholder="Write your message..." required />
        </div>
        <div className="pt-2">
          <button type="submit" className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white rounded-lg">Send message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
