import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Isi from "./Isi.jsx";
import HeroSectionPart2 from "./components/HeroSectionPart2.jsx";
import Navigasi from "./components/Navigasi";
import JadwalKelas from "./components/pages/JadwalKelas.jsx"; 

export default function Utama() {
    return (
        <BrowserRouter>
          
            <Routes>
          
                <Route 
                    path="/" 
                    element={
                     
                        <div className="bg-[radial-gradient(67.9%_44.18%_at_50%_63.51%,#021427_0%,#0A66C2_100%)] min-h-screen">
                          <Navigasi />
                            <HeroSectionPart2 />
                            <Isi />
                        </div>
                    } 
                />

             
                <Route 
                    path="/jadwal" 
                    element={<JadwalKelas />} 
                />

            </Routes>
        </BrowserRouter>
    );
}