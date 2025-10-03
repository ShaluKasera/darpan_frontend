import React from 'react';

const StudentDetailModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black/10  backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FFE5D0]  wrap-break-word rounded-xl w-[350px] p-4 relative">

        <div className="flex justify-between items-center mb-4">
          <div className="bg-[#FF7043] text-white px-3 py-1 rounded-md font-semibold text-sm">
            {student.id}
          </div>
          
        </div>

        <div className="flex justify-center">
          <img
            src={student.image}
            alt={student.name}
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-200"
          />
        </div>

        <p className="text-center text-[#FF7043] text-3xl font-bold mt-3">{student.name}</p>


        <div className="bg-yellow-300 h-1.5 w-[120px] mx-auto my-3 rounded-full" />


        <div className="flex justify-center gap-4 text-lg text-gray-700 mb-2">
          <div ><strong>Class:</strong> {student.std}</div>
          <div><strong>Gender:</strong> {student.gender}</div>
        </div>

        <div className="text-center mb-10 text-gray-600 text-lg">
          <strong>Address:</strong> {student.add}
        </div>


        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-400 hover:text-[#FF7043] cursor-pointer text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default StudentDetailModal;
