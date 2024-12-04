import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
  const latestVisas = [
    {
      id: "1",
      country: "United States",
      countryImage:
        "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800",
      visaType: "B1/B2 Tourist Visa",
      processingTime: "2-3 weeks",
      fee: "$160",
      validity: "10 years",
      applicationMethod: "Online + Interview",
    },
    {
      id: "2",
      country: "United Kingdom",
      countryImage:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800",
      visaType: "Tier 4 Student Visa",
      processingTime: "3-4 weeks",
      fee: "£348",
      validity: "Course duration",
      applicationMethod: "Online",
    },
    {
      id: "3",
      country: "Canada",
      countryImage:
        "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800",
      visaType: "Work Permit",
      processingTime: "4-8 weeks",
      fee: "CAD $155",
      validity: "2 years",
      applicationMethod: "Online",
    },
    {
      id: "4",
      country: "Australia",
      countryImage:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800",
      visaType: "Working Holiday",
      processingTime: "2-4 weeks",
      fee: "AUD $495",
      validity: "1 year",
      applicationMethod: "Online",
    },
    {
      id: "5",
      country: "Germany",
      countryImage:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800",
      visaType: "Job Seeker Visa",
      processingTime: "4-6 weeks",
      fee: "€75",
      validity: "6 months",
      applicationMethod: "In-person",
    },
    {
      id: "6",
      country: "Japan",
      countryImage:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "5-7 days",
      fee: "¥3000",
      validity: "90 days",
      applicationMethod: "Embassy",
    },
    {
      id: "7",
      country: "France",
      countryImage:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
      visaType: "Schengen Visa",
      processingTime: "15 days",
      fee: "€80",
      validity: "90 days",
      applicationMethod: "Online + In-person",
    },
    {
      id: "8",
      country: "Italy",
      countryImage:
        "https://images.unsplash.com/photo-1533729084085-2c3a229e0c59?auto=format&fit=crop&w=800",
      visaType: "Student Visa",
      processingTime: "1-2 months",
      fee: "€50",
      validity: "Course duration",
      applicationMethod: "Online",
    },
    {
      id: "9",
      country: "China",
      countryImage:
        "https://images.unsplash.com/photo-1544378730-2f1fabe49343?auto=format&fit=crop&w=800",
      visaType: "Business Visa",
      processingTime: "7-10 days",
      fee: "$140",
      validity: "30 days",
      applicationMethod: "Embassy",
    },
    {
      id: "10",
      country: "India",
      countryImage:
        "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800",
      visaType: "E-Tourist Visa",
      processingTime: "3-5 days",
      fee: "$25",
      validity: "1 year",
      applicationMethod: "Online",
    },
    {
      id: "11",
      country: "South Korea",
      countryImage:
        "https://images.unsplash.com/photo-1563281978-5d12b51af116?auto=format&fit=crop&w=800",
      visaType: "Working Visa",
      processingTime: "2-3 weeks",
      fee: "₩50,000",
      validity: "1 year",
      applicationMethod: "Embassy",
    },
    {
      id: "12",
      country: "New Zealand",
      countryImage:
        "https://images.unsplash.com/photo-1553748023-6237113c534e?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "2-4 weeks",
      fee: "$165",
      validity: "9 months",
      applicationMethod: "Online",
    },
    {
      id: "13",
      country: "Brazil",
      countryImage:
        "https://images.unsplash.com/photo-1505798577917-a65157d3320c?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "10 days",
      fee: "$44",
      validity: "90 days",
      applicationMethod: "Embassy",
    },
    {
      id: "14",
      country: "Russia",
      countryImage:
        "https://images.unsplash.com/photo-1517637382994-dfbd64fb0ac7?auto=format&fit=crop&w=800",
      visaType: "Invitation Visa",
      processingTime: "2-3 weeks",
      fee: "$90",
      validity: "1 month",
      applicationMethod: "Embassy",
    },
    {
      id: "15",
      country: "Mexico",
      countryImage:
        "https://images.unsplash.com/photo-1554137476-b56d6676fdfb?auto=format&fit=crop&w=800",
      visaType: "Visitor Visa",
      processingTime: "2-3 weeks",
      fee: "$36",
      validity: "180 days",
      applicationMethod: "Online",
    },
    {
      id: "16",
      country: "Thailand",
      countryImage:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "5-7 days",
      fee: "$35",
      validity: "60 days",
      applicationMethod: "Embassy",
    },
    {
      id: "17",
      country: "Turkey",
      countryImage:
        "https://images.unsplash.com/photo-1519666213635-76f03f112129?auto=format&fit=crop&w=800",
      visaType: "E-Visa",
      processingTime: "24-48 hours",
      fee: "$20",
      validity: "90 days",
      applicationMethod: "Online",
    },
    {
      id: "18",
      country: "Saudi Arabia",
      countryImage:
        "https://images.unsplash.com/photo-1558888469-c0a51a0dd2fb?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "5 days",
      fee: "SAR 440",
      validity: "1 year",
      applicationMethod: "Online",
    },
    {
      id: "19",
      country: "Singapore",
      countryImage:
        "https://images.unsplash.com/photo-1508739773435-c26b3d09e071?auto=format&fit=crop&w=800",
      visaType: "Visitor Visa",
      processingTime: "3-5 days",
      fee: "$30",
      validity: "30 days",
      applicationMethod: "Online",
    },
    {
      id: "20",
      country: "South Africa",
      countryImage:
        "https://images.unsplash.com/photo-1542196871-8c2ec7aa1343?auto=format&fit=crop&w=800",
      visaType: "Tourist Visa",
      processingTime: "7-10 days",
      fee: "$36",
      validity: "90 days",
      applicationMethod: "Embassy",
    },
  ];

  // State to control whether all visas are shown
  const [showAllVisas, setShowAllVisas] = useState(false);

  // Decide how many visas to display based on the state
  const visasToShow = showAllVisas ? latestVisas : latestVisas.slice(0, 6);

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
          {!showAllVisas && (
            <button
              onClick={() => setShowAllVisas(true)}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              See all visas
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          )}
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
