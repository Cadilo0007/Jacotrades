import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import logo from "../assets/JAC.png";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-6 w-full">
      <div className="info max-w-7xl w-full px-6 md:px-8 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center md:justify-items-start mx-auto items-start">

        {/* LOGO / BRAND */}
        <div className="w-full flex justify-center md:justify-start p-2 md:p-4">
          <img
        src={logo}
        alt="logo"
        className="w-28 h-28 sm:w-36 sm:h-36 md:w-[150px] md:h-[150px] object-cover rounded-full"
          />
        </div>

        {/* GET IN TOUCH */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-white font-semibold mb-2 border-b-2 border-[#6083fd] inline-block">
        Get in touch
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
        <li>+63 912 3456 789</li>
        <li>jacotradesdevs@gmail.com</li>
        <li>Cauayan City, Isabela</li>
          </ul>
        </div>

        {/* OVERVIEW */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-white font-semibold mb-2 border-b-2 border-[#6083fd] inline-block">
        Overview
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
        <li><a href="#home" className="hover:text-white">Home</a></li>
        <li><a href="#about" className="hover:text-white">About Us</a></li>
        <li><a href="#projects" className="hover:text-white">Our Project</a></li>
        <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* HELP */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-white font-semibold mb-2 border-b-2 border-[#6083fd] inline-block">
        Help
          </h3>
          <ul className="mt-3 space-y-3 text-sm">
        <li><a href="#" className="hover:text-white">Support Center</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
        <li><a href="#" className="hover:text-white">System Status</a></li>
        <li><a href="#" className="hover:text-white">Community</a></li>
        <li><a href="#" className="hover:text-white">Submit Ticket</a></li>
          </ul>
        </div>

        {/* FOLLOW US */}
        <div className="w-full text-center md:text-left">
          <h3 className="text-white font-semibold mb-2 border-b-2 border-[#6083fd] inline-block">
        Follow us
          </h3>
          <ul className="mt-3 space-y-3 text-sm flex flex-col items-center md:items-start">
        <li className="hover:text-white flex items-center gap-2">
          <Facebook size={16} /> Facebook
        </li>
        <li className="hover:text-white flex items-center gap-2">
          <Instagram size={16} /> Instagram
        </li>
        <li className="hover:text-white flex items-center gap-2">
          <Twitter size={16} /> X Twitter
        </li>
        <li className="hover:text-white flex items-center gap-2">
          <Youtube size={16} /> Youtube
        </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500 px-6">
        &copy; {new Date().getFullYear()} JAC O' TRADES | SOFTWARE SOLUTIONS / ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}

export default Footer;
