'use client';

import React, { useState, useEffect } from 'react';
import EventCard from '@/components/cards/EventCard';
import EventModel from '@/components/modals/EventModel';
import Sidebar from '@/components/layout/EventSidebar';
import Container from '@/components/layout/Container';
import { FaArrowRight } from 'react-icons/fa';
import { getAllFestivals, getAllActivities, getAllFarewells, getAllFreshersInductions } from '@/lib/api/events';

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-96">
    <div className="w-16 h-16 border-4 border-t-transparent border-[#FF7043] rounded-full animate-spin"></div>
  </div>
);

const filters = ['All', 'Festival', 'Activity', 'Farewell', 'Fresher\'s Induction'];
const ITEMS_PER_PAGE = 4;

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // New loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllEvents = async () => {
      setLoading(true); // start loading
      const festivals = await getAllFestivals();
      const activities = await getAllActivities();
      const farewells = await getAllFarewells();
      const freshersInductions = await getAllFreshersInductions();

      const allEvents = [
        ...festivals.map(e => ({ ...e, category: 'Festival' })),
        ...activities.map(e => ({ ...e, category: 'Activity' })),
        ...farewells.map(e => ({ ...e, category: 'Farewell' })),
        ...freshersInductions.map(e => ({ ...e, category: 'Fresher\'s Induction' })),
      ];

      allEvents.sort((a, b) => new Date(b.date) - new Date(a.date));

      setEvents(allEvents);
      setLoading(false); // stop loading
    };

    fetchAllEvents();
  }, []);

  const filteredEvents =
    selectedFilter === 'All'
      ? events
      : events.filter(event => event.category === selectedFilter);

  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <div className="pt-[150px] md:pt-[120px] px-4 md:px-10">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-white text-xl !bg-[#FF7043] p-2 rounded-2xl"
            aria-label="Open Sidebar"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Sidebar */}
        {isSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/10 z-30 md:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <div className="fixed top-[130px] left-0 w-[220px] z-40 bg-[#FFE5D0] shadow-md border-r h-full md:hidden">
              <Sidebar
                filters={filters}
                selected={selectedFilter}
                onSelect={(filter) => {
                  handleFilterSelect(filter);
                  setIsSidebarOpen(false);
                }}
              />
            </div>
          </>
        )}

        <div className="flex gap-6">
          <div className="w-[225px] hidden md:block">
            <Sidebar
              filters={filters}
              selected={selectedFilter}
              onSelect={handleFilterSelect}
            />
          </div>

          {/* Events Section */}
          <div className="flex-1 flex flex-col gap-6 pb-2">
            {loading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div>
                  <p className="text-sm font-bold text-gray-500">
                    Showing {startIndex + 1} – {Math.min(startIndex + ITEMS_PER_PAGE, filteredEvents.length)} of {filteredEvents.length}
                  </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {currentEvents.map((event) => (
                    <EventCard
                      key={event._id}
                      event={{
                        id: event._id,
                        title: event.title,
                        name: event.title,
                        image: event.coverImageURL,
                        desc: event.description,
                        location: event.venue,
                        stats: [
                          event.studentsPresent !== undefined ? `Students: ${event.studentsPresent}` : null,
                          event.volunteersPresent !== undefined ? `Volunteers: ${event.volunteersPresent}` : null,
                          `Date: ${new Date(event.date).toLocaleDateString()}`
                        ].filter(Boolean)
                      }}
                      onViewDetails={setSelectedEvent}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="flex justify-end mt-0">
                    <div className="flex gap-2">
                      {Array.from({ length: totalPages }, (_, index) => (
                        <button
                          key={index}
                          onClick={() => handlePageChange(index + 1)}
                          className={`w-9 h-9 cursor-pointer rounded-full text-sm font-medium border 
                            ${currentPage === index + 1
                              ? 'bg-[#FF7043] text-white border-[#FF7043]'
                              : 'bg-white text-black border-gray-300 hover:bg-gray-100'
                            }`}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {selectedEvent && (
        <EventModel
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          {...selectedEvent}
        />
      )}
    </Container>
  );
};

export default EventPage;
