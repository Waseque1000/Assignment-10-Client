import React from "react";
import { useLoaderData } from "react-router-dom";
import Visacard from "../../Visacard/Visacard";

const Allvisa = () => {
  const data = useLoaderData();
  return (
    <div className="p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((visa) => (
          <Visacard key={visa._id} visa={visa}></Visacard>
        ))}
      </div>
    </div>
  );
};

export default Allvisa;
