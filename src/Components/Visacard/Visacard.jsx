import React from "react";
import { Clock, CreditCard, Calendar } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Visacard = ({ visa }) => {
  // console.log(visa);
  const data = useLoaderData();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-48 sm:h-60 md:h-72">
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
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="h-5 w-5 mr-2" />
            <span className="text-sm">{visa.processingTime}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <CreditCard className="h-5 w-5 mr-2" />
            <span className="text-sm">{visa.fee}</span>
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-300">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-sm">{visa.validity}</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">
          Application Method: {visa.applicationMethod}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Author: {visa.author}
        </div>
        {/* <Link
          to={`/visadetails/${visa._id}`}
          className="block w-full text-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
        >
          {" "}
          See Details
          <Tooltip anchorSelect=".my-anchor-element" place="top">
            See details
          </Tooltip>
        </Link> */}

        <div className="p-4 space-y-4">
          <Link
            to={`/visadetails/${visa._id}`}
            id={`visa-details-${visa._id}`} // Unique ID for the tooltip
            className="block w-full text-center py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
          >
            See Details
          </Link>
          <Tooltip anchorId={`visa-details-${visa._id}`} place="top">
            Click to view more details about this visa
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Visacard;
