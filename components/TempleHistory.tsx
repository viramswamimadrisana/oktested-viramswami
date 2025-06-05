'use client';

import { motion } from 'framer-motion';
import {  FaCat, FaBook } from 'react-icons/fa';
import { GiStonePath, GiHolyWater } from 'react-icons/gi';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { RiAncientGateFill } from 'react-icons/ri';

const TempleHistory = () => {
  const historyItems = [
    {
      icon: <RiAncientGateFill className="text-4xl" />,
      title: "નવ ચેતન સમાધિ સ્થાન",
      description: "મહંત શ્રી બાલકદાસબાપુની સમાધિ સ્થળ",
      year: "1950",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: <GiHolyWater className="text-4xl" />,
      title: "દુધની ધારા",
      description: "ચમત્કારિક દુધના ઝરણાની કથા",
      year: "1962",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaCat className="text-4xl" />,
      title: "બિલાડી સજીવન",
      description: "શ્રી સ્વામીજીનો ચમત્કાર",
      year: "1975",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <GiStonePath className="text-4xl" />,
      title: "ચૌદ પરગણાની ટેલ",
      description: "પ્રાચીન ઇતિહાસ અને મહત્વ",
      year: "1988",
      color: "from-emerald-500 to-teal-600"
    }
  ];



  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-purple-300 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-300 filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-amber-300 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-4">
              ધાર્મિક ઇતિહાસ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative">
              <span className="relative inline-block">
                મંદિરનો ઇતિહાસ
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              શ્રી વિરમ સ્વામી મહારાજ અને મંદિરની પ્રાચીન કથા, જે સદીઓથી લોકોના હૃદયમાં વસે છે
            </p>
          </motion.div>
        </div>

        {/* Timeline section */}
        <div className="relative">
          {/* Animated timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-green-300 via-blue-400 to-purple-500 transform -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full h-0 bg-gradient-to-b from-green-500 to-blue-600"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {historyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className={`relative ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left lg:mt-20'}`}
              >
                {/* Timeline dot with animation */}
                <div className="hidden lg:flex absolute top-6 left-1/2 w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-full transform -translate-x-1/2 items-center justify-center text-white font-bold shadow-lg">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6,
                      delay: index * 0.2 + 0.3,
                      type: "spring"
                    }}
                  >
                    <BsFillCalendar2EventFill />
                    <span className="absolute -bottom-6 text-xs font-normal">{item.year}</span>
                  </motion.div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 hover:border-transparent relative overflow-hidden group">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className={`flex ${index % 2 === 0 ? 'lg:justify-end' : ''} relative z-10`}>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${item.color} text-white shadow-md`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                  <div className="lg:hidden flex items-center text-sm font-medium text-gray-500">
                    <BsFillCalendar2EventFill className="mr-2" />
                    {item.year}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials section */}
       

        {/* CTA section */}
        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">વધુ જાણકારી મેળવો</h3>
            <motion.a
              href="/history"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-green-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center">
                <FaBook className="mr-3 text-lg" />
                <span className="text-lg">સંપૂર્ણ ઇતિહાસ વાંચો</span>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Additional decorative element */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TempleHistory;