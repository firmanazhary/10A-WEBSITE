import { useState, useEffect } from "react";
import { div } from "framer-motion/client";
import { section } from "framer-motion/m";

export default function Navigasi(){
    const [open, setOpen] = useState(false);
    const [showBar, setShowBar] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > 50); // muncul setelah scroll 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <section>
        <div className={`z-50 fixed top-0 left-0 w-full pb-2 transition-all duration-500 ${
        showBar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }] bg-[#0A1A2F]/90`}>
             {/* untuk dekstop & tablet */}
            <div className="flex justify-around items-center fixed left-0 right-0 z-50 max-sm:hidden bg-[#0A1A2F]/90 py-9">
                  <div>
                    <h1 className="font-proximaBlack text-[35px] text-white">LOGO</h1>
                    </div>
                    <ul   ul className="flex gap-10 font-proximaBlack text-[25px] text-white">
                        <li className="hover:scale-110 transform transition duration-300 hover:border-b-2"><a href="#" className="">HOME</a></li>
                        <li className="hover:scale-110 transform transition duration-300 hover:border-b-2"><a href="#">OUR PROFIL</a></li>
                        <li className="hover:scale-110 transform transition duration-300 hover:border-b-2"><a href="#">OUR GALLERY</a></li>
                    </ul>
            </div>

            {/* untuk mobile */}
           <div className="flex justify-around items-center fixed left-0 right-0 z-50 max-sm:block bg-[#0A1A2F] py-3 md:hidden top-[610px]">
            <div className="flex justify-around text-white">

    {/* HOME */}
    <svg xmlns="http://www.w3.org/2000/svg"
      width="65" height="65" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="transition-all duration-300 ease-in-out 
                 hover:bg-[#F87B1B] hover:-translate-y-7 
                 rounded-xl p-2 cursor-pointer">

      <path d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105" />
      <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0" />
    </svg>

    {/* USER */}
    <svg xmlns="http://www.w3.org/2000/svg"
      width="65" height="65" viewBox="0 0 24 24"
      fill="currentColor"
      className="transition-all duration-300 ease-in-out
                 hover:bg-[#F87B1B] hover:-translate-y-7
                 rounded-xl p-2 cursor-pointer">

      <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
      <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
    </svg>

    {/* GALLERY */}
    <svg xmlns="http://www.w3.org/2000/svg"
      width="65" height="65" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className="transition-all duration-300 ease-in-out 
                 hover:bg-[#F87B1B] hover:-translate-y-7 
                 rounded-xl p-2 cursor-pointer">

      <path d="M7 3m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
      <path d="M4.012 7.26a2.005 2.005 0 0 0 -1.012 1.737v10c0 1.1 .9 2 2 2h10c.75 0 1.158 -.385 1.5 -1" />
      <path d="M17 7h.01" />
      <path d="M7 13l3.644 -3.644a1.21 1.21 0 0 1 1.712 0l3.644 3.644" />
      <path d="M15 12l1.644 -1.644a1.21 1.21 0 0 1 1.712 0l2.644 2.644" />
    </svg>

  </div>
</div>

        </div>

         
              
        </section>
    )
}