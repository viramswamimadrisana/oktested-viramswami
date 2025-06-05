'use client';
import { motion } from 'framer-motion';
import { FaPlay, FaVideo, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { Dialog } from '@headlessui/react';

const VideoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('');

  const openModal = (videoUrl: SetStateAction<string>) => {
    setCurrentVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Function to get YouTube thumbnail URL with validation
  const getYouTubeThumbnail = (youtubeId: string) => {
    // Basic pattern check for YouTube IDs (typically 11 characters)
    const isValidId = /^[a-zA-Z0-9_-]{11}$/.test(youtubeId);
    
    if (!isValidId) {
      return '/default-video-thumbnail.jpg';
    }
    
    // Return highest quality thumbnail available
    return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
  };

  const videos = [
    {
      id: 1,
      title: "શ્રીમદ્ ભાગવત કથા",
      youtubeId: "qgx8BWV9W3M",
      duration: "24:35"
    },
    {
      id: 2,
      title: "આરતી અને ભજન",
      youtubeId: "hi8X1G83v20",
      duration: "12:18"
    },
    {
      id: 3,
      title: "પંચમહોત્સવ સમારોહ",
      youtubeId: "dKWh7yjhdw0",
      duration: "42:10"
    },
    {
      id: 4,
      title: "મંદિર પ્રદક્ષિણા",
      youtubeId: "4XAEs_6w5lo",
      duration: "08:45"
    },
    {
      id: 5,
      title: "ભજન સંધ્યા",
      youtubeId: "h5GvemUzTOw", // Invalid ID example
      duration: "15:30"
    },
    {
      id: 6,
      title: "વાર્ષિક ઉત્સવ",
      youtubeId: "vaLrmaRj5HY", // Invalid ID example
      duration: "36:22"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            વિડિઓ ગેલેરી
            <span className="block w-16 h-1 bg-green-600 mx-auto mt-3"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ભજન, કથા અને મંદિરના કાર્યક્રમો
          </motion.p>
        </div>

        {/* Video Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video) => (
            <motion.div 
              key={video.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-video">
                <Image
                  src={getYouTubeThumbnail(video.youtubeId)}
                  alt={video.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null; // Prevent infinite loop
                    target.src = '/default-video-thumbnail.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                <button 
                  onClick={() => openModal(video.youtubeId)}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label={`Play ${video.title}`}
                >
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </button>
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaYoutube className="text-green-600 mr-2" />
                  YouTube
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <motion.a
            href="/videos"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">બધી વિડિઓઝ જુઓ</span>
            <FaVideo className="h-5 w-5" />
          </motion.a>
        </div>

        {/* Video Modal */}
        <Dialog
          open={isOpen}
          onClose={closeModal}
          className="relative z-50"
        >
          {/* The backdrop */}
          <div className="fixed inset-0 bg-black/75" aria-hidden="true" />
          
          {/* Full-screen container */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-6xl rounded-lg bg-transparent">
              <div className="relative aspect-video w-full">
                <button
                  onClick={closeModal}
                  className="absolute -top-10 right-0 text-white hover:text-green-400 z-50"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <iframe
                  src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-2xl"
                />
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoGallery;