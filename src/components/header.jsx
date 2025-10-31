// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="z-50 fixed flex justify-center max-sm:px-10 max-md:px-52 py-8 pr-[600px] pl-20 w-full">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-start w-full">
        <ul className="group flex justify-center max-md:justify-between hover:justify-between items-center bg-[#1e2c50] hover:bg-[#131c34] hover:shadow-sm hover:shadow-white max-md:px-5 hover:px-10 rounded-full max-md:w-full hover:w-full size-12 text-white transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="max-md:hidden block icons-tabler-outline icon icon-tabler icon-tabler-menu-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
          <li className="hidden max-md:block group-hover:block">
            <a href="#hero">Home</a>
          </li>
          <li className="hidden max-md:block group-hover:block">
            <a href="#profiles">Our Profile</a>
          </li>
          <li className="hidden max-md:block group-hover:block">
            <a href="#gallery">Our Gallery</a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
