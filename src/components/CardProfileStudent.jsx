import { useRef } from "react";
import { studentsData } from "../data/studenstData";

export const CardProfileStudent = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    const scrollStep = 580; // Sesuaikan dengan tinggi 1 baris kartu

    if (container) {
      container.scrollBy({
        top: direction === "down" ? scrollStep : -scrollStep,
        behavior: "smooth",
      });
    }
  };

  const btnDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down w-8 h-8"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );

  const btnUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up w-8 h-8"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </svg>
  );

  return (
    <div className="bg-black p-4 max-h-[110vh] overflow-hidden relative flex flex-col items-center">
      {/* hiasan latar belakang start*/}
      <div className="bg-[#FF9D00]/60 blur-3xl absolute top-[100px] -left-[110px] rounded-full w-[306px] h-[306px]"></div>
      <div className="bg-[#FF9D00]/60 blur-3xl absolute bottom-[70px] -right-[110px] rounded-full w-[306px] h-[306px]"></div>
      {/* hiasan latar belakang end */}

      {/* text heading start */}
      <div className="text-center font-birthstone text-white mt-[100px]">
        <h2 className="text-[110px]">Kenalan Dengan</h2>
        <h2 className="text-[110px] -mt-10">
          The{" "}
          <span className="font-vietnam font-extrabold uppercase">
            Zenthorians
          </span>
        </h2>
      </div>
      {/* text heading end */}
      {/* scroll button card */}
      <div className=" flex flex-col absolute right-10 bottom-[300px]">
        {/* Tombol scroll atas */}
        <button
          onClick={() => scrollByAmount("up")}
          className="z-10 mb-4  w-[48px] h-[48px] border flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20"
        >
          {btnUp}
        </button>
        {/* Tombol scroll bawah */}
        <button
          onClick={() => scrollByAmount("down")}
          className="z-10   w-[48px] h-[48px] border flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20"
        >
          {btnDown}
        </button>
      </div>

      {/* section card start */}

      <div
        ref={scrollRef}
        className="grid grid-cols-4 gap-3 w-max overflow-y-hidden  max-h-[600px] scroll-smooth relative"
      >
        {studentsData.map((student) => (
          <div
            key={student.id}
            className=" w-[309px] h-[486px] bg-gradient bg-[radial-gradient(circle_at_bottom,_#0A66C2,_#085099,_#000000)] rounded-3xl mx-auto my-10 relative  flex flex-col snap-start"
          >
            {/* image */}
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-full  object-center object-cover rounded-t-3xl"
            />
            {/* text */}
            <div className="p-4 flex flex-col gap-4 absolute bottom-0">
              <h3 className="text-2xl font-bold text-white font-vietnam ">
                {student.name}
              </h3>
              <p className="text-white text-sm font-vietnam -mt-4">
                {student.quote}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* section card end */}
    </div>
  );
};
