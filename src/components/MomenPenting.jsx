import Gambar from "../assets/muka/angkatan.png"

export default function MomenPenting () {
    return (
        <section className="w-full px-5 py-10 relative flex flex-col">
          <h1 className="text-2xl font-bold mb-5 text-center font-vietnam text-white">Momen-momen Penting</h1>

          <div
  className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 opacity-20 z-0 rounded-xl bg-cover bg-no-repeat"
  style={{ backgroundImage: `url(${Gambar})` }}
></div>
          <div className="grid grid-cols-4 grid-rows-2 gap-2 z-20">
            <div className="row-start-1 col-start-1 row-end-2 col-end-2 h-24 rounded-xl shadow">
              <div>
                <img src={Gambar} alt="" />
              </div>
              <div>
                <p><span>Telaga Pelangi - </span>Jalan-jalan ke wisata Telaga Pelangi Payang</p>
                <div>
                  <button></button>
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            <div className="row-start-2 col-start-2 row-end-3 col-end-3  h-24 rounded-xl shadow">
              <div>
                <img src={Gambar} alt="" />
              </div>
              <div>
                <p><span>Telaga Pelangi</span>Jalan-jalan ke wisata Telaga Pelangi Payang</p>
                <div>
                  <button></button>
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            <div className="row-start-1 col-start-4 row-end-2 col-end-5  h-24 rounded-xl shadow">
              <div>
                <img src={Gambar} alt="" />
              </div>
              <div>
                <p><span>Telaga Pelangi</span>Jalan-jalan ke wisata Telaga Pelangi Payang</p>
                <div>
                  <button></button>
                  <img src="" alt="" />
                </div>
              </div>
            </div>

            <div className="row-start-2 col-start-3 row-end-3 col-end-4  h-24 rounded-xl shadow">
              <div>
                <img src={Gambar} alt="" />
              </div>
              <div>
                <p><span>Telaga Pelangi</span>Jalan-jalan ke wisata Telaga Pelangi Payang</p>
                <div>
                  <button></button>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

    );
}