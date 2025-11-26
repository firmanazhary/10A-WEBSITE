
import gambar from "../assets/muka/gktau.webp";
import gambar2 from "../assets/muka/angkatan.png";
import gambar3 from "../assets/muka/bocah.png";


export default function HeroSectionPart2() {
    return( 
    <section className="flex flex-col">
        <div className="w-full h-auto flex flex-col lg:pl-5 md:pl-4 lg:pr-5  md:pr-4">
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold font-proximaBlack text-white hidden md:block ">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold font-proximaBlack text-white/20 lg:-mt-32 md:-mt-20 sm:mt-0 hidden md:block">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[140px] lg:text-[210px] text-center font-bold text-transparent font-proximaBlack [-webkit-text-stroke:1px_white] lg:-mt-32 md:-mt-20 hidden md:block">ZENTHORIA</h1>

            {/* text zenthoria yang buat mobile */}
             <h1 className="md:hidden text-[156px] text-center font-bold font-proximaBlack text-white">ZEN</h1>
             <h1 className="md:hidden text-[140px] text-center font-bold font-proximaBlack text-white/20 -mt-28">THO</h1>
             <h1 className="md:hidden text-[175px] text-center font-bold text-transparent font-proximaBlack [-webkit-text-stroke:1px_white] -mt-28">RIA</h1>
              <h2 className="font-poppins font-semibold text-[15px] tracking-13p text-[#F87B1B] md:hidden text-center -mt-10 pb-32">BEDA TINGKAH, SATU FREKUENSI</h2>


             {/* card foto untuk dekstop dan tablet */}
             <div className="flex justify-center lg:-mt-[380px] max-sm:hidden md:-mt-[270px] md:px-10 ">
                <img src={gambar2} alt="" className="lg:w-[350px] lg:h-[350px] rounded-[20px] lg:mt-52 -rotate-12 -mr-20 md:w-[270px] md:-mr-10 md:h-[270px] md:mt-40 hover:scale-105 transform duration-500 transition ease-in-out hover:z-20"/>

                <div className="lg:w-[450px] bg-white rounded-[40px] flex flex-col items-center relative pb-10 md:w-[300px] z-10 md:h-[400px] lg:h-[600px] hover:scale-105 transform duration-500 transition ease-in-out">
                    <img src={gambar} alt="" className="md:w-[400px] lg:w-[600px] py-7 px-5"/>
                    <h1 className="bg-[#FF9D00] font-proximaBlack lg:text-[30px] px-2 text-white absolute top-0 lg:right-10 md:text-[20px] md:right-10">ZENTHORIA</h1>
                    <h2 className="font-poppins font-semibold lg:text-[25px] text-[#1C1C1C] md:text-[18px] md:w-[300px] text-center lg:w-[400px]">Beda Tingkah, Satu Frekuensi</h2>
                </div>
                <img src={gambar3} alt="" className="lg:w-[350px] lg:h-[350px] rounded-[20px] mt-[200px] rotate-[20deg] -ml-16 md:w-[270px] md:-ml-10 md:h-[270px] hover:scale-105 transform duration-500 transition ease-in-out hover:z-20"/>
             </div>

        </div>

        {/*  */}



    </section>)
}