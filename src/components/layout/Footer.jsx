'use client';
import React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "../atoms/Button";
import ScrollToTopButton from '../atoms/ScrollToTopButton';

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white py-8 px-4">
      <Container className="flex flex-col md:flex-row justify-between gap-8 px-10">
        {/* Contact Us */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <p className="text-2xl font-bold mb-2 ">Contact Us</p>
          <p className="text-sm w-[200px] text-center">
            If you want to be a part of ICCHE, please feel free to reach out
          </p>
          <p className="text-sm mt-2  w-[200px] text-center">
           Lecture Hall Complex, IIEST Shibpur, Howrah, West Bengal
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 w-full text-center md:text-left">
          <p className="text-2xl font-bold mb-2">Quick Links</p>
          <ul className="text-gray-300 space-y-1.5 text-sm">
            <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Gallery</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Volunteers</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Students</Link></li>
            <li><Link href="/" className="hover:text-gray-400">Alumni</Link></li>
            <li><Link href="/" className="hover:text-gray-400">About us</Link></li>
          </ul>
        </div>

        {/* Feedback */}
        <div className="md:w-1/3 w-full">
          <p className="text-2xl font-bold mb-2 text-center md:text-left">Feedback</p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="bg-[#D9D9D9] text-sm px-3 py-2 text-gray-700 rounded"
            />
            <textarea
              placeholder="Message"
              className="bg-[#D9D9D9] text-sm px-3 py-2 h-[100px] text-gray-700 rounded"
            />
            <Button text="Submit" className="w-full" />
          </form>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </Container>

      <hr className="my-4 border-gray-600" />
      <p className="text-sm text-center text-gray-500">
        © 2025 Darpan. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
