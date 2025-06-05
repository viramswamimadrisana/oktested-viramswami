import React from 'react';

const Support = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Support Center</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">How Can We Help You?</h2>
            <p className="text-gray-700 mb-6">
              We're here to assist you with any questions or concerns you may have about Shri Vadwala Mandir, our services, or your experience with us. Please choose from the options below to find the help you need.
            </p>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition">
                <h3 className="text-xl font-medium text-green-800 mb-2">General Inquiries</h3>
                <p className="text-gray-600">Questions about temple activities, events, or general information</p>
                <a href="/contact-us" className="text-green-600 hover:underline inline-block mt-2">Contact Us →</a>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition">
                <h3 className="text-xl font-medium text-green-800 mb-2">Donation Support</h3>
                <p className="text-gray-600">Questions about donations, seva contributions, or financial support</p>
                <a href="/contact-us" className="text-green-600 hover:underline inline-block mt-2">Get Help →</a>
              </div>

              <div className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 transition">
                <h3 className="text-xl font-medium text-green-800 mb-2">Technical Support</h3>
                <p className="text-gray-600">Issues with the website, online services, or digital platforms</p>
                <a href="/contact-us" className="text-green-600 hover:underline inline-block mt-2">Report Issue →</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">What are the temple opening hours?</h3>
                <p className="text-gray-600">The temple is open daily from 6:00 AM to 9:00 PM. Special hours may apply during festivals.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How can I participate in temple activities?</h3>
                <p className="text-gray-600">You can join our activities by visiting during scheduled events or contacting our office for volunteer opportunities.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Is there accommodation available for visitors?</h3>
                <p className="text-gray-600">Yes, we provide basic accommodation for pilgrims. Please contact us in advance for availability.</p>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">How can I make a donation?</h3>
                <p className="text-gray-600">Donations can be made in person at the temple office or through our online donation portal.</p>
              </div>
            </div>

            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-green-800 mb-2">Didn't find your answer?</h3>
              <p className="text-gray-600 mb-3">Our support team is ready to help you with any questions.</p>
              <a href="/contact-us" className="bg-green-700 text-white px-4 py-2 rounded-lg inline-block hover:bg-green-800 transition">Contact Support</a>
            </div>
          </div>
        </div>

        <div className="bg-green-700 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Emergency Support</h2>
          <p className="mb-4">For urgent matters requiring immediate assistance, please call our support line:</p>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-2xl font-bold">+91 92656 28726</span>
          </div>
          <p className="mt-3">Available 24/7 for urgent temple-related matters.</p>
        </div>
      </div>
    </div>
  );
};

export default Support;