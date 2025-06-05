import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const HistoryPage = () => {
  const images = [
    "https://i.postimg.cc/15gCtZ3X/FULLBOOK1-images-1.jpg",
    "https://i.postimg.cc/rmPGXKWJ/FULLBOOK1-images-2.jpg",
    "https://i.postimg.cc/wT7qj3NN/FULLBOOK1-images-3.jpg",
    "https://i.postimg.cc/jq8qTyDK/FULLBOOK1-images-4.jpg",
    "https://i.postimg.cc/fygMvQGk/FULLBOOK1-images-5.jpg",
    "https://i.postimg.cc/BQkqLs5V/FULLBOOK1-images-6.jpg",
    "https://i.postimg.cc/6pZBCSY5/FULLBOOK1-images-7.jpg",
    "https://i.postimg.cc/k72GnYNH/FULLBOOK1-images-8.jpg",
    "https://i.postimg.cc/BvcsVKrr/FULLBOOK1-images-9.jpg",
    "https://i.postimg.cc/TwdGMPGp/FULLBOOK1-images-10.jpg",
    "https://i.postimg.cc/Jnp81W4K/FULLBOOK1-images-11.jpg",
    "https://i.postimg.cc/Fz14znYv/FULLBOOK1-images-12.jpg",
    "https://i.postimg.cc/8c3V6Bv6/FULLBOOK1-images-13.jpg",
    "https://i.postimg.cc/59kJT1r2/FULLBOOK1-images-14.jpg",
    "https://i.postimg.cc/CLB0VXyH/FULLBOOK1-images-15.jpg",
    "https://i.postimg.cc/ZKGSYH4k/FULLBOOK1-images-16.jpg",
    "https://i.postimg.cc/8zLV7vz7/FULLBOOK1-images-17.jpg",
    "https://i.postimg.cc/xdYVMdXt/FULLBOOK1-images-18.jpg",
    "https://i.postimg.cc/DzgkgKsF/FULLBOOK1-images-19.jpg",
    "https://i.postimg.cc/4dxC2Fbc/FULLBOOK1-images-20.jpg",
    "https://i.postimg.cc/VvJxmrhL/FULLBOOK1-images-21.jpg",
    "https://i.postimg.cc/wMnSvxK5/FULLBOOK1-images-22.jpg",
    "https://i.postimg.cc/fybwXRg6/image-18.jpg",
    "https://i.postimg.cc/dQXMn677/FULLBOOK1-images-23.jpg",
    "https://i.postimg.cc/5NFhrzvs/FULLBOOK1-images-24.jpg",
    "https://i.postimg.cc/wj8CYBQg/FULLBOOK1-images-25.jpg",
    "https://i.postimg.cc/P5WBXkSZ/FULLBOOK1-images-26.jpg",
    "https://i.postimg.cc/25TMW7RS/FULLBOOK1-images-27.jpg",
    "https://i.postimg.cc/hGKNh3YY/FULLBOOK1-images-28.jpg",
    "https://i.postimg.cc/RFF8LJ4Q/FULLBOOK1-images-29.jpg",
    "https://i.postimg.cc/50Rr79tc/FULLBOOK1-images-30.jpg",
    "https://i.postimg.cc/D04MtVWS/FULLBOOK1-images-31.jpg"
  ];

  return (
    <>
      <Head>
        <title>ઈતિહાસ - Temple History</title>
        <meta name="description" content="Explore the rich history of our temple through these historical images and documents" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-green-800 mb-4 font-gujarati">ઈતિહાસ</h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Explore the sacred journey of our temple through these historical documents and images that capture our rich heritage.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((img, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
              <div className="relative w-full aspect-w-3 aspect-h-4">
  <Image 
    src={img} 
    alt={`Historical document page ${index + 1}`}
    className="object-cover"
    loading="lazy"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
                <div className="p-4 bg-green-50">
                  <p className="text-green-800 font-medium">Page {index + 1}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Historical Context Section */}
          <div className="mt-16 bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-6">Our Sacred History</h2>
            <div className="prose prose-green max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                These precious documents chronicle the spiritual journey of our temple through the ages. Each page reveals stories of devotion, community, and divine blessings that have shaped our sacred space.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                The green tones in this presentation symbolize growth, renewal, and the eternal nature of our traditions - just as leaves return to the tree each spring, our faith continues to blossom through generations.
              </p>
              <div className="border-l-4 border-green-500 pl-4 my-6">
                <p className="italic text-green-700">
                  "A temple's history is not just written in stone, but in the hearts of those who worship there."
                </p>
              </div>
              <p className="text-lg text-gray-700">
                We invite you to explore these pages mindfully, appreciating both the spiritual wisdom they contain and the physical artifacts that have preserved this knowledge for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;