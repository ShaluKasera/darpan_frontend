import Image from 'next/image';
import React from 'react';

const GalleryCard = ({ image, text }) => {
  return (
    <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
      {image ? (
        <Image
          src={image}
          alt={text || 'Gallery image'}
          fill                          
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
          No Image
        </div>
      )}

      <div className="absolute top-3 left-3 bg-[#FF7043] text-white px-3 py-1 rounded text-xs sm:text-sm font-semibold shadow">
        {text}
      </div>
    </div>
  );
};

export default GalleryCard;
