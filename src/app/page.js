import HomeAboutSection from "@/components/sections/home/HomeAboutSection";
import HomeBottomSection from "@/components/sections/home/HomeBottomSection";
import HomeFeaturesSection from "@/components/sections/home/HomeFeaturesSection";
import HomeGallerySection from "@/components/sections/home/HomeGallerySection";
import HomeHeroSection from "@/components/sections/home/HomeHeroSection";
import HomeStudentsSection from "@/components/sections/home/HomeStudentsSection";

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeFeaturesSection/>
      <HomeStudentsSection/>
      <HomeGallerySection/>
      <HomeBottomSection/>
    </div>
  );
}
