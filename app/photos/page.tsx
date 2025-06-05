'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiZoomIn, FiX, FiArrowDown } from 'react-icons/fi';

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  category: string;
};

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

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
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjDJ73VoEmmPvWib5PaKptrmQbSDiQRCU_w&s',
      alt: 'Temple Architecture',
      category: 'Temple'
    },
    {
      id: 6,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReyyRg9zOwAKf3n_gPomUcd6bm_ofj4OaGWw&s',
      alt: 'Morning Aarti',
      category: 'Rituals'
    },
    {
      id: 7,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR96QH6AV2L6ihcpPBKlcqgjeMY6rzGvB0pdWT6w8_BqsyQpFMFxaTq5qSkbmDKGspxntY&usqp=CAU',
      alt: 'Temple Decorations',
      category: 'Festivals'
    },
    {
      id: 8,
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhqpqP5GC9rNd9grRqzBY-8SWmUxO7jEwWGA&s',
      alt: 'Community Service',
      category: 'Community'
    }
  ];

  // Get unique categories
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  // Filter images by category
  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
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
              className="text-gray-600 md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              અમારા મંદિર અને સમારોહના સુંદર ક્ષણો
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category 
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                layout // Animate layout changes when filtering
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    priority={item.id <= 4} // Prioritize loading first few images
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-medium">{item.alt}</h3>
                      <p className="text-sm text-green-200">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="absolute top-4 right-4 bg-white/90 text-green-700 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:scale-110"
                    aria-label="Zoom in"
                  >
                    <FiZoomIn size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          {filteredItems.length > 8 && (
            <div className="text-center mt-12">
              <motion.button
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">વધુ ફોટોઝ જુઓ</span>
                <FiArrowDown size={20} />
              </motion.button>
            </div>
          )}

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">આ કેટેગરી માં કોઈ ફોટો ઉપલબ્ધ નથી</p>
            </div>
          )}

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <motion.div 
                className="relative max-w-6xl w-full max-h-[90vh]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1600}
                  height={900}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 bg-white text-green-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close lightbox"
                >
                  <FiX size={24} />
                </button>
                <div className="mt-4 text-white text-center">
                  <h3 className="text-xl font-semibold">{selectedImage.alt}</h3>
                  <p className="text-green-300">{selectedImage.category}</p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}