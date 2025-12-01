import Gambar from "../assets/muka/pelangi.jpg";

export default function MomenPenting() {
  return (
    <section className="w-full px-5 py-10 relative flex flex-col h-auto">
      <h1 className="text-6xl font-bold mb-5 text-center font-vietnam text-white">
        Momen-momen Penting
      </h1>

      <div
        className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] opacity-20 z-0 rounded-xl bg-cover bg-no-repeat grayscale"
        style={{ backgroundImage: `url(${Gambar})` }}
      ></div>

      <div className="grid grid-cols-4 grid-rows-2 gap-10 z-20 mx-10">
        {/* CARD 1 */}
        <div className="row-start-1 col-start-1 row-end-2 col-end-2 h-auto rounded-xl shadow flex flex-col items-center p-4 bg-[#ffffff0f] backdrop-blur-md">
          <div className="w-72 flex justify-center items-center">
            <img src={Gambar} alt="" className="grayscale rounded-none" />
          </div>
          <div className="w-72 h-auto mt-2 items-center flex flex-col">
            <p className="font-vietnam text-2xl text-white text-center">
              <span className="font-bold">Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang
            </p>
            <div className="flex flex-row items-start gap-5 mt-2 w-full justify-start">
              <button>
                <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="row-start-2 col-start-2 row-end-3 col-end-3 h-auto rounded-xl shadow flex flex-col items-center p-4 bg-[#ffffff0f] backdrop-blur-md">
          <div className="w-72 flex justify-center items-center">
            <img src={Gambar} alt="" className="grayscale rounded-none" />
          </div>
          <div className="w-72 h-auto mt-2 items-center flex flex-col">
            <p className="font-vietnam text-2xl text-white text-center">
              <span className="font-bold">Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang
            </p>
            <div className="flex flex-row items-start gap-5 mt-2 w-full justify-start">
              <button>
                <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="row-start-1 col-start-4 row-end-2 col-end-5 h-auto rounded-xl shadow flex flex-col items-center p-4 bg-[#ffffff0f] backdrop-blur-md">
          <div className="w-72 flex justify-center items-center">
            <img src={Gambar} alt="" className="grayscale rounded-none" />
          </div>
          <div className="w-72 h-auto mt-2 items-center flex flex-col">
            <p className="font-vietnam text-2xl text-white text-center">
              <span className="font-bold">Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang
            </p>
            <div className="flex flex-row items-start gap-5 mt-2 w-full justify-start">
              <button>
                <p className="font-vietnam text-blue-500 text-left">Lihat hasil</p>
              </button>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="row-start-2 col-start-3 row-end-3 col-end-4 h-auto rounded-xl shadow flex flex-col items-center p-4 bg-[#ffffff0f] backdrop-blur-md">
          <div className="w-72 flex justify-center items-center">
            <img src={Gambar} alt="" className="grayscale rounded-none" />
          </div>
          <div className="w-72 h-auto mt-2 items-center flex flex-col">
            <p className="font-vietnam text-2xl text-white text-center">
              <span className="font-bold">Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang
            </p>
            <div className="flex flex-row items-start gap-5 mt-2 w-full justify-start">
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
