'use client';
import React from 'react';
import HomeGalleryCard from '@/components/cards/HomeGalleryCard';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/navigation';

const HomeGallerySectionClient = ({ galleryItems }) => {
  const router = useRouter();

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleryItems.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">No gallery items found.</p>
        ) : (
          galleryItems.map((item, idx) => (
            <div
              key={item._id}
              className={`
                ${idx > 0 ? 'hidden' : ''} 
                md:${idx > 1 ? 'hidden' : ''} 
                lg:block
              `}
            >
              <HomeGalleryCard 
                image={item.photos?.[0] || '/images/dummy.jpg'} 
                title={item.title} 
              />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-center mb-10">
        <Button
          className="w-[150px]"
          text="View Gallery"
          onClick={() => router.push('/gallery')}
        />
      </div>
    </>
  );
};

export default HomeGallerySectionClient;
