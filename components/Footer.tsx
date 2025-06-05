'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { FaWhatsapp, FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: <FaWhatsapp className="text-xl" />, href: "https://chat.whatsapp.com/GOwCjrajneMIfktUqFQGs9", label: "WhatsApp", color: "bg-green-500 hover:bg-green-600" },
    { icon: <FaFacebookF className="text-xl" />, href: "https://www.facebook.com/jayviramswami.madrisana", label: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <FaYoutube className="text-xl" />, href: "https://www.youtube.com/channel/UCQmBR2D3zXZgbkAoD1ZL9Jw", label: "YouTube", color: "bg-red-600 hover:bg-red-700" },
    { icon: <FaInstagram className="text-xl" />, href: "https://www.instagram.com/jay_vadvada_dham_madrisana/", label: "Instagram", color: "bg-pink-600 hover:bg-pink-700" },
    { icon: <FaLinkedinIn className="text-xl" />, href: "#", label: "LinkedIn", color: "bg-blue-500 hover:bg-blue-600" }
  ];

  const quickLinks = [
    { text: "હોમપેજ", href: "/" },
    { text: "દર્શન સમય", href: "/schedule" },
    { text: "દાન કરો", href: "/donate" },
    { text: "ઇતિહાસ", href: "/history" },
    { text: "ફોટો ગેલેરી", href: "/photos" },
    { text: "વિડિઓ", href: "/videos" }
  ];

  const legalLinks = [
    { text: "About Us", href: "/about-us" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Disclaimer", href: "/disclaimer" },
    { text: "Terms of Service", href: "/terms-of-service" },
    { text: "Contact Us", href: "/contact-us" },
    { text: "Support", href: "/support" }
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt className="mt-1 text-xl" />, text: "મદ્રીસણા, ગુજરાત 382145" },
    { icon: <FaPhoneAlt className="text-xl" />, text: "+91 92656 28726" },
    { icon: <FaEnvelope className="text-xl" />, text: "vadvadamadrisana@gmail.com" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>
      <div className="absolute top-10 right-10 opacity-10">
        <div className="w-64 h-64 rounded-full bg-green-500 filter blur-3xl"></div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <div className="w-64 h-64 rounded-full bg-blue-500 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Logo and top section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-24 h-24 hover:scale-105 transition-transform duration-300">
            <Image 
              src="/logo.png" 
              alt="Vadvada Dham Logo" 
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={footerVariants}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h5 className="text-2xl font-bold text-white mb-6 relative pb-3">
              <span className="relative">
                જય શ્રી વિરમ સ્વામી મહારાજ
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-green-200 rounded-full"></span>
              </span>
            </h5>
            <p className="text-gray-400 mb-6 leading-relaxed">
              મદ્રીસણા ગામમાં સ્થિત વડવાડા ધામ એક પવિત્ર તીર્થસ્થળ છે જ્યાં ભક્તો શાંતિ અને આધ્યાત્મિક શક્તિનો અનુભવ કરે છે.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full ${social.color} text-white flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h5 className="text-2xl font-bold text-white mb-6 relative pb-3">
              <span className="relative">
                ઝડપી લિંક્સ
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-200 rounded-full"></span>
              </span>
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="mr-3 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="group-hover:font-medium">{link.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h5 className="text-2xl font-bold text-white mb-6 relative pb-3">
              <span className="relative">
                કાનૂની માહિતી
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-200 rounded-full"></span>
              </span>
            </h5>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center group"
                  >
                    <FaArrowRight className="mr-3 text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <span className="group-hover:font-medium">{link.text}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h5 className="text-2xl font-bold text-white mb-6 relative pb-3">
              <span className="relative">
                સંપર્ક સુચના
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-green-400 to-green-200 rounded-full"></span>
              </span>
            </h5>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.p 
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="text-green-400 mr-3 flex-shrink-0">{info.icon}</span>
                  <span className="text-gray-300 hover:text-white transition-colors group-hover:font-medium">
                    {info.text}
                  </span>
                </motion.p>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h6 className="text-lg font-semibold text-white mb-3">સમાચાર મેળવો</h6>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="તમારો ઇમેઇલ" 
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
                />
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-4 py-2 rounded-r-lg transition-all duration-300 font-medium">
                  જમા કરો
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} <span className="text-green-400 font-bold">જય શ્રી વિરમ સ્વામી મહારાજ, મદ્રીસણા</span>. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="/disclaimer" className="text-gray-400 hover:text-white transition-colors text-sm">Disclaimer</a>
              <a href="/contact-us" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">
              Designed by <a href="https://www.linkedin.com/in/devang-desai-890267348/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Devang Desai</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;