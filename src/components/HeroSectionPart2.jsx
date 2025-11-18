import gambar from "../assets/gktau.webp"

export default function HeroSectionPart2() {
    return( 
    <section className="bg-[linear-gradient(113.04deg,_#0A1A2F_13.32%,_#0F1F3D_67.63%)] flex flex-col">
        <div className="w-full h-auto flex flex-col">
            <h1 className="text-[60px] md:text-[220px] text-center font-bold text-white">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[220px] text-center font-bold text-white/20">ZENTHORIA</h1>
            <h1 className="text-[60px] md:text-[220px] text-center font-bold text-transparent
[-webkit-text-stroke:1px_white]">ZENTHORIA</h1>
        </div>
        <div className="flex flex-col items-center relative bg-[linear-gradient(113.04deg,_#0A1A2F_13.32%,_#0F1F3D_67.63%)] w-a h-auto">
            <div className="flex flex-col items-center bg-white w-[300px] h-[300px] py-[4px] px-[6px] rounded-lg">
                <img src={gambar} alt="" className="w-auto h-auto"/>
                <h2>Beda tingkah, Satu Frekuensi</h2>
                <div><p>Zenthoria</p></div>
            </div>
            <div>
                <img src="" alt="" />   
            </div>
            <div>
                <img src="" alt="" />
            </div>
        </div>
    </section>)
}