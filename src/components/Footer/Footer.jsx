import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  PhoneCall,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6">
        {/* Logo / Name */}
        <h1 className="text-xl font-semibold">StackVision</h1>

        {/* Contact Info */}
        <address className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-200 not-italic">
          <a
            href="tel:+923038384812"
            className="flex items-center gap-2 hover:text-teal-500 transition-colors"
          >
            <PhoneCall className="text-teal-500 w-4 h-4" />
            +92 303 8384812
          </a>
          <a
            href="mailto:stackvision@gmail.com"
            className="flex items-center gap-2 hover:text-teal-500 transition-colors"
          >
            <Mail className="text-teal-500 w-4 h-4" />
            stackvision@gmail.com
          </a>
        </address>

        {/* Social Icons */}
        <div className="flex gap-4 text-white">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:bg-teal-500 hover:p-[0.2rem] hover:rounded-[16%] cursor-pointer transition-all duration-300 w-5 h-5 flex items-center"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:bg-teal-500 hover:p-[0.2rem] hover:rounded-[16%] cursor-pointer transition-all duration-300 w-5 h-5 flex items-center"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:bg-teal-500 hover:p-[0.2rem] hover:rounded-[16%] cursor-pointer transition-all duration-300 w-5 h-5 flex items-center"
          >
            <Twitter />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:bg-teal-500 hover:p-[0.2rem] hover:rounded-[16%] cursor-pointer transition-all duration-300 w-5 h-5 flex items-center"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
