import React from "react";
import { Clock, CreditCard, Calendar } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";

const Visacard = ({ visa }) => {
  console.log(visa);
  const data = useLoaderData();
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={visa.countryImage}
          alt={visa.country}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{visa.countryName}</h3>
          <p className="text-sm opacity-90">{visa.visaType}</p>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            <span>{visa.processingTime}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CreditCard className="h-5 w-5 mr-2" />
            <span>{visa.fee}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2" />
            <span>{visa.validity}</span>
          </div>
        </div>

        <div className="text-sm text-gray-500">
          Application Method: {visa.applicationMethod}
        </div>
        <div className="text-sm text-gray-500">Author: {visa.author}</div>
        <Link
          to={`/visadetails/${visa._id}`}
          className="block w-full text-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default Visacard;
