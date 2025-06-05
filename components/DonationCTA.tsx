'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRupeeSign, FaQrcode, FaMapMarkerAlt, FaHandHoldingHeart } from 'react-icons/fa';
import { SiGooglepay, SiPhonepe, SiPaytm } from 'react-icons/si';

const DonationCTA = () => {
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/mZUootFRuX5aVbpq7', '_blank');
  };

  const copyUPI = () => {
    navigator.clipboard.writeText('haridasjibalakdasji@oksbi');
    alert('UPI ID copied to clipboard!');
  };

  const openPaymentApp = (app: string) => {
    let url;
    switch(app) {
      case 'gpay':
        url = `tez://upi/pay?pa=haridasjibalakdasji@oksbi&pn=JayViramSwamiMadrisana&cu=INR`;
        break;
      case 'phonepe':
        url = `phonepe://upi/pay?pa=haridasjibalakdasji@oksbi&pn=JayViramSwamiMadrisana&cu=INR`;
        break;
      case 'paytm':
        url = `paytmmp://upi/pay?pa=haridasjibalakdasji@oksbi&pn=JayViramSwamiMadrisana&cu=INR`;
        break;
      default:
        return;
    }
    window.location.href = url;
  };

  return (
    <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                સેવા અને સહાયમાં <br/>યોગદાન આપો
              </h2>
              
              {/* QR Code Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="bg-white p-4 rounded-xl">
                    {/* Replace with your QR code path */}
                    <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      <Image
                        src="/qrcode.png"
                        alt="QR Code"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <FaQrcode /> UPI દ્વારા દાન
                    </h3>
                    <div className="bg-white/10 p-3 rounded-lg mb-4">
                      <p className="text-sm opacity-80 mb-1">UPI ID</p>
                      <p className="text-lg font-mono">haridasjibalakdasji@oksbi</p>
                    </div>
                    <button 
                      onClick={copyUPI}
                      className="bg-white text-green-700 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium w-full mb-3"
                    >
                      Copy UPI ID
                    </button>
                    <div className="flex gap-3">
                      <button 
                        onClick={() => openPaymentApp('gpay')}
                        className="flex-1 bg-[#4285F4] hover:bg-[#3367D6] p-2 rounded-lg flex items-center justify-center gap-2"
                      >
                        <SiGooglepay size={20} /> Pay
                      </button>
                      <button 
                        onClick={() => openPaymentApp('phonepe')}
                        className="flex-1 bg-[#5F259F] hover:bg-[#4A1E7F] p-2 rounded-lg flex items-center justify-center gap-2"
                      >
                        <SiPhonepe size={20} /> Pay
                      </button>
                      <button 
                        onClick={() => openPaymentApp('paytm')}
                        className="flex-1 bg-[#00BAF2] hover:bg-[#0095D9] p-2 rounded-lg flex items-center justify-center gap-2"
                      >
                        <SiPaytm size={20} /> Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-6">
            {/* Donation Amounts */}
           
            {/* Visit Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <FaMapMarkerAlt /> અમને મળો
              </h3>
              <p className="mb-4 opacity-90">
                મંદિરમાં સીધા આવીને તમારું દાન અર્પણ કરો
              </p>
              <button 
                onClick={openGoogleMaps}
                className="bg-white text-green-700 hover:bg-gray-100 px-4 py-3 rounded-lg font-medium w-full flex items-center justify-center gap-2"
              >
                <FaMapMarkerAlt /> Google Maps પર જુઓ
              </button>
            </motion.div>

            {/* Other Options */}
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCTA;