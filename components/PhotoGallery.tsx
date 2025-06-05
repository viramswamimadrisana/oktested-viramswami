'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiZoomIn, FiX } from 'react-icons/fi';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: 'https://content.jdmagicbox.com/v2/comp/surendra_nagar-gujarat/k8/9999p2752.2752.140312225353.n1k8/catalogue/vadwala-mandir-dudhrej-surendra-nagar-gujarat-temples-S8F1fkBycG.jpg',
      alt: 'Temple Celebration',
      category: 'Festivals'
    },
    {
      id: 2,
      src: 'https://i.ytimg.com/vi/qgx8BWV9W3M/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA34o0iJC7Zs-H8tmO40oNBRVkUaw',
      alt: 'Religious Ceremony',
      category: 'Rituals'
    },
    {
      id: 3,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUDru74VPmpXKGT1QLsmzIh9oinuSukB8EyA&s',
      alt: 'Devotees Gathering',
      category: 'Community'
    },
        {
      id: 4,
      src: 'https://img.youtube.com/vi/ATSkVWu8lds/maxresdefault.jpg',
      alt: 'Religious Ceremony',
      category: 'Rituals'
    },
    {
      id: 5,
      src: '/slider-1.jpg',
      alt: 'Devotees Gathering',
      category: 'Community'
    },
        {
      id: 6,
      src: '/slider-2.png',
      alt: 'Religious Ceremony',
      category: 'Rituals'
    },
 
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ફોટો ગેલેરી
            <span className="block w-16 h-1 bg-green-600 mx-auto mt-3"></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            અમારા મંદિર અને સમારોહના સુંદર ક્ષણો
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedImage(item)}
                className="absolute top-4 right-4 bg-white/90 text-green-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                aria-label="Zoom in"
              >
                <FiZoomIn size={20} />
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
                 <motion.a
            href="/videos"
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">બધી ફોટોઝ જુઓ</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute -top-12 right-0">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="bg-white text-green-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close lightbox"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                <p className="text-green-300">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
