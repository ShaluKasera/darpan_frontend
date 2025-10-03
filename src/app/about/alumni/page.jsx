'use client';

import React, { useEffect, useState } from "react";
import Container from "@/components/layout/Container";
import StudentCard from "@/components/cards/StudentCard";
import AlumniDetailModal from "@/components/modals/AlumniDetailModal";
import { getAllAlumni, getAlumniDetails } from "@/lib/api/alumni";

const ITEMS_PER_PAGE = 4;

export default function AlumnAboutPage() {
  const [fullAlumni, setFullAlumni] = useState([]); // complete backend list
  const [alumni, setAlumni] = useState([]);         // filtered data
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAlumn, setSelectedAlumn] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const [filters, setFilters] = useState({
    fullName: "",
    enrollmentNo: "",
    department: "",
    graduationYear: ""
  });

  useEffect(() => {
    fetchAlumni();
  }, []);

  const fetchAlumni = async () => {
    setLoading(true);
    try {
      const data = await getAllAlumni();
      const list = Array.isArray(data) ? data : [];
      setFullAlumni(list);
      setAlumni(list);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
      setFullAlumni([]);
      setAlumni([]);
    } finally {
      setLoading(false);
    }
  };

  // Apply filter whenever filters change
  useEffect(() => {
    const { fullName, enrollmentNo, department, graduationYear } = filters;
    const isAllEmpty = !fullName && !enrollmentNo && !department && !graduationYear;

    if (isAllEmpty) {
      // Auto-reset when all fields are empty
      setAlumni(fullAlumni);
      setCurrentPage(1);
      return;
    }

    const filtered = fullAlumni.filter(a => {
      const matchName = fullName
        ? (a.fullName || a.name || "").toLowerCase().includes(fullName.toLowerCase())
        : true;
      // const matchEnroll = enrollmentNo
      //   ? (a.enrollmentNo || "").toLowerCase().includes(enrollmentNo.toLowerCase())
      //   : true;
      const matchDept = department
        ? (a.department || "").toLowerCase().includes(department.toLowerCase())
        : true;
      const matchYear = graduationYear
        ? (a.graduationYear || "").toString().includes(graduationYear)
        : true;

      return matchName && matchDept && matchYear;
    });

    setAlumni(filtered);
    setCurrentPage(1);
  }, [filters, fullAlumni]);

  const totalPages = Math.max(1, Math.ceil(alumni.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAlumns = alumni.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openAlumnModal = async (id) => {
    setModalLoading(true);
    try {
      const data = await getAlumniDetails(id);
      setSelectedAlumn(data);
    } finally {
      setModalLoading(false);
    }
  };

  const closeModal = () => setSelectedAlumn(null);

  return (
    <div className="pt-[120px]">
      <Container>
        <section className="py-6 md:py-10 px-4 md:px-8 mb-6">
          <h2 className="text-[#FF7043] font-bold text-4xl md:text-5xl text-center mb-4">Our Alumni</h2>

          {/* Filter form (no submit needed now) */}
          <div className="flex flex-col md:flex-row gap-2 md:items-end justify-center mb-6">
            <input
              placeholder="Search name"
              value={filters.fullName}
              onChange={(e) => setFilters({ ...filters, fullName: e.target.value })}
              className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />
            {/* <input
              placeholder="Enrollment No"
              value={filters.enrollmentNo}
              onChange={(e) => setFilters({ ...filters, enrollmentNo: e.target.value })}
              className="px-3 py-2 border rounded w-full md:w-56"
            /> */}
            <input
              placeholder="Department"
              value={filters.department}
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
               className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />
            <input
              placeholder="Graduation Year"
              value={filters.graduationYear}
              onChange={(e) => setFilters({ ...filters, graduationYear: e.target.value })}
               className="w-full md:max-w-xs px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-10 h-10 border-4 border-[#FF7043] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : alumni.length === 0 ? (
            <p className="text-center text-gray-500">No alumni found.</p>
          ) : (
            <>
              <p className="text-sm font-medium text-gray-600 mb-4 text-center">
                Showing {startIndex + 1} – {Math.min(startIndex + ITEMS_PER_PAGE, alumni.length)} of {alumni.length}
              </p>

              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentAlumns.map((a) => {
                  const image = a.coverImageURL || "/images/dummy.jpg";
                  const name = a.fullName || a.name || a.fullname || "Unknown";
                  return (
                    <StudentCard
                      key={a._id || a.id}
                      image={image}
                      name={name}
                      onView={() => openAlumnModal(a._id || a.id)}
                    />
                  );
                })}
              </div>

              <div className="flex justify-center mt-8 gap-2 flex-wrap">
                {/* Page Numbers */}
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentPage(idx + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`flex items-center justify-center w-9 aspect-square rounded-full text-sm font-medium border transition
        ${currentPage === idx + 1
                        ? "bg-[#FF7043] text-white border-[#FF7043]"
                        : "bg-white text-black border-gray-300 hover:bg-gray-100"}`}
                  >
                    {idx + 1}
                  </button>
                ))}

                
              </div>


            </>
          )}
        </section>
      </Container>

      {/* Modal */}
      <AlumniDetailModal
        alumn={selectedAlumn}
        loading={modalLoading}
        onClose={closeModal}
      />
    </div>
  );
}
