import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";

const MyVisaApplications = () => {
  const [applications, setApplications] = useState([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetchApplications(user.email);
    }
  }, [user]);

  // Fetch applications for the logged-in user
  const fetchApplications = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/myvisa/${email}`);
      if (!response.ok) {
        throw new Error("Failed to fetch applications");
      }
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  // Cancel application
  const onCancelApplication = async (applicationId) => {
    try {
      const response = await fetch(
        `http://localhost:5000/myvisa/${applicationId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("Failed to cancel the application. Please try again.");
        return;
      }

      const result = await response.json();
      alert(result.message || "Application canceled successfully!");

      // Update local state
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app._id !== applicationId)
      );
    } catch (error) {
      console.error("Error canceling application:", error);
      alert("An error occurred while canceling the application.");
    }
  };

  // Open confirmation dialog
  const handleCancelClick = (applicationId) => {
    setSelectedApplicationId(applicationId);
    setShowConfirmDialog(true);
  };

  // Confirm cancellation
  const handleConfirmCancel = () => {
    if (selectedApplicationId) {
      onCancelApplication(selectedApplicationId);
    }
    setShowConfirmDialog(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Visa Applications</h1>

      {/* No applications */}
      {applications.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-center text-gray-500">
              No visa applications found.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((application) => (
            <div key={application._id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={application.img}
                  alt={application.country}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-6 space-y-4">
                <h2 className="card-title">{application.country}</h2>
                <div className="space-y-2 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Country:</span>
                    <span>{application.country}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Visa Type:</span>
                    <span>{application.visaType}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Processing Time:</span>
                    <span>{application.processingTime}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Fee:</span>
                    <span>{application.fee}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Validity:</span>
                    <span>{application.validity}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applied Date:</span>
                    <span>{application.appliedDate}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applicant Name:</span>
                    <span>
                      {application.firstName + " " + application.lastName}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applicant Email:</span>
                    <span>{application.email}</span>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-error w-full"
                    onClick={() => handleCancelClick(application._id)}
                  >
                    Cancel Application
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Cancel Visa Application</h3>
            <p className="py-4">
              Are you sure you want to cancel this visa application? This action
              cannot be undone.
            </p>
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setShowConfirmDialog(false)}
              >
                No, keep it
              </button>
              <button className="btn btn-error" onClick={handleConfirmCancel}>
                Yes, cancel application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyVisaApplications;
