// import React from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-base-200 text-base-content">
//       {/* Main Footer Content */}
//       <div className="footer p-10 max-w-7xl mx-auto">
//         {/* Company Info */}
//         <div>
//           <h2 className="text-2xl font-bold">Visa Navigator</h2>
//           <p className="max-w-xs mt-2">
//             Simplifying your visa application process with expert guidance and
//             seamless documentation support worldwide.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <span className="footer-title">Quick Links</span>
//           <a className="link link-hover">Home</a>
//           <a className="link link-hover">All Visas</a>
//           <a className="link link-hover">Add Visa</a>
//           <a className="link link-hover">My Applications</a>
//         </div>

//         {/* Services */}
//         <div>
//           <span className="footer-title">Services</span>
//           <a className="link link-hover">Tourist Visa</a>
//           <a className="link link-hover">Student Visa</a>
//           <a className="link link-hover">Business Visa</a>
//           <a className="link link-hover">Immigration</a>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <span className="footer-title">Contact Us</span>
//           <div className="space-y-2">
//             <a className="flex items-center gap-2">
//               <MapPin size={18} />
//               123 Visa Street, Global City
//             </a>
//             <a className="flex items-center gap-2">
//               <Phone size={18} />
//               +1 234 567 890
//             </a>
//             <a className="flex items-center gap-2">
//               <Mail size={18} />
//               support@visanavigator.com
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Social Links & Copyright */}
//       <div className="border-t border-base-300">
//         <div className="max-w-7xl mx-auto py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="flex gap-4">
//             <a className="btn btn-ghost btn-circle">
//               <Facebook size={20} />
//             </a>
//             <a className="btn btn-ghost btn-circle">
//               <Twitter size={20} />
//             </a>
//             <a className="btn btn-ghost btn-circle">
//               <Instagram size={20} />
//             </a>
//             <a className="btn btn-ghost btn-circle">
//               <Linkedin size={20} />
//             </a>
//           </div>

//           <div className="text-center md:text-right">
//             <p>© {currentYear} Visa Navigator. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content dark:bg-gray-800 dark:text-white">
      {/* Main Footer Content */}
      <div className="footer p-10 max-w-7xl mx-auto">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Visa Navigator</h2>
          <p className="max-w-xs mt-2">
            Simplifying your visa application process with expert guidance and
            seamless documentation support worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <span className="footer-title">Quick Links</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">All Visas</a>
          <a className="link link-hover">Add Visa</a>
          <a className="link link-hover">My Applications</a>
        </div>

        {/* Services */}
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Tourist Visa</a>
          <a className="link link-hover">Student Visa</a>
          <a className="link link-hover">Business Visa</a>
          <a className="link link-hover">Immigration</a>
        </div>

        {/* Contact Info */}
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="space-y-2">
            <a className="flex items-center gap-2">
              <MapPin size={18} />
              123 Visa Street, Global City
            </a>
            <a className="flex items-center gap-2">
              <Phone size={18} />
              +1 234 567 890
            </a>
            <a className="flex items-center gap-2">
              <Mail size={18} />
              support@visanavigator.com
            </a>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="border-t border-base-300 dark:border-gray-700">
        <div className="max-w-7xl mx-auto py-6 px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a className="btn btn-ghost btn-circle">
              <Facebook size={20} />
            </a>
            <a className="btn btn-ghost btn-circle">
              <Twitter size={20} />
            </a>
            <a className="btn btn-ghost btn-circle">
              <Instagram size={20} />
            </a>
            <a className="btn btn-ghost btn-circle">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p>© {currentYear} Waseque Arafat. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
