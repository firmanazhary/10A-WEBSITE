import gambar from "../assets/story/lulus.webp";
import gambar2 from "../assets/story/pelangi.webp";
import gambar3 from "../assets/story/ramean.webp";
import gambar4 from "../assets/story/munfest.webp";
import "../index.css";

export default function HeroSectionPart2() {
  return (
    <section className="h-screen relative z-20">
      <div className="pl-[62px] pt-[62px] pb-[62px]">
        <h1 className="font-vietnam text-white font-black text-[9vh]">
          WE ARE
        </h1>
      </div>

      {/* text & text bayangan */}
      <div>
        <div className="font-vietnam text-[195px] text-white font-black flex justify-between items-center px-[62px] -mt-[30px]">
          <h1 className="text-[27vh] text-trim">ZEN</h1>
          <svg
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0078 0C57.7068 0 58.4028 0.0130809 59.0957 0.0380859L60.8906 34.876L76.7754 3.5293C78.621 4.21316 80.4216 4.99028 82.1719 5.85449L69.5635 38.752L97.0029 16.417C98.3928 17.7872 99.7131 19.2283 100.958 20.7344L75.917 45.833L110.241 36.5752C110.94 38.3828 111.55 40.2349 112.065 42.126L78.8506 54.8965L114.001 60.458C113.894 62.4222 113.689 64.36 113.391 66.2666L77.8584 64.373L107.645 83.7578C106.742 85.4931 105.755 87.1765 104.687 88.8018L73.1113 72.626L92.3359 102.293C90.8046 103.506 89.21 104.642 87.5576 105.694L65.4297 78.2275L70.9209 112.867C69.0294 113.343 67.1007 113.724 65.1396 114.005L56.1436 80.208L47.2158 113.742C45.2526 113.402 43.3236 112.961 41.4346 112.425L46.8564 78.2275L25.3242 104.953C23.6684 103.842 22.0733 102.647 20.5459 101.373L39.1758 72.626L8.89844 88.1367C7.82476 86.4532 6.83638 84.7097 5.93945 82.9121L34.4287 64.373L0.609375 66.1758C0.304571 64.2107 0.100448 62.2124 0 60.1865L33.4365 54.8965L1.78809 42.7285C2.2979 40.7758 2.90716 38.8636 3.61133 36.998L36.3701 45.833L12.2832 21.6914C13.5235 20.1238 14.8431 18.6223 16.2373 17.1943L42.7227 38.752L30.3975 6.59277C32.1444 5.66715 33.9456 4.831 35.7939 4.08789L51.3965 34.876L53.1855 0.126953C54.4488 0.0431208 55.7234 1.56452e-08 57.0078 0Z"
              fill="#ADCCEB"
            />
          </svg>

          <h1 className="text-[27vh] text-trim">THORIA</h1>
        </div>

        {/* text bayangan */}
        <div
          className="font-vietnam text-[195px] text-white font-black flex justify-between items-center px-[62px] 
            opacity-30 transform scale-y-[-1] blur-[1px]"
        >
          <h1 className="text-[27vh] text-trim">ZEN</h1>
          <svg
            width="114"
            height="114"
            viewBox="0 0 114 114"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.0078 0C57.7068 0 58.4028 0.0130809 59.0957 0.0380859L60.8906 34.876L76.7754 3.5293C78.621 4.21316 80.4216 4.99028 82.1719 5.85449L69.5635 38.752L97.0029 16.417C98.3928 17.7872 99.7131 19.2283 100.958 20.7344L75.917 45.833L110.241 36.5752C110.94 38.3828 111.55 40.2349 112.065 42.126L78.8506 54.8965L114.001 60.458C113.894 62.4222 113.689 64.36 113.391 66.2666L77.8584 64.373L107.645 83.7578C106.742 85.4931 105.755 87.1765 104.687 88.8018L73.1113 72.626L92.3359 102.293C90.8046 103.506 89.21 104.642 87.5576 105.694L65.4297 78.2275L70.9209 112.867C69.0294 113.343 67.1007 113.724 65.1396 114.005L56.1436 80.208L47.2158 113.742C45.2526 113.402 43.3236 112.961 41.4346 112.425L46.8564 78.2275L25.3242 104.953C23.6684 103.842 22.0733 102.647 20.5459 101.373L39.1758 72.626L8.89844 88.1367C7.82476 86.4532 6.83638 84.7097 5.93945 82.9121L34.4287 64.373L0.609375 66.1758C0.304571 64.2107 0.100448 62.2124 0 60.1865L33.4365 54.8965L1.78809 42.7285C2.2979 40.7758 2.90716 38.8636 3.61133 36.998L36.3701 45.833L12.2832 21.6914C13.5235 20.1238 14.8431 18.6223 16.2373 17.1943L42.7227 38.752L30.3975 6.59277C32.1444 5.66715 33.9456 4.831 35.7939 4.08789L51.3965 34.876L53.1855 0.126953C54.4488 0.0431208 55.7234 1.56452e-08 57.0078 0Z"
              fill="#ADCCEB"
            />
          </svg>

          <h1 className="text-[27vh] text-trim">THORIA</h1>
        </div>
      </div>

      {/* foto bersama */}
      <img
        src={gambar}
        alt="img"
        className="absolute -bottom-[140px] -left-20 inline-block w-[380px] h-[480px] object-cover rounded-[30px] rotate-12"
      />
      <img
        src={gambar2}
        alt="img"
        className="absolute -bottom-[140px] left-[200px] inline-block w-[410px] h-[500px] object-cover rounded-[30px]"
      />
      <img
        src={gambar4}
        alt="img"
        className="z-[5] absolute -bottom-[180px] left-[550px] inline-block w-[420px] h-[500px] object-cover rounded-[30px] -rotate-6"
      />
      <img
        src={gambar3}
        alt="img"
        className="absolute -bottom-[140px] left-[900px] inline-block w-[380px] h-[480px] object-cover rounded-[30px] rotate-12"
      />
      <div className="inline-block -right-7 absolute bg-white -rotate-[9deg] w-[380px] h-[430px] rounded-[30px]">
        <p className="w-[200px] pb-5 text-[18px] font-vietnam font-bold">Don’t leave quickly! There’s lot more to explore, go scroll and</p>
        <h1 className="font-vietnam font-black text-[30px] text-[#0A66C2] w-[220px]">EXPLORE OUR STORY ↓</h1>
      </div>
    </section>
  );
}
