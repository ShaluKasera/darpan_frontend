'use client';

import React, { useState, useRef, useEffect } from 'react';
import Container from '@/components/layout/Container';
import GalleryCard from '@/components/cards/GalleryCard';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { getAllPhotos } from '@/lib/api/gallery'; // import your API function

const categories = [
  'All', 'Sports Day', 'Farewell', 'Cloth Donaton',
  'Republic Day', 'Diwali', 'Independence day', 'Origami',
  'Drawing Compititon', 'Holi', 'Other',
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [zoomImage, setZoomImage] = useState(null);
  const scrollRef = useRef(null);


useEffect(() => {
  const fetchPhotos = async () => {
    setLoading(true);
    const data = await getAllPhotos();
    let filtered = data;

    if (selectedCategory !== "All") {
      filtered = data.filter(item => item.title === selectedCategory);
    }

    setGalleryData(filtered);
    setLoading(false);
  };
  fetchPhotos();
}, [selectedCategory]);


  return (
    <div className="pt-[150px] mx-5">
      <Container>
        <h1 className="text-[#FF7043] font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-8">
          Gallery
        </h1>

        {/* Scrollable Category List */}
        <div className="relative mb-6">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow lg:hidden"
          >
            <FaChevronLeft size={16} />
          </button>

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide px-8 sm:px-0">
            <ul className="flex gap-3 sm:gap-4 md:gap-5 whitespace-nowrap">
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer px-3 py-1 border rounded-full text-sm sm:text-base transition ${selectedCategory === category
                      ? 'bg-[#FF7043] text-white'
                      : 'text-gray-500 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow lg:hidden"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        <hr className="text-gray-300 mb-8" />

        {/* Image Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : galleryData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {galleryData.map((item, index) => (
  <div
    key={index}
    onClick={() => setZoomImage(item.image)}
    className="cursor-zoom-in"
  >
    <GalleryCard image={item.image} text={item.title} />
  </div>
))}


          </div>
        ) : (
          <p className="text-center text-gray-500">No images found.</p>
        )}
      </Container>

      {/* Zoom Modal */}
      {zoomImage && (
        <div
          onClick={() => setZoomImage(null)}
          className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center"
        >
          <div className="relative max-w-3xl w-full p-4">
            <button
              onClick={() => setZoomImage(null)}
              className="absolute top-0 right-0 cursor-pointer hover:text-[#FF7043] text-white text-xl"
            >
              <FaTimes />
            </button>
            <img
              src={zoomImage}
              alt="Zoomed"
              className="w-full h-auto object-contain rounded shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
