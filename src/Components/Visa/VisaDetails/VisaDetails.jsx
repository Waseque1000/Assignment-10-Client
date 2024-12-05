import React, { useState, useEffect, useContext } from "react";
import { useParams, Navigate, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";
// import { latestVisas } from "./visaData";

const VisaDetails = ({ isLoggedIn }) => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();
  const [visa, setVisa] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    appliedDate: new Date().toISOString().split("T")[0], // Current Date
    fee: "",
  });

  useEffect(() => {
    const foundVisa = data.find((item) => item._id === id);
    setVisa(foundVisa || null);
  }, [id, data]);

  if (!visa) {
    return <p className="text-center mt-5">Loading Visa Details...</p>; // Show a fallback if visa is not found
  }

  const openModal = () => {
    setFormData({
      ...formData,
      email: visa.email, // Replace with the logged-in user's email
      fee: visa.fee,
    });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Data: ", formData, visa);
    // Add database submission logic here
    closeModal();
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">{visa.country} Visa Details</h1>
      <img
        src={visa.countryImage}
        alt={visa.country}
        className="w-full rounded mb-5"
      />
      <p>
        <strong>Visa Type:</strong> {visa.visaType}
      </p>
      <p>
        <strong>Processing Time:</strong> {visa.processingTime}
      </p>
      <p>
        <strong>Fee:</strong> {visa.fee}
      </p>
      <p>
        <strong>Validity:</strong> {visa.validity}
      </p>
      <p>
        <strong>Application Method:</strong> {visa.applicationMethod}
      </p>
      <button
        className="mt-5 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={openModal}
      >
        Apply for the Visa
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed mt-40 inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded p-5 w-96">
            <h2 className="text-xl font-bold mb-4">Apply for the Visa</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-full mb-3 p-2 border rounded"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full mb-3 p-2 border rounded"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <input
                type="text"
                value={`Applied Date: ${formData.appliedDate}`}
                readOnly
                className="w-full mb-3 p-2 border rounded"
              />
              <input
                type="text"
                value={`Fee: ${formData.fee}`}
                readOnly
                className="w-full mb-3 p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
              >
                Apply
              </button>
            </form>
            <button
              onClick={closeModal}
              className="text-red-500 mt-3 block mx-auto"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
