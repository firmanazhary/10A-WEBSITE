import { useState, useEffect } from "react";
import { div } from "framer-motion/client";
import { section } from "framer-motion/m";

export default function Navigasi(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <section>
            <div 
              className={`fixed right-[32px] top-20 py-[12px] px-[30px] transition-colors duration-300 rounded-full
                ${scrolled 
                  ? "bg-blue-400/40 backdrop-blur-md  shadow-lg border border-white z-30"
                  : "bg-transparent"
                }`}
            >
              <ul className="flex gap-[50px]">
                <li><a href="" className="font-vietnam font-bold text-[18px] text-white">HOME</a></li>
                <li><a href="" className="font-vietnam font-bold text-[18px] text-white">OUR PROFILE</a></li>
                <li><a href="" className="font-vietnam font-bold text-[18px] text-white">OUR GALLERY</a></li>
              </ul>
            </div>
        </section>
    )
}
