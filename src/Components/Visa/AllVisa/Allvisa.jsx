import React from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import Visacard from "../../Visacard/Visacard";
import { Helmet } from "react-helmet";

const Allvisa = () => {
  const data = useLoaderData();
  const location = useLocation();

  return (
    <div className="p-3 bg-gray-100 dark:bg-gray-800 min-h-screen">
      <Helmet>
        <title>Visa || All VIsa</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">
        All Visas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((visa) => (
          <Visacard key={visa._id} visa={visa}></Visacard>
        ))}
      </div>
    </div>
  );
};

export default Allvisa;
