
import gambar from "../assets/muka/gktau.webp";
import gambar2 from "../assets/muka/angkatan.png";
import gambar3 from "../assets/muka/bocah.png";


export default function HeroSectionPart2() {
    return( 
    <section className="">
        <div className="pl-[62px]">
            <h1 className="font-vietnam text-white font-bold text-[10vh]">WE ARE</h1>
        </div>
        <div className="font-vietnam text-[195px] text-white font-bold flex justify-between items-center px-[62px]">
            <h1 className="text-[22vh]">ZEN</h1>
            <svg width="132" height="132" viewBox="0 0 132  132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M66 0L74.84 44.6584L112.669 19.331L87.3416 57.16L132 66L87.3416 74.84L112.669 112.669L74.84 87.3416L66 132L57.16 87.3416L19.331 112.669L44.6584 74.84L0 66L44.6584 57.16L19.331 19.331L57.16 44.6584L66 0Z" fill="#ADCCEB"/>
            </svg>
            <h1 className="text-[22vh]">THORIA</h1>
        </div>
    </section>)
}