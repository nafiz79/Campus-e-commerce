import React from "react";
import { Link } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-col-1 md:grid-cols-4 gap-8 px-4 lg-px-0">
        <div className="text-lg text-gray-800">
          <h3>Newsletter</h3>
          <p className="text-gray-500 mb-4">
            Be the first to hear about new products,exclusive events, and online
            offers.{" "}
          </p>
          <p className="font-medium text-sm text-gray-600 mb-6">
            Sign up and get 10% off your first order.
          </p>
          {/* Newsletter form */}
          <form action="" className="flex">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-3 w-full text-sm broder-t border-l border-gray-300 mounded-l-md
              focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            ></input>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md
          hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 ">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                Engineering
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                Medical
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                University
              </Link>
            </li>
          </ul>
        </div>
        {/* Shop Links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4 ">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-gray-600 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="boopener noreferrer"
              className="hover:text-gray-300"
            >
              <TbBrandMeta className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="boopener noreferrer"
              className="hover:text-gray-300"
            >
              <IoLogoInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.x.com"
              target="_blank"
              rel="boopener noreferrer"
              className="hover:text-gray-300"
            >
              <RiTwitterXLine className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-500 ">Call Us</p>
          <FiPhoneCall className="inline-block mr-2" />
          +880-1792-197657
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 lg:px-0 border-t broder-gray-200 pt-6">
        <p className="text-center text-gray-500 text-sm tracking-tighter">
          © 2025, Logger's Campus Fashion, All Rights Reserved. <br />
          Designed by {"Nafees Ahamed"}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
