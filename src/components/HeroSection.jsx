// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-blue-900 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-50"></div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 px-4 text-center">
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
