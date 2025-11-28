

export default function HomeroomTeacher() {
    return (
        <section className="w-[100%] bg-white rounded-[40px] flex flex-col items-center relative z-10 h-auto px-2">
            <div className="w-full">
                <img src="" alt="" className="rounded-[40px] w-full h-auto"/>
                <h1 className="bg-[#FF9D00] font-proximaBlack lg:text-[30px] px-2 text-white absolute top-0 lg:right-10 md:text-[20px] md:right-10">Homeroom Teacher</h1>
            </div>
            <div>
                <div className="flex flex-col relative gap-5">
                    <div className="text-left">
                        <h1 className="lg:text-[80px] text-[24px] text-[#F87B1B] font-bold font-proximaBlack">Muhammad</h1>
                        <h1 className="lg:text-[245px] text-[75px] text-[#3E4B63] font-bold font-proximaBlack lg:-mt-[100px] -mt-[25px]">Firman</h1>
                    </div>
                    <div className="text-center lg:-mt-[180px] -mt-[60px]">
                        <h1 className="lg:text-[245px] text-[75px] text-[#03233B]/50 font-bold font-proximaBlack">Azhary</h1>
                    </div>
                </div>
                <div className="flex flex-row relative gap-5 w-full items-center -mt-[15px] lg:-mt-[50px]">
                    <div className="">
                        <img src=" " alt="" className="lg:w-[290px] h-auto w-[90px] "/>
                    </div>
                    <div>
                        <p className="text-[#3E4B63] text-20px lg:text-[60px] font-proximaBlack">Belajar itu proses, bukan perlombaan</p>
                    </div>
                </div>
            </div>
        </section>
    );
}