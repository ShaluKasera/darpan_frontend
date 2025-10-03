'use client';
import React, { useState } from 'react';
import StudentCard from '@/components/cards/StudentCard';
import StudentDetailModal from '@/components/modals/StudentDetailModel';

const StudentsGridClient = ({ students }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {students.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No students found.</p>
        ) : (
          students.map((student, idx) => (
            <div
              key={student.id || idx}
              className={`
                ${idx > 0 ? 'hidden' : ''} 
                md:${idx > 1 ? 'hidden' : ''} 
                lg:block
              `}
            >
              <StudentCard
                image={student.coverImageURL || '/images/dummy.jpg'}
                name={student.fullName}
                onView={() => setSelectedStudent(student)}
              />
            </div>
          ))
        )}
      </div>

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
    </>
  );
};

export default StudentsGridClient;
