// src/components/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-50"></div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          LEVI NANCE
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-8">
          10A
        </h2>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#profiles"
          className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all inline-block"
        >
          Jelajahi Angkatan Kami
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
