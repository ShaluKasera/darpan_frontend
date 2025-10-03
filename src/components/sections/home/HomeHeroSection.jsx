import React from "react";
import Container from "@/components/layout/Container";
import { getHeroImages } from "@/lib/api/homepageImage";
import HeroSlideshow from "./HeroSlideshow";

const HomeHeroSection = async () => {
  const heroImages = await getHeroImages();

  const images = heroImages.length > 0 ? heroImages : [
    { coverImageURL: "/images/dummy.jpg" }
  ];

  return (
    <div className="pt-[120px]">


      <section className="relative w-full h-screen md:h-[90vh] text-white flex items-center justify-center">
        <HeroSlideshow images={images} />
        <div className="absolute  inset-x-0 bottom-[-80px] px-2 z-20">
          <Container>
            <div className="w-full max-w-6xl bg-[#FFE8DC] text-black flex flex-row justify-between items-center shadow-lg rounded-md md:min-h-[150px] p-2 md:p-0 gap-2 sm:gap-4 md:gap-0 mx-auto overflow-x-auto">
              {/* Stat 1 */}
              <div className="text-center py-2 px-2 sm:px-4 w-full">
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">1K+</p>
                <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
                <p className="text-[10px] sm:text-xs">Students Studied</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center py-2 px-2 sm:px-4 w-full">
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">50+</p>
                <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
                <p className="text-[10px] sm:text-xs">Volunteers</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center py-2 px-2 sm:px-4 w-full">
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-[#FF7043]">50%</p>
                <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
                <p className="text-[10px] sm:text-xs">Success Rate</p>
              </div>

              {/* Goal Box */}
              <div className="bg-[#FF7043] py-2 md:min-h-[150px] h-full px-2 sm:px-4 rounded-md text-white font-semibold text-center text-[10px] sm:text-sm w-full shadow-md flex flex-col items-center justify-center">
                <div>
                  Our goal to help<br /> underprivileged students
                  <div className="h-[2px] sm:h-[4px] w-[40px] sm:w-[60px] bg-yellow-500 mx-auto my-1 sm:my-2 rounded" />
                </div>
              </div>

            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default HomeHeroSection;
