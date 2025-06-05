 'use client';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, 
   SiMongodb, SiPostgresql, SiAmazon,
  SiDocker, SiKubernetes, SiAndroid, SiSpring,
  SiJavascript, SiFirebase
} from 'react-icons/si';
import {FaJava } from 'react-icons/fa';
import { FaGraduationCap, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { span } from 'framer-motion/client';
import Image from 'next/image';

const LocationAndDeveloper = () => {
  // Enhanced tech stack with categories
  const techStack = [
    { name: 'Java', icon: <FaJava className="text-3xl text-red-500" />, category: 'Language' },
    { name: 'Android', icon: <SiAndroid className="text-3xl text-green-500" />, category: 'Mobile' },
    { name: 'Spring Boot', icon: <SiSpring className="text-3xl text-green-600" />, category: 'Backend' },
    { name: 'React', icon: <SiReact className="text-3xl text-blue-400" />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs className="text-3xl text-black dark:text-white" />, category: 'Fullstack' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-3xl text-green-600" />, category: 'Backend' },
    { name: 'TypeScript', icon: <SiTypescript className="text-3xl text-blue-600" />, category: 'Language' },
    { name: 'MongoDB', icon: <SiMongodb className="text-3xl text-green-700" />, category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-3xl text-blue-800" />, category: 'Database' },
    { name: 'AWS', icon: <SiAmazon className="text-3xl text-orange-500" />, category: 'Cloud' },
    { name: 'Docker', icon: <SiDocker className="text-3xl text-blue-500" />, category: 'DevOps' },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-3xl text-blue-600" />, category: 'DevOps' },
    { name: 'JavaScript', icon: <SiJavascript className="text-3xl text-yellow-400" />, category: 'Language' },
    { name: 'Firebase', icon: <SiFirebase className="text-3xl text-yellow-500" />, category: 'Backend' },
  ];

  return (
    <>
      {/* Google Map Section - Satellite View */}
      <section className="relative h-[500px] w-full overflow-hidden rounded-xl shadow-2xl my-12 border-4 border-white dark:border-gray-800">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="h-full w-full"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.104365399574!2d72.2175449!3d23.3891567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c115f439687b3%3A0x7c5a8afea2dc912!2sShri%20Viram%20Swami%20Maharaj%20Temple!5e0!3m2!1sen!2sin!4v1726043502781!5m2!1sen!2sin&output=embed&hl=en&z=18&t=k" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="satellite-view"
          />
        </motion.div>
        
        {/* Floating address card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute bottom-6 left-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
        >
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-red-500 text-xl mr-2" />
            <div>
              <h3 className="font-bold text-gray-800 dark:text-white">શ્રી વિરમ સ્વામી મંદિર</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">મદ્રીસણા, ગુજરાત 382145</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Developer Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Website Developer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-4/5 bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Developer Photo */}
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
                  <div className="relative">
                    <Image 
                      src="/devangs.png" 
                      alt="Devang Desai" 
                      width={500} height={300}
                      className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-md">
                      BCA-MCA
                    </div>
                  </div>
                </div>
                
                {/* Developer Info */}
                <div className="lg:w-2/3 p-8">
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Devang Desai</h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-6">
                    <FaGraduationCap className="mr-2 text-blue-500" />
                    <span>Ganpat University</span>
                  </div>
                  
                  {/* Tech Stack Grid */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">Tech Stack</h4>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                      {techStack.map((tech, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ y: -5, scale: 1.05 }}
                          className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="mb-2">{tech.icon}</div>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="mailto:1desaidevang@gmail.com"
                      className="flex items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-5 py-3 rounded-lg transition-all"
                    >
                      <FaEnvelope className="mr-3 text-blue-500" />
                      <span>1desaidevang@gmail.com</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="tel:+916354663206"
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg transition-all"
                    >
                      <FaPhoneAlt className="mr-3" />
                      <span>+91 63546 63206</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationAndDeveloper;