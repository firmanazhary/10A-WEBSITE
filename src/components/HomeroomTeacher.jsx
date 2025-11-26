import ustadz from "../assets/muka/ustad.png"
import koma from "../assets/koma-atas.png"

export default function HomeroomTeacher() {
    return (
        <section className="w-[100%] bg-white rounded-[40px] flex flex-col items-center relative z-10 h-auto px-2">
            <div className="w-full">
                <img src={ustadz} alt="" className="rounded-t-[40px] w-full h-auto"/>
                <h1 className="bg-[#FF9D00] font-proximaBlack lg:text-[30px] px-2 text-white absolute top-0 lg:right-10 md:text-[20px] md:right-10">Homeroom Teacher</h1>
            </div>
            <div>
                <div className="flex flex-col relative gap-5">
                    <div className="text-left -ml-24">
                        <h1 className="text-[80px] text-[#F87B1B] font-bold font-proximaBlack">Muhammad</h1>
                        <h1 className="text-[245px] text-[#3E4B63] font-bold font-proximaBlack -mt-[100px]">Firman</h1>
                    </div>
                    <div className="text-center -mt-[180px]">
                        <h1 className="text-[245px] text-[#03233B]/50 font-bold font-proximaBlack">Azhary</h1>
                    </div>
                </div>
                <div className="flex flex-col relative gap-5">
                    <div>
                        <img src={koma} alt="" className="w-[290px] h-auto"/>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
}