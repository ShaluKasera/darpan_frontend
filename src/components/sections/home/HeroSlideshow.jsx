'use client';
import React, { useState, useEffect } from "react";
import Container from "@/components/layout/Container";
import Link from "next/link";
import Button from "@/components/atoms/Button";

const HeroSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Cycle every 3 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    const backgroundImageUrl = images[currentIndex]?.coverImageURL || "/images/dummy.jpg";

    return (
        <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700 h-screen md:h-[90vh] flex justify-center items-center"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
            <div className="absolute inset-0 bg-black/50 md:bg-black/50 z-0" />

            <Container>
                <div className="relative z-10 max-w-2xl mx-auto px-4 text-center text-white">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 leading-tight">
                        Welcome To ICCHE
                    </h1>
                    <p className="text-xs sm:text-sm md:text-lg mb-6 leading-relaxed">
                        A non-profit society of IIEST Shibpur, dedicated to educating and
                        empowering underprivileged children through love, learning, and
                        community.
                    </p>
                    <div className="flex justify-center w-full">
                        <Link href="/about" passHref legacyBehavior>
                            <Button text="Explore" className="w-full sm:w-[200px]" />
                        </Link>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default HeroSlideshow;
