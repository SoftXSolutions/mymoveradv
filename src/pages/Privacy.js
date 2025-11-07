import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <div className="text-gray-700 leading-7 text-sm md:text-base">{children}</div>
  </section>
);

const Privacy = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

    <Section title="Overview">
      We respect your privacy and are committed to protecting it. This Policy explains what information we collect, how we use it, and the choices you have. By using Move Consult, you agree to this Policy.
    </Section>

    <Section title="Information we collect">
      - Account details (name, email, phone).
      <br />- Usage data (pages viewed, actions taken).
      <br />- Quote and booking information you provide.
    </Section>

    <Section title="How we use information">
      - To operate and improve our services.
      <br />- To communicate with you about quotes, bookings, and updates.
      <br />- To prevent fraud and ensure safety.
    </Section>

    <Section title="Sharing">
      We do not sell your data. We may share information with vetted service providers (e.g., hosting, analytics) and movers when you request quotes. We require partners to protect your data.
    </Section>

    <Section title="Security">
      We use administrative, technical, and organizational safeguards to protect your information. No method is 100% secure, but we work to keep your data safe.
    </Section>

    <Section title="Your choices">
      - Update your details from your account or by contacting support.
      <br />- Opt out of marketing emails via unsubscribe links.
      <br />- Request deletion of your data where applicable.
    </Section>

    <Section title="Contact">
      Questions about this Policy? Email us at support@moveconsult.com.
    </Section>

    <div className="text-xs text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</div>
  </div>
);

export default Privacy;
