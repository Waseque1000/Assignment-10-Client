import React, { useState } from "react";

const MyVisaApplications = ({ applications = [], onCancelApplication }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [selectedApplicationId, setSelectedApplicationId] = useState(null);

  const handleCancelClick = (applicationId) => {
    setSelectedApplicationId(applicationId);
    setShowConfirmDialog(true);
  };

  const handleConfirmCancel = () => {
    if (selectedApplicationId) {
      onCancelApplication(selectedApplicationId);
    }
    setShowConfirmDialog(false);
  };

  // Sample data for demonstration
  const demoApplications = [
    {
      id: 1,
      country: "Japan",
      countryImage:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "5-7 working days",
      fee: "¥3,000",
      validity: "90 days",
      applicationMethod: "Embassy submission",
      appliedDate: "2024-03-15",
      applicantName: "John Smith",
      applicantEmail: "john.smith@example.com",
    },
    {
      id: 2,
      country: "Australia",
      countryImage:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800",
      visaType: "Student Visa",
      processingTime: "4-6 weeks",
      fee: "AUD 620",
      validity: "5 years",
      applicationMethod: "Online",
      appliedDate: "2024-03-10",
      applicantName: "John Smith",
      applicantEmail: "john.smith@example.com",
    },
  ];

  const displayApplications =
    applications.length > 0 ? applications : demoApplications;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">My Visa Applications</h1>

      {displayApplications.length === 0 ? (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="text-center text-gray-500">
              No visa applications found.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayApplications.map((application) => (
            <div key={application.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={application.countryImage}
                  alt={application.country}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-6 space-y-4">
                <h2 className="card-title">{application.country}</h2>

                <div className="space-y-2 text-sm">
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
                    <span className="font-semibold">Application Method:</span>
                    <span>{application.applicationMethod}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applied Date:</span>
                    <span>{application.appliedDate}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applicant Name:</span>
                    <span>{application.applicantName}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="font-semibold">Applicant Email:</span>
                    <span className="truncate">
                      {application.applicantEmail}
                    </span>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-error w-full"
                    onClick={() => handleCancelClick(application.id)}
                  >
                    Cancel Application
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
