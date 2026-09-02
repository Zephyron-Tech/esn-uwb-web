import { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy | ESN UWB Pilsen',
  description:
    'How ESN UWB Pilsen collects, uses, and protects your personal data under GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Privacy Policy"
        subtitle="Last updated: September 2, 2026"
      />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-600 text-lg leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              1. Data Controller
            </h2>
            <p>
              This website is operated by{' '}
              <strong className="text-gray-900">ESN UWB Pilsen, z.s.</strong>,
              a local section of the Erasmus Student Network, seated at
              Kollárova 1239/19, 301 00 Plzeň 3, Czech Republic
              (IČO: 17312361). For any privacy-related
              questions, contact us at{' '}
              <a
                href="mailto:board@esnuwbpilsen.com"
                className="text-esn-cyan hover:underline"
              >
                board@esnuwbpilsen.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              2. What Data We Collect
            </h2>
            <p>
              This site does not use analytics or tracking cookies, and does
              not automatically collect personal data from visitors. The only
              personal data we process is what you choose to send us directly
              — for example, if you email{' '}
              <a
                href="mailto:board@esnuwbpilsen.com"
                className="text-esn-cyan hover:underline"
              >
                board@esnuwbpilsen.com
              </a>
              , we receive your email address, name (if provided), and the
              content of your message.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              3. Google Maps Embed
            </h2>
            <p>
              Our{' '}
              <a href="/contact" className="text-esn-cyan hover:underline">
                Contact
              </a>{' '}
              page embeds a Google Maps view of our office location. Loading
              this embed may allow Google to collect your IP address and set
              cookies, in accordance with{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-esn-cyan hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>
              . We do not control this data collection.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              4. External Forms
            </h2>
            <p>
              Some pages on this site link out to an external Google Form
              (for example, our incoming-student sign-up). Any personal data
              you submit through that form is collected and processed by
              Google Forms on our behalf, separately from this website, and
              is governed by{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-esn-cyan hover:underline"
              >
                Google&apos;s Privacy Policy
              </a>{' '}
              in addition to this one.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              5. Legal Basis &amp; Purpose
            </h2>
            <p>
              We process the personal data described above based on your
              consent (when you contact us) and our legitimate interest in
              responding to inquiries and organizing ESN activities and
              events for incoming and local students.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              6. Data Retention
            </h2>
            <p>
              We retain emails and messages only for as long as necessary to
              handle your inquiry or maintain our records of exchange-student
              support activities, after which they are deleted.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              7. Your Rights Under GDPR
            </h2>
            <p>Under the General Data Protection Regulation, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict or object to our processing of your data</li>
              <li>Request a copy of your data in a portable format</li>
              <li>
                Lodge a complaint with the Czech Office for Personal Data
                Protection (Úřad pro ochranu osobních údajů),{' '}
                <a
                  href="https://uoou.gov.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-esn-cyan hover:underline"
                >
                  uoou.gov.cz
                </a>
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a
                href="mailto:board@esnuwbpilsen.com"
                className="text-esn-cyan hover:underline"
              >
                board@esnuwbpilsen.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this policy as the website or our activities
              change. The date at the top of this page reflects the most
              recent update.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-heading text-gray-900">
              9. Contact
            </h2>
            <p>
              Questions about this policy or your data can be sent to{' '}
              <a
                href="mailto:board@esnuwbpilsen.com"
                className="text-esn-cyan hover:underline"
              >
                board@esnuwbpilsen.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
