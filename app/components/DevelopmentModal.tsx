import React, { useState } from "react";

function DevelopmentModal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Website Under Development
            </h2>
            <p className="mt-4 text-gray-600 text-center">
              We are currently working on this website! You may encounter some bugs! Check back later...
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DevelopmentModal;
