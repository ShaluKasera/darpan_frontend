'use client';
import { useRouter } from 'next/navigation';
import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import Container from "@/components/layout/Container";

const HomeAboutSection = () => {
    const router = useRouter();
  return (
    <Container className=" pt-32 md:pt-40 pb-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-5">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/homeImage1.jpeg"
            alt="About ICCHE"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2">
          <p className="text-[#FF7043] font-bold text-2xl md:text-3xl mb-2">About Us</p>
          <p className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
            Empowering Underprivileged Children Through Education
          </p>
          <p className="text-gray-800 text-sm  leading-relaxed mb-6">
            ICCHE a student's outstretch programme, an initiative by center of studies in science, technology and culture started by students of IIEST Shibpur in 2016 as an evening school under the Department ofHumanities and Social Sciences. Since, 2016 it is providing supportive environment for underprivileged children
          </p>
          <Button
            text="Read More"
            className="bg-[#FF7043] w-[150px] text-white px-5 py-2 rounded font-semibold hover:bg-[#e25f32] transition"
            onClick={() => router.push('/about')}
          />
        </div>
      </div>
    </Container>
  );
};

export default HomeAboutSection;
