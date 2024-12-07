import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Visacard from "../Visacard/Visacard";
import VisaStatsSection from "../About/VisaStatsSection";

export function Hero() {
  const slides = [
    {
      title: "Fast Track Business Visas",
      description:
        "Process your business visa in just 5 working days with our premium service",
      image:
        "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1600",
    },
    {
      title: "Student Visa Special",
      description:
        "Complete guidance for international students pursuing education abroad",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600",
    },
    {
      title: "Digital Nomad Visas",
      description:
        "Work remotely from your dream destination with specialized visas",
      image:
        "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1600",
    },
  ];

  const datas = useLoaderData();

  // State to control whether all visas are shown
  const [showAllVisas, setShowAllVisas] = useState(false);

  // Decide how many visas to display based on the state
  const visasToShow = showAllVisas ? datas : datas.slice(0, 6);

  return (
    <div className="  bg-white dark:bg-gray-900">
      <Slider slides={slides} />

      {/* Latest Visas Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Latest Visas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visasToShow.map((visa) => (
            <Visacard key={visa.id} visa={visa} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllVisas(!showAllVisas)}
            className="btn btn-outline text-gray-900 dark:text-white"
          >
            {showAllVisas ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>

      {/* Real-time Updates Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Real-time Updates
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Stay informed about your visa application status with our
                real-time tracking system. Receive instant notifications about
                document requirements, interview schedules, and application
                progress.
              </p>
              <Link
                to="/track"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Track your application <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 sm:h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
                alt="Visa Processing"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visa Stats Section */}
      <section>
        <VisaStatsSection />
      </section>
    </div>
  );
}
