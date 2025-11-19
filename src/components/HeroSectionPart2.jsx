import gambar from "../assets/muka/gktau.webp";

export default function HeroSectionPart2() {
    return( 
    <section className="bg-[linear-gradient(113.04deg,_#0A1A2F_13.32%,_#0F1F3D_67.63%)] flex flex-col">
        <div className="w-full h-auto flex flex-col lg:pl-5 md:pl-4 lg:pr-5  md:pr-4">
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold font-proximaBlack text-white hidden md:block ">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold font-proximaBlack text-white/20 lg:-mt-32 md:-mt-20 sm:mt-0 hidden md:block">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold text-transparent font-proximaBlack [-webkit-text-stroke:1px_white] lg:-mt-32 md:-mt-20 hidden md:block">ZENTHORIA</h1>

            {/* text zenthoria yang buat mobile */}
             <h1 className="md:hidden text-[156px] text-center font-bold font-proximaBlack text-white">ZEN</h1>
             <h1 className="md:hidden text-[140px] text-center font-bold font-proximaBlack text-white/20 -mt-28">THO</h1>
             <h1 className="md:hidden text-[175px] text-center font-bold text-transparent font-proximaBlack [-webkit-text-stroke:1px_white] -mt-28">RIA</h1>


             {/* card foto untuk dekstop dan tablet */}
             <div>
                <div className="bg-white w-[500px] rounded-[40px] flex flex-col items-center">
                    <img src={gambar} alt="" className="md:w-96 lg:w-[500px] py-10 px-5"/>
                    <h1 className="bg-[#FF9D00]">ZENTHORIA</h1>
                    <h2>Beda Tingkah, Satu Frekuensi</h2>
                </div>
             </div>

        </div>

        {/*  */}



    </section>)
}