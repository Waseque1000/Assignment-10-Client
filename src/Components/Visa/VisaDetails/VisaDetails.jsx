import React, { useState, useContext } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";
import { toast } from "react-toastify";

const VisaDetails = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();
  const visa = data.find((item) => item._id === id);

  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setFormData({ firstName: "", lastName: "" }); // Reset form data on close
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      email: user?.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      appliedDate: new Date().toISOString().split("T")[0],
      fee: visa.fee,
      visaType: visa.visaType,
      validity: visa.validity,
      processingTime: visa.processingTime,
      country: visa.countryName || "Unknown",
      status: "pending",
      applicationMethod: visa.applicationMethod,
      img: visa.countryImage,
    };

    fetch("https://newserver-pi.vercel.app/myvisa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submissionData), // Removed the incorrect second argument
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Application submitted:", data);
        toast.success("Application submitted successfully!");
        closeModal();
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        toast.error("Failed to submit application!");
      });
  };

  if (!visa) {
    return (
      <p className="text-center mt-5 text-red-500">
        Visa not found. Please check the URL or try again later.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-5  dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-2xl font-bold mb-4">Visa Details</h1>
      <img
        src={visa.countryImage}
        alt={visa.country}
        className="w-full rounded mb-5"
      />
      <p>
        <strong>Country:</strong>{" "}
        <span className="text-3xl text-red-700">{visa.countryName}</span>
      </p>
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
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
