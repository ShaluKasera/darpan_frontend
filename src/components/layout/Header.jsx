"use client";
import React, { useState } from "react";
import Container from "./Container";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";
// import Button from "../atoms/Button";
import { usePathname } from "next/navigation";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 
  

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Event", href: "/events" },
    { name: "Donation Drive", href: "/donation-drive" },
    {
      name: "About",
      submenu: [
        { name: "Students", href: "/about/students" },
        { name: "Volunteers", href: "/about/volunteers" },
        { name: "Alumni", href: "/about/alumni" },
        { name: "Facutly-in-charge", href: "/about/pic" },
        { name: "About Us", href: "/about" },
      ],
    },
    // { name: "Classroom", href: "/classroom" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const isActiveLink = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#FFE5D0]">
      {/* Top Bar */}
      <div className="w-full bg-[#FF7043] text-white text-sm">
        <Container className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 gap-2">
          <div className="flex gap-2 items-center justify-center md:justify-start">
            <FaPhoneAlt className="text-xs" />
            <p className="text-sm">+91 7081637908, +91 7413936203, +91 8670916134</p>
          </div>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="https://www.instagram.com/icche.iiests/" target="_blank" rel="noopener noreferrer"> <FaInstagram className="cursor-pointer hover:text-gray-200 transition" /></a>
            <a href="https://www.linkedin.com/company/icche-iiest/" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="cursor-pointer hover:text-gray-200 transition" /></a>
            <a href="https://www.facebook.com/icchesistac" target="_blank" rel="noopener noreferrer"> <FaFacebookF className="cursor-pointer hover:text-gray-200 transition" /></a>



          </div>
        </Container>
      </div>

      {/* Logo & Nav */}
      <Container className="py-3 px-4 md:px-10">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div>
              <p className="text-[#FF7043] font-semibold text-3xl md:text-4xl">ICCHE</p>
              <div className="h-[1.5px] w-[110px] md:w-[125px] mb-1 bg-black" />
              <p className="text-[9px]">Non-profitable Organization</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FaTimes className="text-xl text-[#FF7043]" />
              ) : (
                <FaBars className="text-xl text-[#FF7043]" />
              )}
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5">
            <ul className="flex flex-row gap-5 relative">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.submenu ? (
                    <>
                      <span
                        className={`cursor-pointer hover:text-[#FF7043] transition-colors duration-200 ${pathname.startsWith("/" + link.name.toLowerCase())
                          ? "text-[#FF7043]"
                          : "text-black"
                          }`}
                      >
                        {link.name}
                      </span>
                      <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md z-10 hidden group-hover:block">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 text-black hover:bg-gray-100 text-sm whitespace-nowrap"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`hover:text-[#FF7043] transition-colors duration-200 ${isActiveLink(link.href) ? "text-[#FF7043]" : "text-black"
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Login Button */}
          {/* <div className="hidden md:flex items-center">
            <Button text={"Login"} />
          </div> */}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-[#FF7043] py-2 rounded">
            <ul className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <React.Fragment key={link.name}>
                  {!link.submenu ? (
                    <li>
                      <Link
                        href={link.href}
                        className={`block py-1 px-2 rounded hover:bg-gray-100 ${isActiveLink(link.href)
                          ? "text-[#FF7043] font-medium"
                          : "text-black"
                          }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li>
                        <button
                          className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 text-black"
                          onClick={() => toggleDropdown(link.name)}
                        >
                          {link.name}
                        </button>
                      </li>
                      {openDropdown === link.name &&
                        link.submenu.map((sublink) => (
                          <li key={sublink.href}>
                            <Link
                              href={sublink.href}
                              className="block py-1 pl-6 pr-2 rounded hover:bg-gray-100 text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                    </>
                  )}
                </React.Fragment>
              ))}
              {/* <li>
                <Button text="Login" className="mt-2" />
              </li> */}
            </ul>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
