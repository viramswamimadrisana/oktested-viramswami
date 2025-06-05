import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Terms of Service</h1>
        <p className="text-gray-600 mb-8 text-center">Last updated: September 23, 2024</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the vadwaladhammadrisana.in website (the "Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">2. Description of Service</h2>
            <p className="text-gray-700">
              The Service provides information about Shri Vadwala Mandir, its activities, events, and spiritual services. All content is for informational purposes only and is subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 mb-4">As a user of this Service, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Use the Service only for lawful purposes</li>
              <li>Not use the Service to solicit others to perform or participate in any unlawful acts</li>
              <li>Not violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
              <li>Not infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>Not harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Shri Vadwala Mandir and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Shri Vadwala Mandir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Links to Other Websites</h2>
            <p className="text-gray-700">
              Our Service may contain links to third-party websites or services that are not owned or controlled by Shri Vadwala Mandir. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Shri Vadwala Mandir shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Termination</h2>
            <p className="text-gray-700">
              We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              In no event shall Shri Vadwala Mandir, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">8. Disclaimer</h2>
            <p className="text-gray-700">
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">9. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">11. Contact Us</h2>
            <p className="text-gray-700">If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>By email: vadwaladhammadrisana@gmail.com</li>
              <li>By phone: +91 92656 28726</li>
              <li>By visiting this page on our website: <a href="/contact-us" className="text-green-600 hover:underline">Contact Us</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;