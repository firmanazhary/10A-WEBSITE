// src/components/GallerySection.jsx
import { motion } from "framer-motion";
import { galleryData } from "../data/galleryData";

export default function GallerySection() {
  return (
    <motion.section className="bg-gray-800 px-4 py-20" id="gallery">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 font-bold text-white text-3xl text-center">
          Cerita Santri
        </motion.h2>

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group group relative rounded-xl overflow-hidden">
              <img
                src={photo.image}
                alt={photo.caption}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="top-0 left-0 z-30 absolute flex flex-col gap-3 bg-black p-5 w-1/2 h-full overflow-y-scroll text-white transition-all -translate-x-full group-hover:translate-x-0 duration-300 scrollbar-hide">
                <div>
                  <h1 className="font-bold text-2xl">{photo.caption}</h1>
                  <h2 className="text-sm">{photo.tanggal}</h2>
                </div>
                <p className="text-sm">{photo.description}</p>
              </div>
              <div className="top-0 left-0 absolute flex flex-col justify-center items-center bg-black/80 w-full h-full text-center transition-all group-hover:translate-x-full duration-300">
                <h1 className="font-bold text-white text-2xl line-clamp-1">
                  {photo.caption}
                </h1>
                <h2 className="text-white text-sm">{photo.tanggal}</h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
