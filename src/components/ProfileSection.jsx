
// src/components/ProfileSection.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import feather from "feather-icons";
import { studentsData } from "../data/studenstData";

export default function ProfileSection() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <motion.section id="profiles" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-white mb-12"
        >
          Kelas X Abudzar
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {studentsData.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="relative h-48">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {student.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{student.quote}</p>
                <div className="flex space-x-2 mb-3">
                  <a
                    href={`https://instagram.com/${student.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <i data-feather="instagram"></i>
                  </a>
                  <a
                    href={`https://linkedin.com/in/${student.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <i data-feather="linkedin"></i>
                  </a>
                </div>

                {/* Tombol ke portfolio eksternal */}
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href={student.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-600 text-white py-2 rounded-full text-sm"
                >
                  Kunjungi Portfolio
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
