import React from 'react';
import { getLatestGallery } from '@/lib/api/gallery';
import Container from '@/components/layout/Container';
import HomeGallerySectionClient from './HomeGallerySectionClient';

const HomeGallerySection = async () => {
  const galleryItems = await getLatestGallery();
    const latestGallery = galleryItems
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))  
    .slice(0, 4);

  return (
    <Container>
      <section className="py-10 ms-4  ">
        <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-10">From Our Gallery</h2>
        <HomeGallerySectionClient galleryItems={latestGallery} />
      </section>
    </Container>
  );
};

export default HomeGallerySection;
