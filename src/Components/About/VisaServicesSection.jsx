import React from "react";
import { FileCheck, Clock, Phone, Shield } from "lucide-react";

const VisaServicesSection = () => {
  const services = [
    {
      icon: <FileCheck className="w-12 h-12 text-blue-500" />,
      title: "Document Verification",
      description:
        "Expert review of your visa application documents ensuring accuracy and completeness",
    },
    {
      icon: <Clock className="w-12 h-12 text-green-500" />,
      title: "Fast Processing",
      description:
        "Expedited visa processing services with priority handling options",
    },
    {
      icon: <Phone className="w-12 h-12 text-purple-500" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to assist with your visa queries",
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Secure Process",
      description:
        "End-to-end encrypted system ensuring your data remains protected",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Premium Visa Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience hassle-free visa processing with our comprehensive range
            of services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-full group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisaServicesSection;
