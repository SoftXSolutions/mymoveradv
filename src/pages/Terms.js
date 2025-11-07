import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
    <div className="text-gray-700 leading-7 text-sm md:text-base">{children}</div>
  </section>
);

const Terms = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>

    <Section title="Acceptance of terms">
      By accessing or using Move Consult, you agree to these Terms. If you do not agree, do not use the service.
    </Section>

    <Section title="Service description">
      Move Consult provides tools for requesting moving quotes, comparing providers, and managing communications. We are not a moving carrier and do not guarantee the performance of any provider.
    </Section>

    <Section title="Your responsibilities">
      You agree to provide accurate information, use the service lawfully, and respect the rights of others. You are responsible for your account and any activity under it.
    </Section>

    <Section title="Payments and fees">
      Some features may require payment. Prices are displayed before purchase. Taxes may apply. Except where required by law, payments are non-refundable once services are rendered.
    </Section>

    <Section title="Third‑party providers">
      Quotes and services may be fulfilled by third‑party movers. Any disputes arising from services provided by movers are between you and the mover.
    </Section>

    <Section title="Prohibited uses">
      You may not misuse the platform, attempt to access non-public areas, or interfere with the service or other users.
    </Section>

    <Section title="Disclaimers">
      The service is provided “as is” without warranties of any kind. We disclaim implied warranties of merchantability, fitness for a particular purpose, and non‑infringement to the fullest extent permitted by law.
    </Section>

    <Section title="Limitation of liability">
      To the maximum extent permitted by law, Move Consult is not liable for indirect, incidental, or consequential damages, or any loss of data, revenue, or profits arising from your use of the service.
    </Section>

    <Section title="Termination">
      We may suspend or terminate access if you violate these Terms. You may stop using the service at any time.
    </Section>

    <Section title="Changes to these Terms">
      We may update these Terms. Material changes will be posted on this page. Your continued use after changes means you accept the updated Terms.
    </Section>

    <Section title="Contact">
      For questions about these Terms, contact support@moveconsult.com.
    </Section>

    {/* <div className="text-xs text-gray-500 mt-8">Last updated: {new Date().toLocaleDateString()}</div> */}
  </div>
);

export default Terms;
