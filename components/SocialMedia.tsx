'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  const socialPlatforms = [
    {
      icon: <FaFacebook className="text-3xl" />,
      name: "Facebook",
      handle: "@jayviramswami.madrisana",
      link: "https://www.facebook.com/jayviramswami.madrisana",
      followers: "5.2K",
      color: "bg-blue-600"
    },
    {
      icon: <FaYoutube className="text-3xl" />,
      name: "YouTube",
      handle: "Vadwala Dham Official",
      link: "https://www.youtube.com/channel/UCQmBR2D3zXZgbkAoD1ZL9Jw",
      followers: "3.8K",
      color: "bg-red-600"
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      name: "Instagram",
      handle: "@jay_vadvada_dham_madrisana",
      link: "https://www.instagram.com/jay_vadvada_dham_madrisana/",
      followers: "2.1K",
      color: "bg-pink-600"
    },
    {
      icon: <FaWhatsapp className="text-3xl" />,
      name: "WhatsApp",
      handle: "Community Group",
      link: "https://chat.whatsapp.com/GOwCjrajneMIfktUqFQGs9",
      members: "500+",
      color: "bg-green-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            અમારી સાથે જોડાઓ
            <span className="block w-16 h-1 bg-green-600 mx-auto mt-3"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            સોશિયલ મીડિયા દ્વારા મંદિરના સમાચાર અને અપડેટ્સ પ્રાપ્ત કરો
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className={`${platform.color} h-2`}></div>
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">{platform.name}</h3>
                <p className="text-gray-600 text-center mb-3">{platform.handle}</p>
                <p className="text-center font-medium mb-4">
                  {platform.followers ? `${platform.followers} followers` : `${platform.members} members`}
                </p>
                <motion.a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center ${platform.color} hover:opacity-90 text-white py-2 px-4 rounded-lg transition-colors`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Follow Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">WhatsApp ગ્રુપમાં જોડાઓ</h3>
              <p className="opacity-90">તાજા સમાચાર અને અપડેટ્સ મેળવવા અમારા ગ્રુપમાં જોડાઓ</p>
            </div>
            <motion.a
              href="https://chat.whatsapp.com/GOwCjrajneMIfktUqFQGs9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full flex items-center whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2 text-xl" />
              Join Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;