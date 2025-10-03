'use client';
import React, { useState, useEffect } from 'react';
import StudentCard from '@/components/cards/StudentCard';
import Container from '@/components/layout/Container';
import VolunteerDetailModal from '@/components/modals/VolunteerDetailModal';
import { getAllVolunteers, getVolunteerDetails } from '@/lib/api/volunteers';

const ITEMS_PER_PAGE = 4;

const VolunteerAboutPage = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [filteredVolunteers, setFilteredVolunteers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [loading, setLoading] = useState(false);

  // Search/Filter states
  const [searchName, setSearchName] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    const fetchVolunteers = async () => {
      setLoading(true);
      const data = await getAllVolunteers();
      setVolunteers(data);
      setFilteredVolunteers(data);
      setLoading(false);
    };
    fetchVolunteers();
  }, []);

  // Apply filters automatically
  useEffect(() => {
    let result = volunteers;

    if (searchName.trim()) {
      result = result.filter(vol =>
        vol.fullName?.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (department.trim()) {
      result = result.filter(vol =>
        vol.department?.toLowerCase().includes(department.toLowerCase())
      );
    }

    if (year.trim()) {
      result = result.filter(vol => String(vol.year) === year);
    }

    setFilteredVolunteers(result);
    setCurrentPage(1); // reset to first page
  }, [searchName, department, year, volunteers]);

  const totalPages = Math.ceil(filteredVolunteers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentVolunteers = filteredVolunteers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = async (volunteerId) => {
    setLoading(true);
    const details = await getVolunteerDetails(volunteerId);
    setSelectedVolunteer(details);
    setLoading(false);
  };

  return (
    <div className="pt-[120px]">
      <Container>
        <section className="py-10 px-4 md:px-8 mb-10">
          <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-5">Our Volunteers</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-6 justify-center">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />

            <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
               className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />

            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            >
              <option value="">All Years</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
               <option value="4">5th Year</option>
            </select>
          </div>

          {/* Count */}
          <p className="text-sm font-bold text-gray-500 mb-6">
            Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} –
            {Math.min(currentPage * ITEMS_PER_PAGE, filteredVolunteers.length)} out of {filteredVolunteers.length}
          </p>

          {/* Loader */}
          {loading && (
            <div className="flex justify-center py-10">
              <div className="w-12 h-12 border-4 border-[#FF7043] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Volunteer Cards */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentVolunteers.map((vol) => (
              <StudentCard
                key={vol._id}
                image={vol.coverImageURL || '/images/dummy.jpg'}
                name={vol.fullName}
                onView={() => handleViewDetails(vol._id)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-10">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-9 h-9 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-full text-sm font-medium border 
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
        </section>
      </Container>

      {/* Modal */}
      {selectedVolunteer && (
        <VolunteerDetailModal
          volunteer={selectedVolunteer}
          onClose={() => setSelectedVolunteer(null)}
          onEdit={() => {
            alert(`Edit ${selectedVolunteer.fullName}`);
            setSelectedVolunteer(null);
          }}
        />
      )}
    </div>
  );
};

export default VolunteerAboutPage;
