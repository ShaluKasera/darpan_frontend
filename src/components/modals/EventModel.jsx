'use client';
import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const EventModel = ({ isOpen, onClose, title, desc, image, location, stats }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose} // close when clicking overlay
    >
      <div
        className="relative bg-[#FFE9DC] rounded-2xl shadow-xl max-w-md w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Top Image with Cross */}
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {/* Close Button on top of image */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2 hover:bg-black/70 z-10"
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <p className="text-[#FF7043] font-bold text-2xl mb-2">{title}</p>
          <p className="leading-relaxed mb-4">{desc}</p>

          {location && (
            <p className="text-right text-sm italic mb-4">{location}</p>
          )}

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {stats?.map((item, i) => (
              <span
                key={i}
                className="bg-[#FF7043] text-white px-3 py-1 rounded font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModel;
