// components/About.jsx
import React from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";

const HomeBottomSection = () => {
  return (
    <Container className=" pt-20 md:pt-20 pb-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-5">
       
        <div className="w-full md:w-1/2">
          <p className="text-[#FF7043] font-bold text-2xl md:text-3xl mb-2">Pillar of ICCHE</p>
          <p className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
           Our Volunteers
          </p>
          <p className="text-gray-800 text-sm  leading-relaxed mb-6">
            ICCHE is driven by the dedication of volunteers, who are college students from various academic years. These passionate individuals not only teach subjects like Math, Science, and English but also guide students in developing good manners, discipline, and social values. Volunteers play a crucial role in shaping the future of underprivileged children by providing them with knowledge, mentorship, and emotional support. Their selfless efforts help create a nurturing learning environment where every child feels valued and encouraged to grow. These volunteers are the true pillars of our society, working tirelessly to bring positive change and empower the next generation.
          </p>
          
        </div>
         <div className="w-full md:w-1/2">
          <Image
            src="/images/homeImage2.jpeg"
            alt="About ICCHE"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeBottomSection;
