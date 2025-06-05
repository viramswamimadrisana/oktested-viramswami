'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Page() {
  type BookItem = {
    id: number;
    title: string;
    author: string;
    thumbnail: string;
    link: string;
    description?: string;
  };

  const BooksSection = () => {
    const [hoveredBook, setHoveredBook] = useState<number | null>(null);

    const books: BookItem[] = [
      {
        id: 1,
        title: 'શ્રી વિરમ સ્વામી મહારાજ નું જીવન ચરિત્ર',
        author: 'લેખક: દાદુ રબારી',
        thumbnail: 'https://i.postimg.cc/Qt7fNQbt/FULLBOOK1-images-0.jpg',
        link: 'https://drive.google.com/uc?id=1G285xayZ1dN9whyrV0WJKN0BgROzVlyu',
        description: 'આધ્યાત્મિક માર્ગદર્શન અને જીવન દર્શન થી ભરપૂર પુસ્તક'
      },
      // Add more books here when available
      // {
      //   id: 2,
      //   title: 'Book Title 2',
      //   author: 'Author 2',
      //   thumbnail: 'path/to/thumbnail2.jpg',
      //   link: 'link-to-book2',
      //   description: 'Description for book 2'
      // }
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
      <div className="min-h-screen">
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
                પુસ્તકાલય
                <span className="block w-16 h-1 bg-green-600 mx-auto mt-3"></span>
              </motion.h2>
              <motion.p 
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                અમારા મંદિર અને સંતો સંબંધિત પુસ્તકો
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {books.map((book) => (
                <motion.div
                  key={book.id}
                  className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs mx-auto bg-white"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredBook(book.id)}
                  onMouseLeave={() => setHoveredBook(null)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={book.thumbnail}
                      alt={book.title}
                      width={300}
                      height={400}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    {hoveredBook === book.id && (
                      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
                        <h3 className="text-white text-xl font-bold mb-2 text-center">{book.title}</h3>
                        <p className="text-green-200 mb-4 text-center">{book.author}</p>
                        {book.description && (
                          <p className="text-gray-200 text-sm mb-4 text-center">{book.description}</p>
                        )}
                        <div className="flex gap-4">
                          <a 
                            href={book.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-green-700 font-semibold py-2 px-4 rounded-full hover:bg-green-50 transition-colors duration-300 text-sm"
                          >
                            ડાઉનલોડ કરો
                          </a>
                          <a 
                            href={`/books/${book.id}`}
                            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition-colors duration-300 text-sm"
                          >
                            વાંચો
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{book.title}</h3>
                    <p className="text-sm text-gray-600">{book.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* View All Books button */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="/books" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                બધા પુસ્તકો જુઓ
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    );
  };

  return <BooksSection />;
}

export default Page;