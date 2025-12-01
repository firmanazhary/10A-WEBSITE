import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
export default function Navigasi() {

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

    return (
        <section>
            <div
                className={`fixed right-[32px] top-20 py-[12px] px-[30px] transition-colors duration-300 rounded-full z-50
                ${scrolled
                        ? "bg-blue-900/80 backdrop-blur-md shadow-lg border border-white/20" // Saya gelapkan dikit backgroundnya biar teks putih terbaca
                        : "bg-transparent"
                }`}
            >
                <ul className="flex gap-[30px] md:gap-[50px]">
                    
                    {/* Link ke Home */}
                    <li>
                        <Link to="/" className="font-vietnam font-bold text-[14px] md:text-[18px] text-white hover:text-blue-300 transition-colors">
                            HOME
                        </Link>
                    </li>

                    {/* Link ke Profile */}
                    <li>
                        <a href="/#profiles" className="font-vietnam font-bold text-[14px] md:text-[18px] text-white hover:text-blue-300 transition-colors">
                            OUR PROFILE
                        </a>
                    </li>

                    {/* Link ke Gallery */}
                    <li>
                        <a href="/#gallery" className="font-vietnam font-bold text-[14px] md:text-[18px] text-white hover:text-blue-300 transition-colors">
                            OUR GALLERY
                        </a>
                    </li>

                    {/*  JADWAL */}
                    <li>
                        <Link to="/jadwal" className="font-vietnam font-bold text-[14px] md:text-[18px] text-cyan-300 hover:text-white transition-colors">
                            JADWAL
                        </Link>
                    </li>

                </ul>
            </div>
        </section>
    )
}