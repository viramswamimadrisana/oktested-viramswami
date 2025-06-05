'use client';

import { motion } from 'framer-motion';
import { FaBell, FaClock, FaMapMarkerAlt, FaInfoCircle, FaLeaf } from 'react-icons/fa';

const TempleSchedule = () => {
  const scheduleItems = [
    { time: '4:30 AM', event: 'મંગળા આરતી', description: 'પ્રભાતની જાગૃતિ સમારંભ' },
    { time: '5:30 AM', event: 'બાલભોગ', description: 'દેવતાને પ્રથમ નૈવેદ્ય' },
    { time: '6:00 AM', event: 'શણગાર આરતી', description: 'શણગાર અને પૂજન' },
    { time: '11:00 AM', event: 'રાજભોગ', description: 'મુખ્ય મધ્યાહ્ન નૈવેદ્ય' },
    { time: '7:45 PM', event: 'સંધ્યા આરતી', description: 'સાંજનો સમારંભ' },
    { time: '8:30 PM', event: 'શયન આરતી', description: 'રાત્રિ વિશ્રામ સમારંભ' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 20px rgba(5, 150, 105, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <FaLeaf className="text-emerald-600 mr-3 text-2xl" />
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900">
              શ્રી વિરમસ્વામી મહારાજ મંદિર સમયપત્રક
            </h2>
            <FaLeaf className="text-emerald-600 ml-3 text-2xl" />
          </div>
          <p className="text-lg text-emerald-700 max-w-2xl mx-auto">
            શ્રી વિરમસ્વામી મહારાજના દિવ્ય દર્શન માટેનો દૈનિક કાર્યક્રમ
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mx-auto mt-4"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Temple Info */}
          <div className="lg:w-2/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100 h-full"
            >
              <div className="flex items-center mb-8">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaClock className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800">મંદિર ખુલ્વાનો સમય</h3>
                  <p className="text-gray-700 mt-1">
                    સવારે 4:30 થી બપોરે 12:30<br />
                    સાંજે 4:00 થી રાત્રે 9:00
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800">સ્થાન</h3>
                  <p className="text-gray-700 mt-1">
                    શ્રી વિરમસ્વામી મહારાજ મંદિર,<br />
                    [તમારું સ્થાન], ગુજરાત [પિન કોડ]
                  </p>
                  <a href="#" className="text-emerald-600 hover:text-emerald-800 text-sm mt-2 inline-block">
                    મેપ પર જુઓ →
                  </a>
                </div>
              </div>

              <div className="flex items-start mb-8">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <FaInfoCircle className="text-emerald-700 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-emerald-800">મહત્વપૂર્ણ સૂચના</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-1 space-y-1">
                    <li>વિશેષ દર્શન માટે અગાઉથી બુકિંગ</li>
                    <li>ફોટોગ્રાફી પર પ્રતિબંધ</li>
                    <li>મોબાઇલ ફોન સાઇલેન્ટ મોડમાં રાખો</li>
                    <li>સ્વચ્છતા અને શિસ્ત જાળવો</li>
                  </ul>
                </div>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaBell />
                દર્શન માટે સંપર્ક કરો
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column - Schedule */}
          <div className="lg:w-3/5">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-emerald-300 to-green-400 rounded-full"></div>
              
              <motion.ul
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {scheduleItems.map((item, index) => (
                  <motion.li
                    key={index}
                    className="relative pl-20"
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center text-emerald-700 border-4 border-white shadow-lg">
                      <FaBell className="text-xl" />
                      <span className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-emerald-400">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                        <span className="font-bold text-emerald-800 text-lg">
                          {item.time}
                        </span>
                        <span className="bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold">
                          {item.event}
                        </span>
                      </div>
                      <p className="text-gray-700 mt-3">{item.description}</p>
                      {index === 0 && (
                        <div className="mt-3 text-sm text-emerald-600 flex items-center gap-1">
                          <FaInfoCircle />
                          પ્રથમ દર્શન માટે ખાસ સુવિધા
                        </div>
                      )}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Special Note */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-emerald-50 border border-emerald-200 rounded-xl p-6"
              >
                <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                  <FaInfoCircle className="text-emerald-600" />
                  ખાસ નોંધ
                </h4>
                <p className="text-emerald-700">
                  શ્રી વિરમસ્વામી મહારાજના ભક્તો માટે વિશેષ દિવસોમાં સમયપત્રકમાં ફેરફાર થઈ શકે છે. 
                  કૃપા કરીને મંદિર પ્રશાસન સાથે ચકાસણી કરો.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TempleSchedule;