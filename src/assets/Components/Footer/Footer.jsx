import React from 'react';
import linkdn from './assests/linkedin.png';
import ytb from './assests/youtube.png';
import logo from './assests/zerogateway-logo.png';
import x from './assests/x.png';
import fb from './assests/fd.png';

const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-[#152f2f] w-full">
      <div className="w-3/4 max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <ul className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                <img src={fb} alt="Facebook" className="h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <img src={x} alt="Twitter" className="h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <img src={ytb} alt="YouTube" className="h-5" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <img src={linkdn} alt="LinkedIn" className="h-5 " />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="footer pri flex justify-between">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 <a href="https://flowbite.com/" className="hover:underline">ZeroGateway™ Payment Solution</a> | All Rights Reserved.
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Privacy Policy<a href="https://flowbite.com/" className="hover:underline"> | Terms of Use</a>| Refund Policy
        </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
