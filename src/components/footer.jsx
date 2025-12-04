import { div } from "framer-motion/client";

export default function Footer() {
  return (
    <section className="flex flex-col justify-center items-center">
  
  {/* Logo Section */}
  <div className="flex flex-col items-center justify-center mb-10">
    <h1 className="text-[100px] font-vietnam font-black text-white pb-20">
      LOGO
    </h1>
    <h1 className="text-[240px] font-vietnam font-black text-white/10">
      ZENTHORIA
    </h1>
  </div>

  {/* Footer Menu */}
  <div className="flex justify-between w-full px-10 items-center">
    
    {/* Menu Kiri */}
    <div className="flex gap-[31px]">
      <h1 className="font-vietnam text-white text-[18px] font-bold">HOME</h1>
      <h1 className="font-vietnam text-white text-[18px] font-bold">OUR PROFILE</h1>
      <h1 className="font-vietnam text-white text-[18px] font-bold">OUR GALLERY</h1>
    </div>

    {/* Copyright Kanan */}
    <div>
      <h1 className="text-[18px] font-vietnam font-bold text-white">
        © 2025 Zenthoria. <span className="font-birthstone font-normal text-[20px]">All Rights Reserved</span>
      </h1>
    </div>

  </div>
</section>

  );
}
