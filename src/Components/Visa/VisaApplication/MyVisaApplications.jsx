import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Provider/Authproviders";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

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
      console.log(data);
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
        toast.error("Failed to cancel the application. Please try again.");
        return;
      }

      const result = await response.json();
      toast.success(result.message || "Application canceled successfully!");

      // Update local state
      setApplications((prevApplications) =>
        prevApplications.filter((app) => app._id !== applicationId)
      );
    } catch (error) {
      console.error("Error canceling application:", error);
      toast.warning("An error occurred while canceling the application.");
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
    <div className=" bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Helmet>
        <title>Visa || My Application</title>
      </Helmet>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">My Visa Applications</h1>

        {/* No applications */}
        {applications.length === 0 ? (
          <div className="card bg-white dark:bg-gray-800 shadow-xl">
            <div className="card-body">
              <p className="text-center text-gray-500 dark:text-gray-400">
                No visa applications found.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((application) => (
              <div
                key={application._id}
                className="card bg-white dark:bg-gray-800 shadow-xl"
              >
                <figure>
                  <img
                    src={application.img}
                    alt={application.countryName}
                    className="w-full h-48 object-cover"
                  />
                </figure>
                <div className="card-body p-6 space-y-4">
                  {/* <h2 className="card-title">{application.countryName}</h2> */}
                  <div className="space-y-2 text-sm">
                    {[
                      // { label: "Country", value: application.countryName },
                      { label: "Visa Type", value: application.visaType },
                      {
                        label: "Processing Time",
                        value: application.processingTime,
                      },
                      { label: "Fee", value: application.fee },
                      { label: "Validity", value: application.validity },
                      { label: "Applied Date", value: application.appliedDate },
                      {
                        label: "Applicant Name",
                        value: `${application.firstName} ${application.lastName}`,
                      },
                      { label: "Applicant Email", value: application.email },
                    ].map(({ label, value }) => (
                      <div className="grid grid-cols-2 gap-2" key={label}>
                        <span className="font-semibold">{label}:</span>
                        <span>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-error w-full text-white"
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
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">
                Cancel Visa Application
              </h3>
              <p className="py-4 text-gray-600 dark:text-gray-300">
                Are you sure you want to cancel this visa application? This
                action cannot be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setShowConfirmDialog(false)}
                >
                  No, keep it
                </button>
                <button
                  className="btn btn-error text-white"
                  onClick={handleConfirmCancel}
                >
                  Yes, cancel application
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyVisaApplications;
