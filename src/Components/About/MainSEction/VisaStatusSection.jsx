import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Globe2,
} from "lucide-react";

const VisaStatusSection = () => {
  const [activeTab, setActiveTab] = useState("processing");

  const statuses = {
    processing: [
      {
        country: "Japan",
        type: "Tourist",
        status: "Document Review",
        timeLeft: "3 days",
        progress: 65,
      },
      {
        country: "Canada",
        type: "Student",
        status: "Background Check",
        timeLeft: "5 days",
        progress: 45,
      },
    ],
    approved: [
      {
        country: "Singapore",
        type: "Business",
        issueDate: "2024-01-15",
        validUntil: "2025-01-14",
      },
    ],
    attention: [
      {
        country: "Australia",
        type: "Work",
        issue: "Additional Documents Required",
        deadline: "2024-12-20",
      },
    ],
  };

  return (
    <div className="w-full max-w-6xl dark:text-white  mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl  font-bold">Visa Application Status</h2>
        <p className="text-base-content/70 dark:text-white max-w-2xl mx-auto">
          Track your visa applications in real-time. Get instant updates on
          processing status, required actions, and important deadlines.
        </p>
      </div>

      {/* DaisyUI Tabs */}
      <div className="tabs tabs-boxed gap-4 dark:text-white  justify-center bg-base-100 dark:bg-gray-800">
        {["processing", "approved", "attention"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${
              activeTab === tab
                ? "tab-active bg-primary  font-extrabold  text-white"
                : "bg-base-100 dark:text-white dark:bg-gray-700"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {statuses[activeTab].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="card bg-base-100 dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Globe2 className="w-5 h-5 text-primary dark:text-white" />
                    <h3 className="font-semibold text-gray-800 dark:text-white">
                      {item.country}
                    </h3>
                  </div>
                  <div className="badge badge-outline text-gray-800 dark:text-white">
                    {item.type}
                  </div>
                </div>

                {activeTab === "processing" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
                      <span>{item.status}</span>
                      <span className="flex items-center text-primary">
                        <Clock className="w-4 h-4 mr-1" />
                        {item.timeLeft}
                      </span>
                    </div>
                    <progress
                      className="progress progress-primary w-full"
                      value={item.progress}
                      max="100"
                    ></progress>
                  </div>
                )}

                {activeTab === "approved" && (
                  <div className="space-y-3">
                    <div className="flex items-center text-success">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      <span>Visa Approved</span>
                    </div>
                    <div className="text-sm text-base-content/70 dark:text-gray-300">
                      <div>Issue Date: {item.issueDate}</div>
                      <div>Valid Until: {item.validUntil}</div>
                    </div>
                  </div>
                )}

                {activeTab === "attention" && (
                  <div className="space-y-3">
                    <div className="flex items-center text-warning">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <span>{item.issue}</span>
                    </div>
                    <div className="text-sm text-base-content/70 dark:text-gray-300">
                      Deadline: {item.deadline}
                    </div>
                  </div>
                )}

                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary btn-block">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VisaStatusSection;
