import React from 'react';

const Disclaimer = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Disclaimer</h1>
        <p className="text-gray-600 mb-8 text-center">Last updated: September 23, 2024</p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Interpretation and Definitions</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-800 mb-2">Interpretation</h3>
              <p className="text-gray-700">
                The words of which the initial letter is capitalized have meanings defined under the following conditions.
                The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Definitions</h3>
              <p className="text-gray-700 mb-4">For the purposes of this Disclaimer:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
             <li>
  <strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Disclaimer) refers to Vadwala Dham Madrisana.
</li>

                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                <li><strong>Website</strong> refers to Vadwala Dham Madrisana, accessible from <a href="https://vadwaladhammadrisana.in" className="text-green-600 hover:underline">vadwaladhammadrisana.in</a></li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The information contained on the Service is for general information purposes only.
            </p>
            <p className="text-gray-700 mb-4">
              The Company assumes no responsibility for errors or omissions in the contents of the Service.
            </p>
            <p className="text-gray-700 mb-4">
              In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.
            </p>
            <p className="text-gray-700">
              The Company does not warrant that the Service is free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">External Links Disclaimer</h2>
            <p className="text-gray-700">
              The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.
            </p>
            <p className="text-gray-700">
              Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Errors and Omissions Disclaimer</h2>
            <p className="text-gray-700">
              The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.
            </p>
            <p className="text-gray-700">
              The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Fair Use Disclaimer</h2>
            <p className="text-gray-700">
              The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p className="text-gray-700">
              The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
            </p>
            <p className="text-gray-700">
              If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this Disclaimer, You can contact Us:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>By email: vadwaladhammadrisana@gmail.com</li>
              <li>By visiting this page on our website: <a href="https://vadwaladhammadrisana.in" className="text-green-600 hover:underline">https://vadwaladhammadrisana.in</a></li>
              <li>By phone number: +91 92656 28726</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;