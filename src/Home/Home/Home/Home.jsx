import React from "react";
import { Hero } from "../../../Components/Here/Hero";
import Newsletter from "../../../Components/Newsletter/Newsletter";
import VisaStatsSection from "../../../Components/About/VisaStatsSection";
import VisaServicesSection from "../../../Components/About/VisaServicesSection";
import VisaStatusSection from "../../../Components/About/MainSEction/VisaStatusSection";

const Home = () => {
  return (
    <div className="bg-base-100 dark:bg-gray-900">
      {/* <Navbar /> */}
      <Hero />
      <VisaStatusSection></VisaStatusSection>
      <VisaServicesSection />

      {/* Newsletter Section */}
      <div className="mt-8">
        <Newsletter />
      </div>

      {/* Footer Section */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
