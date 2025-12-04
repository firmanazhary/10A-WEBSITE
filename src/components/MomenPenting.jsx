import Telaga from "../assets/story/pelangi.webp";
import Fest from "../assets/story/munfest.webp";
import Arabic from "../assets/story/b-arab.webp";
import Presentasi from "../assets/story/bread-papas.webp"

export default function MomenPenting() {
  return (
    <section className="w-full px-5 py-10 relative flex flex-col h-auto bg-[#0A66C2]">
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[500px] h-[750px] opacity-65 z-0 rounded-xl bg-cover bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${Fest})` }}
      ></div>


{/* parent card */}
      <div className="grid grid-cols-4 grid-rows-2 gap-10 z-20 mx-10 mt-40">
        <h1 className="text-4xl font-bold font-vietnam text-white text-center 
          row-start-1 row-end-3 col-start-2 col-end-4 flex items-center justify-center -mt-96">
          MOMEN-MOMEN<span className="font-birthstone"> Berharga</span>
        </h1>

  {/* CARD 1 */}
  <div className="row-start-1 col-start-1 h-auto rounded-xl flex flex-col p-1">
    <div className="w-[250px] flex justify-center items-center">
      <img src={Presentasi} alt="" className="grayscale rounded-none w-[250px] h-[250px] object-cover" />
    </div>
    <div className="mt-2 flex flex-col w-[250px]">
      <p className="font-vietnam text-lg text-white text-left">
        <span className="font-bold">Project TailwindCSS - </span>Project kelompok website pake TailwindCSS
      </p>
      <div className="mt-2">
        <button>
          <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
        </button>
      </div>
    </div>
  </div>

  {/* CARD 2 */}
  <div className="row-start-2 col-start-2 h-auto rounded-xl flex flex-col p-1 -mt-20">
    <div className="w-[250px] flex justify-center items-center">
      <img src={Telaga} alt="" className="grayscale rounded-none w-[250px] h-[250px] object-cover" />
    </div>
    <div className="mt-2 flex flex-col w-[250px]">
      <p className="font-vietnam text-lg text-white text-left">
        <span className="font-bold">Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang
      </p>
      <div className="mt-2">
        <button>
          <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
        </button>
      </div>
    </div>
  </div>

  {/* CARD 3 */}
  <div className="row-start-1 col-start-4 h-auto rounded-xl flex flex-col p-1">
    <div className="w-[250px] flex justify-center items-center">
      <img src={Presentasi} alt="" className="grayscale rounded-none w-[250px] h-[250px] object-cover" />
    </div>
    <div className="mt-2 flex flex-col w-[250px]">
      <p className="font-vietnam text-lg text-white text-left">
        <span className="font-bold">Bahasa Arab - </span>Hari terakhir belajar bahasa arab di kelas 9
      </p>
      <div className="mt-2">
        <button>
          <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
        </button>
      </div>
    </div>
  </div>

  {/* CARD 4 */}
  <div className="row-start-2 col-start-3 h-auto rounded-xl flex flex-col p-1 -mt-20">
    <div className="w-[250px] flex justify-center items-center">
      <img src={Arabic} alt="" className="grayscale rounded-none w-[250px] h-[250px] object-cover" />
    </div>
    <div className="mt-2 flex flex-col w-[250px]">
      <p className="font-vietnam text-lg text-white text-left">
        <span className="font-bold">Project TailwindCSS - </span>Project kelompok website pake TailwindCSS
      </p>
      <div className="mt-2">
        <button>
          <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
        </button>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}
