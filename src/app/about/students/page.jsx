"use client";
import React, { useEffect, useState, useMemo } from "react";
import StudentCard from "@/components/cards/StudentCard";
import Container from "@/components/layout/Container";
import StudentDetailModal from "@/components/modals/StudentDetailModel";
import { getAllStudents } from "@/lib/api/students";

const ITEMS_PER_PAGE = 4;

const StudentAboutPage = () => {
  const [students, setStudents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const data = await getAllStudents();
      setStudents(data);
      setLoading(false);
    };
    fetchStudents();
  }, []);

  // Filtered students based on search query
  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  const totalPages = Math.ceil(filteredStudents.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentStudents = filteredStudents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="pt-[120px]">
      <Container>
        <section className="py-10 px-4 md:px-8 mb-10">
          <h2 className="text-[#FF7043] font-bold text-5xl text-center mb-5">
            Our Students
          </h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1); // reset to first page when searching
              }}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#FF7043] transition"
            />
          </div>

          <p className="text-sm font-bold text-gray-500 mb-6 text-center">
            {loading
              ? ""
              : `Showing ${filteredStudents.length > 0 ? startIndex + 1 : 0} – ${Math.min(
                  currentPage * ITEMS_PER_PAGE,
                  filteredStudents.length
                )} out of ${filteredStudents.length}`}
          </p>

          {loading ? (
            <div className="flex justify-center py-10">
              <div className="w-12 h-12 border-4 border-[#FF7043] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : filteredStudents.length === 0 ? (
            <p className="text-center text-gray-500">No students found.</p>
          ) : (
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentStudents.map((student) => (
                <StudentCard
                  key={student._id}
                  image={student.coverImageURL}
                  name={student.fullName}
                  onView={() => setSelectedStudent(student)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center mt-10">
              <div className="flex gap-2 overflow-x-auto max-w-full pb-2 scrollbar-hide">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`flex-shrink-0 w-9 h-9 rounded-full cursor-pointer text-sm font-medium border 
                      ${
                        currentPage === index + 1
                          ? "bg-[#FF7043] text-white border-[#FF7043]"
                          : "bg-white text-black border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Modal */}
        {selectedStudent && (
          <StudentDetailModal
            student={{
              id: selectedStudent.uniqueId,
              image: selectedStudent.coverImageURL,
              name: selectedStudent.fullName,
              std: selectedStudent.studentClass,
              gender: selectedStudent.gender,
              add: selectedStudent.address,
            }}
            onClose={() => setSelectedStudent(null)}
            
          />
        )}
      </Container>
    </div>
  );
};

export default StudentAboutPage;
