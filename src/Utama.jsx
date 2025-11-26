import Isi from "./Isi.jsx";
import HeroSectionPart2 from "./components/HeroSectionPart2.jsx";
import Navigasi from "./components/Navigasi";


export default function Utama() {
    return (
        <div className="bg-gradient-to-br from-[#0A1A2F] to-[#0F1F3D]">\
            <Navigasi />
            <HeroSectionPart2 />
            <Isi />
        </div>
    );
}