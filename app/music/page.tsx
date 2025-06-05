'use client';
import { motion } from 'framer-motion';
import { FaMusic, FaYoutube, FaSpotify, FaPrayingHands } from 'react-icons/fa';
import Image from 'next/image';

const MusicPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="relative w-32 h-32 mx-auto mb-8">
          <Image
            src="/logo.png"
            alt="Vadvada Dham Logo"
            fill
            className="object-contain"
          />
        </div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-12"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-6">
            <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <FaMusic className="text-4xl" />
              ભજન અને સંગીત
            </h1>
          </div>
          
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg max-w-2xl">
                <p className="text-lg font-medium flex items-center gap-2">
                  <FaPrayingHands className="text-xl" />
                  ક્ષમા કરો, અમે હાલમાં કોઈ ભજન અથવા સંગીત ઉપલબ્ધ નથી
                </p>
              </div>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                શીઘ્ર જ આવી રહ્યું છે!
              </h2>
              <p className="text-gray-600 mb-6">
                અમે શ્રી વિરમ સ્વામી મહારાજના ભજનો અને સંગીતની સંગ્રહિત સૂચિ તૈયાર કરી રહ્યા છીએ. જલદી જ આ સેક્શન ભરપૂર ભજનો અને સંગીતથી ભરી દેવામાં આવશે.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: '45%' }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">45% પૂર્ણ</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaYoutube className="text-4xl text-red-600" />
                  <h3 className="text-xl font-semibold text-gray-800">યુટ્યુબ ચેનલ</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  અમારી યુટ્યુબ ચેનલ પર ભવિષ્યમાં ભજનો અને સત્સંગ વિડિઓઝ જોવા મળશે.
                </p>
                <a
                  href="https://www.youtube.com/channel/UCQmBR2D3zXZgbkAoD1ZL9Jw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                >
                  ચેનલ પર જાઓ
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaSpotify className="text-4xl text-green-500" />
                  <h3 className="text-xl font-semibold text-gray-800">સ્પોટિફાય પ્લેલિસ્ટ</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  ભવિષ્યમાં અમે સ્પોટિફાય પર ભજનોની પ્લેલિસ્ટ ઉપલબ્ધ કરાવીશું.
                </p>
                <button
                  disabled
                  className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed"
                >
                  શીઘ્ર જ આવી રહ્યું
                </button>
              </motion.div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">અમે આ સેક્શનને ઝડપથી અપડેટ કરીશું. કૃપા કરીને થોડા સમય પછી ફરી તપાસો.</span>
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center text-gray-500">
          <p>કોઈ પણ પ્રશ્નો માટે, કૃપા કરીને અમારો <a href="/contact-us" className="text-green-600 hover:underline">સંપર્ક કરો</a> પેજ વિઝિટ કરો.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default MusicPage;