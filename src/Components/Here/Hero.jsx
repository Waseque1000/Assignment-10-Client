import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import Visacard from "../Visacard/Visacard";

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
  // console.log(datas);

  // State to control whether all visas are shown
  const [showAllVisas, setShowAllVisas] = useState(false);

  // Decide how many visas to display based on the state
  const visasToShow = showAllVisas ? datas : datas.slice(0, 6);

  return (
    <div className="min-h-screen">
      <Slider slides={slides} />

      {/* Latest Visas Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Visas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visasToShow.map((visa) => (
            <Visacard key={visa.id} visa={visa} />
          ))}
        </div>
        <div className="text-center mt-12">
          {/* {!showAllVisas && (
            // <Link to="/allvisa">
            // <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            //   See all visas
            //   <ChevronRight className="ml-2 h-5 w-5" />
            // </button>
            // </Link>
          )} */}
        </div>
      </section>

      {/* Real-time Updates Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Real-time Updates</h2>
              <p className="text-gray-600 mb-8">
                Stay informed about your visa application status with our
                real-time tracking system. Receive instant notifications about
                document requirements, interview schedules, and application
                progress.
              </p>
              <Link
                to="/track"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Track your application <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800"
                alt="Visa Processing"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Resources Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-96">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
                alt="Travel Resources"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Travel Resources</h2>
              <p className="text-gray-600 mb-8">
                Access comprehensive travel guides, country-specific
                requirements, and expert advice to make your visa application
                process smooth and successful. Our resources are regularly
                updated to reflect the latest immigration policies.
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
              >
                Explore resources <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
