import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";

const MyAddedVisas = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedVisa, setSelectedVisa] = useState(null);
  const datas = useLoaderData(); // All visas data from the backend
  const { user } = useContext(AuthContext); // Logged-in user information

  // Filter visas by the logged-in user's email
  const userVisas = datas.filter((visa) => visa.author === user?.email);

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
        alert("Visa deleted successfully!");
        // Refresh the list after deletion
        window.location.reload();
      } else {
        alert("Failed to delete visa");
      }
    } catch (error) {
      console.error("Error deleting visa:", error);
    }
  };

  const handleUpdateSubmit = async (updatedVisa) => {
    try {
      const response = await fetch(
        `http://localhost:5000/addvisa/${updatedVisa._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedVisa),
        }
      );

      if (response.ok) {
        alert("Visa updated successfully!");
        setShowModal(false);
        window.location.reload();
      } else {
        alert("Failed to update visa");
      }
    } catch (error) {
      console.error("Error updating visa:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Added Visas</h1>
      {userVisas.length === 0 ? (
        <p className="text-gray-500">You haven't added any visas yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userVisas.map((visa) => (
            <div key={visa._id} className="p-4 border rounded-lg shadow-sm">
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="rounded-lg"
              />
              <p>
                <strong>Country:</strong>
                <span className="text-2xl font-bold text-red-500">
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
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(visa._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
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
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Update Visa</h2>
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
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
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
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="fee"
                value={selectedVisa.fee}
                onChange={(e) =>
                  setSelectedVisa({ ...selectedVisa, fee: e.target.value })
                }
                required
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="validity"
                value={selectedVisa.validity}
                onChange={(e) =>
                  setSelectedVisa({ ...selectedVisa, validity: e.target.value })
                }
                required
                className="input input-bordered w-full"
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAddedVisas;
