import React from "react";
import { Hero } from "../../../Components/Here/Hero";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import Footer from "../../../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-base-100 dark:bg-gray-900">
      {/* Hero Section */}
      <Hero />

      {/* Newsletter Section */}
      <div className="mt-8">
        <Newsletter />
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
