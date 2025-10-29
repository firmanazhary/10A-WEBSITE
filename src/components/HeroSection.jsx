// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import miniLogo from "../assets/mini-logo.svg";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col justify-center items-start bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen overflow-hidden">
      <img
        src={miniLogo}
        alt=""
        className="right-20 absolute opacity-20 h-4/5"
      />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 px-4 text-start">
        <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl">
          LEVINANCE
        </h1>
        <h2 className="mb-8 font-medium text-blue-200 text-xl md:text-2xl">
          Rise Beyond the Limits
        </h2>
        <div className="flex justify-center gap-5">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#profiles"
            className="inline-block bg-blue-600 shadow-lg hover:shadow-xl px-10 py-3 rounded-full text-white transition-all">
            Siapa Kami
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#gallery"
            className="inline-block bg-blue-600 shadow-lg hover:shadow-xl px-10 py-3 rounded-full text-white transition-all">
            Cerita Kami
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
