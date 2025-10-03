import React from "react";

const EventCard = ({ event, onViewDetails }) => {
  return (
    <div className="relative w-full h-60 rounded overflow-hidden">
      {/* Event Image */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Title Badge */}
      <div className="absolute top-2 left-2 bg-[#FF7043] text-white text-xs font-semibold px-2 py-1 rounded">
        {event.title}
      </div>

      {/* View Details Button */}
      <button
        onClick={() => onViewDetails(event)}
        className="absolute bottom-2 right-2 text-sm bg-[#FF7043] text-white px-2 py-0.5 rounded hover:bg-[#e35a2d] transition-all duration-300 cursor-pointer"
      >
        View Details
      </button>
    </div>
  );
};

export default EventCard;
