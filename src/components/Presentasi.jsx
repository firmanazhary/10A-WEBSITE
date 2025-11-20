import { useState, useEffect } from "react";
import Bread from "../assets/story/bread-papas.webp";
import XP from "../assets/story/xpboost.webp";
import kopitepi from "../assets/story/kopitepi.webp";
import eduverse from "../assets/story/eduverse.webp";
import { title } from "framer-motion/client";

const slides = [
  {
    title: "Bread Papas",
    description: "Ini adalah isi slide pertama.",
    image: Bread,
    button: "Visit"
  },
  {
    title: "XP Boost",
    description: "Konten di slide kedua.",
    image: XP,
    button: "Visit"
  },
  {
    title: "Kopi Tepi",
    description: "Slide ketiga berisi apa pun yang kamu mau.",
    image: kopitepi,
    button: "Visit"
  },
  {
    title: "Eduverse",
    description: "Slide keempat berisi apa pun yang kamu mau.",
    image: eduverse,
    button: "Visit"
  }
];

export default function Presentasi({ autoPlay = true, duration = 3000 }) {
  const [index, setIndex] = useState(0);

  // AutoPlay
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, duration);

    return () => clearInterval(timer);
  }, [autoPlay, duration]);

  // Handler
  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div className="w-full flex justify-center items-center my-10">
      {/* Wrapper */}
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] rounded-2xl overflow-hidden shadow-2xl relative">

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={i}
              className="relative min-w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
            >
              {/* Image */}
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-end rounded-2xl px-4 sm:px-8 pb-6">
                <div className="text-white max-w-xl">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
                    {s.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                    {s.description}
                  </p>
                  <button className="bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg hover:bg-yellow-600 transform hover:scale-105 transition duration-300">
                    {s.button}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* DOTS */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition 
              ${index === i ? "bg-white opacity-100" : "bg-white opacity-50"}`}
            />
          ))}
        </div>

        {/* OPTIONAL Prev/Next */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 
                     text-white text-3xl font-bold drop-shadow-lg"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 
                     text-white text-3xl font-bold drop-shadow-lg"
        >
          ▶
        </button>

      </div>
    </div>
  );
}