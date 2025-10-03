import React from 'react';
import FeatureCard from '@/components/cards/HomeFeatureCard';

const features = [
  {
    image: '/images/computer.png', 
    title: 'Computer Classes',
    description: 'We teach basic computer skills to help students grow digitally.',
  },
  {
    image: '/images/seperate-class.png',
    title: 'Separate Classes',
    description: "We conduct different classes for junior and senior students' needs.",
  },
  {
    image: '/images/sports-day.png',
    title: 'Sports Day',
    description: 'A fun-filled day with games, races, and joyful student participation.',
  },
  {
    image: '/images/festival.png',
    title: 'Festival Celebrations',
    description: 'We celebrate all festivals together, spreading joy, culture, and unity.',
  },
];

const HomeFeaturesSection = () => {
  return (
    
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeFeaturesSection;
