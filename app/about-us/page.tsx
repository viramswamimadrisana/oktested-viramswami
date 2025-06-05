import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Welcome to Shri Vadwala Mandir, Madrisana - Rupa Tekri
        </h1>
        <p className="text-lg mb-6">
          Shri Vadwala Mandir, located in the spiritually enriched lands of Madrisana - Rupa Tekri, is a divine center of worship, service, and peace. Founded by the great saint Bhagat Shri Viram Swami Maharaj, our temple stands as a beacon of spiritual guidance, rooted in centuries-old traditions of devotion and selfless service.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Legacy and Spiritual Heritage</h2>
            <p className="mb-4">
              The spiritual legacy of Shri Vadwala Mandir can be traced back to the 15th century when Bhagat Shri Viram Swami Maharaj, a revered saint of the Rabari community, established this holy place.
            </p>
            <p>
              The rich history of the temple includes the spiritual contributions of various saints from different backgrounds—Rabari, Charan, Kshatriya, and Valmiki communities—who have helped shape this temple into what it is today.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Vision and Mission</h2>
            <p className="mb-4">
              Our vision is to create a harmonious society where people from all walks of life can experience spiritual growth and inner peace.
            </p>
            <p>
              The mission of Shri Vadwala Mandir is simple: to serve humanity by promoting spiritual awakening and providing charitable services.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Our Services and Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-2">Annapurna Annakshetra</h3>
              <p>A community kitchen that provides free meals to thousands of people daily.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-2">Shri Viram Swami Gaushala</h3>
              <p>A cow sanctuary dedicated to the protection and care of cows.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-2">Educational Assistance</h3>
              <p>Scholarships and financial aid for underprivileged students pursuing education.</p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg">
              <h3 className="text-xl font-medium text-green-800 mb-2">Guest Services</h3>
              <p>Comfortable lodging and food for visiting pilgrims and devotees.</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">Spiritual Festivals and Major Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-green-800">Panchamrut Mahotsav</h3>
              <p>A grand spiritual festival celebrated with the consecration of the temple and the installation of new deities.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-green-800">Vishnu Mahayagna</h3>
              <p>A large-scale Yagna (sacred fire ritual) performed to invoke the blessings of Lord Vishnu.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-medium text-green-800">Shrimad Bhagwat Katha</h3>
              <p>A week-long event where renowned spiritual leaders narrate the stories of the Bhagwat Purana.</p>
            </div>
          </div>
        </div>

        <div className="bg-green-700 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Invitation to All</h2>
          <p>
            At Shri Vadwala Mandir, everyone is welcome. We believe that the path to spiritual enlightenment is open to all, regardless of caste, creed, or religion. Our temple doors are always open to those seeking peace, guidance, and blessings.
          </p>
        </div>
      </div>

      {/* Gujarati Version */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          શ્રી વડવાળા મંદિર, મદ્રિસણા - રૂપા ટેકરીમાં આપનું સ્વાગત છે
        </h1>
        <p className="text-lg mb-6">
          શ્રી વડવાળા મંદિર, મદ્રિસણા - રૂપા ટેકરીના આધ્યાત્મિક રીતે સમૃદ્ધ ભૂમિ પર સ્થિત છે, જે ભક્તિ, સેવા અને શાંતિનું પવિત્ર કેન્દ્ર છે. મહાન સંત ભક્ત શ્રી વિરમ સ્વામી મહારાજ દ્વારા સ્થાપિત, આ મંદિર શ્રદ્ધા અને નિસ્વાર્થ સેવા જેવી સદીઓ જૂની પરંપરાઓમાં જડ છે અને આધ્યાત્મિક માર્ગદર્શકતા માટે પ્રકાશ તરીકે ઉભા છે.
        </p>

        {/* Map */}
        <div className="mt-8 rounded-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266.9829322408166!2d72.21754493285708!3d23.38915668965789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c115f439687b3%3A0x7c5a8afea2dc912!2s96Q8%2BJXQ%2C%20Fatepura%2C%20Madrisana%2C%20Gujarat%20382145!5e0!3m2!1sen!2sin!4v1726043502781!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{border:0}}
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;