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
    <motion.section id="profiles" className="bg-gray-900 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 font-bold text-white text-3xl text-center">
          Jelajah Santri
        </motion.h2>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {studentsData.map((student, index) => (
            <motion.div
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="flex flex-col justify-between bg-gray-800 shadow-xl hover:shadow-2xl rounded-xl overflow-hidden transition-all">
              <div className="relative h-48">
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-full h-full object-cover"
                />
                <p
                  className={`${
                    student.status == "osis"
                      ? "bg-teal-950 text-white py-1 px-4 rounded-r-full top-3 left-0 absolute"
                      : "hidden"
                  }`}>
                  {student.status}
                </p>
              </div>
              <div className="flex flex-col justify-between p-4">
                <h3 className="mb-1 font-bold text-white text-xl line-clamp-1">
                  {student.name}
                </h3>
                <p className="mb-3 text-gray-400 text-sm line-clamp-2">
                  {student.quote}
                </p>
                <div className="flex space-x-2 mb-3">
                  <a
                    href={student.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300">
                    <i data-feather="instagram"></i>
                  </a>
                  <a
                    href={student.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300">
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
                  className="block bg-blue-600 py-2 rounded-full text-white text-sm text-center">
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
