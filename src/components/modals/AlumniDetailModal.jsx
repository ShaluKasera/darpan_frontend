import React from "react";
import Image from "next/image";

const AlumniDetailModal = ({ alumn, loading, onClose }) => {
  if (!alumn && !loading) return null;

  const coverImage =
    alumn?.coverImageURL ||
    "/images/dummy.jpg";

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#FFE5D0] rounded-xl w-[360px] md:w-[420px] p-5 relative">
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-10 h-10 border-4 border-[#FF7043] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="bg-[#FF7043] text-white px-3 py-1 rounded-md font-semibold text-sm">
                {alumn?.enrollmentNo || "ID"}
              </div>
              <div className="flex gap-2">
               
                <button
                  onClick={onClose}
                  className="text-gray-600 hover:text-[#FF7043] text-xl font-bold"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center mb-3">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src={coverImage}
                  alt={alumn?.fullName || ""}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 120px, 200px"
                />
              </div>
            </div>

            {/* Name */}
            <p className="text-center text-[#FF7043] text-2xl md:text-3xl font-bold mb-2">
              {alumn?.fullName || "-"}
            </p>
            <div className="bg-yellow-300 h-1.5 w-[120px] mx-auto my-2 rounded-full" />

            {/* Details */}
            <div className="text-gray-700 text-[15px] flex flex-col gap-2 px-4 mt-4">
              
              <div>
                <strong>Email:</strong> {alumn?.email || "-"}
              </div>
              <div>
                <strong>Contact Number:</strong> {alumn?.contactNumber || "-"}
              </div>
              <div>
                <strong>Gender:</strong> {alumn?.gender || "-"}
              </div>
              <div>
                <strong>Department:</strong> {alumn?.department || "-"}
              </div>
              <div>
                <strong>Graduation Year:</strong> {alumn?.graduationYear || "-"}
              </div>
              <div>
                <strong>Company:</strong> {alumn?.company || "-"}
              </div>
              <div>
                <strong>Address:</strong> {alumn?.address || "-"}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AlumniDetailModal;
