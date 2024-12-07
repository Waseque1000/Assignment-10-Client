import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";
import { toast } from "react-toastify";

const MyAddedVisas = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState({
    countryName: "",
    visaType: "",
    processingTime: "",
    fee: "",
    validity: "",
  });
  const datas = useLoaderData(); // All visas data from the backend
  const { user } = useContext(AuthContext); // Logged-in user information

  // Filter visas by the logged-in user's email
  const userVisas = datas
    ? datas.filter((visa) => visa.author === user?.email)
    : [];

  const handleUpdateClick = (visa) => {
    setSelectedVisa(visa);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/addvisa/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        toast.success("Visa deleted successfully!");
        // Refresh the list after deletion
        window.location.reload();
      } else {
        toast.error("Failed to delete visa");
      }
    } catch (error) {
      console.error("Error deleting visa:", error);
    }
  };

  const handleUpdateSubmit = async (updatedVisa) => {
    const updatedData = { ...updatedVisa };
    if (updatedData.countryName === "") delete updatedData.countryName;
    if (updatedData.visaType === "") delete updatedData.visaType;

    try {
      const response = await fetch(
        `http://localhost:5000/addvisa/${updatedVisa._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        toast.success("Visa updated successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        toast.error("Failed to update visa");
      }
    } catch (error) {
      console.error("Error updating visa:", error);
    }
  };

  if (!datas) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">My Added Visas</h1>
        {userVisas.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            You haven't added any visas yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userVisas.map((visa) => (
              <div
                key={visa._id}
                className="p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-800"
              >
                <img
                  src={visa.countryImage}
                  alt={visa.countryName}
                  className="rounded-lg"
                />
                <p>
                  <strong>Country:</strong>
                  <span className="text-2xl font-bold text-red-500 dark:text-red-400">
                    {" "}
                    {visa.countryName}
                  </span>
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
                <p>
                  <strong>Author:</strong> {visa.author}
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleUpdateClick(visa)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(visa._id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 dark:bg-red-400 dark:hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-gray-800">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">
                Update Visa
              </h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdateSubmit(selectedVisa);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="countryName"
                  value={selectedVisa.countryName}
                  onChange={(e) =>
                    setSelectedVisa({
                      ...selectedVisa,
                      countryName: e.target.value,
                    })
                  }
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  name="visaType"
                  value={selectedVisa.visaType}
                  onChange={(e) =>
                    setSelectedVisa({
                      ...selectedVisa,
                      visaType: e.target.value,
                    })
                  }
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  name="processingTime"
                  value={selectedVisa.processingTime}
                  onChange={(e) =>
                    setSelectedVisa({
                      ...selectedVisa,
                      processingTime: e.target.value,
                    })
                  }
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="number"
                  name="fee"
                  value={selectedVisa.fee}
                  onChange={(e) =>
                    setSelectedVisa({ ...selectedVisa, fee: e.target.value })
                  }
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
                <input
                  type="text"
                  name="validity"
                  value={selectedVisa.validity}
                  onChange={(e) =>
                    setSelectedVisa({
                      ...selectedVisa,
                      validity: e.target.value,
                    })
                  }
                  required
                  className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyAddedVisas;
