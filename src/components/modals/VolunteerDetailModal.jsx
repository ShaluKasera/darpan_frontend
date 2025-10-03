import React from 'react';

const VolunteerDetailModal = ({ volunteer, onClose }) => {
  if (!volunteer) return null;

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FFE5D0] wrap-break-word rounded-xl w-[350px] p-5 relative">

        
        <div className="flex justify-between items-center mb-4">
          <div className="bg-[#FF7043] text-white px-3 py-1 rounded-md font-semibold text-sm">
            {volunteer.enrollmentNo}
          </div>
          
        </div>

      
        <div className="flex justify-center">
          <img
            src={volunteer.coverImageURL}
            alt={volunteer.fullName}
            className="w-28 h-28 object-cover rounded-full border-2 border-gray-200"
          />
        </div>

    
        <p className="text-center text-[#FF7043] text-3xl font-bold mt-3">{volunteer.fullName}</p>

        <div className="bg-yellow-300 h-1.5 w-[120px] mx-auto my-3 rounded-full" />

      
        <div className="text-gray-700 text-[15px] flex flex-col gap-3 px-5 mb-5">
          <div><strong>Phone:</strong> {volunteer.contactNumber}</div>
          <div><strong>Gender:</strong> {volunteer.gender}</div>
          <div><strong>Year:</strong> {volunteer.year}</div>
          <div><strong>Department:</strong> {volunteer.department}</div>
          <div><strong>Email:</strong> {volunteer.email}</div>
          <div><strong>Residence:</strong> {volunteer.hostelName}</div>
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

export default VolunteerDetailModal;
