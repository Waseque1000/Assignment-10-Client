import React from "react";
import { Users, Clock, Globe, CheckCircle } from "lucide-react";

const VisaStatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      count: "15,000+",
      label: "Successful Applications",
      description: "Travelers assisted worldwide",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      count: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      count: "180+",
      label: "Countries Covered",
      description: "Global visa solutions",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      count: "98%",
      label: "Success Rate",
      description: "Visa approval ratio",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Your Trusted Visa Navigation Partner
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've helped thousands of travelers achieve their dreams of
            international travel with our streamlined visa services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.count}
                </h3>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  {stat.label}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisaStatsSection;
