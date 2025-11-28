import Isi from "./Isi.jsx";
import HeroSectionPart2 from "./components/HeroSectionPart2.jsx";
import Navigasi from "./components/Navigasi";


export default function Utama() {
    return (
        <div className="bg-[radial-gradient(67.9%_44.18%_at_50%_63.51%,#021427_0%,#0A66C2_100%)]">
            <Navigasi />
            <HeroSectionPart2 />
            <Isi />
        </div>
    );
}