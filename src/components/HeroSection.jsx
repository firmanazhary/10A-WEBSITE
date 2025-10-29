// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import miniLogo from "../assets/mini-logo.svg";
import gunung from "../assets/story/gunung.webp";
import kelas from "../assets/story/kelas.webp";
import leptop from "../assets/story/leptop.webp";
import sawah from "../assets/story/sawah.webp";

export default function HeroSection() {
  const carousel = [gunung, kelas, leptop, sawah];
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-blue-900 px-20 h-screen overflow-hidden">
      <img
        src={miniLogo}
        alt=""
        className="-right-40 absolute opacity-20 h-4/5"
      />
      <div className="flex justify-between w-full h-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="z-10 flex flex-col justify-center items-start max-sm:items-center pr-80 max-sm:pr-0 w-full text-start">
          <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl">
            LEVINANCE
          </h1>
          <h2 className="mb-8 font-medium text-blue-200 text-xl md:text-2xl">
            Rise Beyond the Limits
          </h2>
          <p className="max-sm:hidden mb-10 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sint
            libero facere voluptatem maxime sit repellendus consectetur, ex non
            nostrum, exercitationem quaerat velit ad necessitatibus quia
            quisquam amet sed blanditiis!
          </p>
          <div className="max-sm:hidden flex justify-center gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#profiles"
              className="inline-block hover:bg-cyan-900 hover:shadow-lg px-10 py-3 border border-cyan-900 rounded-full text-white transition-all">
              Siapa Kami
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="inline-block bg-cyan-900 hover:bg-transparent shadow-lg hover:shadow-xl px-10 py-3 hover:border hover:border-cyan-900 rounded-full text-white transition-all hover:">
              Cerita Kami
            </motion.a>
          </div>
        </motion.div>
        <div className="mx-auto h-full">
          <motion.div
            className="max-md:hidden flex flex-col justify-center gap-20 animate-scroll-up"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            {[...carousel, ...carousel].map((item, i) => (
              <img
                src={item}
                alt=""
                key={i}
                className="rounded-2xl w-[300px] h-[400px] object-cover"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
