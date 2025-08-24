import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-200 py-6 mt-16 border-t-2">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Branding or Logo */}
        <div className="text-lg font-bold text-gray-100 mb-4 md:mb-0">OOM</div>

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-sm md:mt-0">
          © {new Date().getFullYear()} ISAR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
