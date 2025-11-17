// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import Particles from "../Particles/Particles";
import Typing from "../teks-animasi/TextType/TextType";
import { studentsData } from "../data/studenstData";
import miniLogo from "../assets/mini-logo.svg";
import eduverse from "../assets/story/eduverse.webp";
import xpboost from "../assets/story/xpboost.webp";
import breadpapas from "../assets/story/bread-papas.webp";

export default function HeroSection() {
  const carousel = [eduverse, xpboost, breadpapas];
  const quotest = studentsData.map((quote) => {
    const b = quote.quote;
    return b;
  });
  console.log(quotest[2]);

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
        className="-right-40 absolute opacity-5 h-4/5"
      />
      <div className="absolute w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={90}
          particleSpread={8}
          speed={0.15}
          particleBaseSize={100}
          alphaParticles={true}
          disableRotation={true}
        />
      </div>
      <div className="flex justify-between w-full h-full">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="z-10 flex flex-col justify-center items-start max-sm:items-center pr-80 max-sm:pr-0 max-md:pr-40 w-full text-start">
          <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl">
            LEVINANCE
          </h1>
          <Typing
            text={[
              quotest[0],
              quotest[1],
              quotest[2],
              quotest[3],
              quotest[4],
              quotest[5],
              quotest[6],
              quotest[7],
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            className="mb-10 text-cyan-200/80 text-xl max-sm:text-center"
          />
          <p className="max-sm:hidden mb-10 text-white">
           Perjalanan kami tidak hanya tentang belajar, tetapi juga tentang persahabatan, pengalaman, cerita, dan masa yang tidak akan kembali.
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
        <div className="flex gap-10 -rotate-12">
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
                  className="rounded-2xl w-[350px] h-[400px] object-cover"
                />
              ))}
            </motion.div>
          </div>
          <div className="mx-auto h-full">
            <motion.div
              className="max-md:hidden flex flex-col justify-center gap-20 animate-scroll-down"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}>
              {[...carousel, ...carousel, ...carousel].map((item, i) => (
                <img
                  src={item}
                  alt=""
                  key={i}
                  className="rounded-2xl w-[350px] h-[400px] object-cover"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
