import { useRef, useEffect } from "react";
import { studentsData } from "../data/studenstData";

export const CardProfileStudent = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  // scroll otomatis ke paling bawah saat render
  useEffect(() => {
    setTimeout(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 200);
  }, []);

  // scroll per row dengan infinite loop
  const scrollByAmount = (direction) => {
    const container = scrollRef.current;
    if (!container || !cardRef.current) return;

    const cardHeight = cardRef.current.offsetHeight;
    const gap = 12;
    const scrollStep = cardHeight + gap;
    const maxScroll = container.scrollHeight - container.clientHeight;

    if (direction === "down") {
      if (container.scrollTop >= maxScroll) {
        // jika sudah di bawah → balik ke atas
        container.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ top: scrollStep, behavior: "smooth" });
      }
    } else {
      if (container.scrollTop <= 0) {
        // jika sudah di atas → balik ke bawah
        container.scrollTo({ top: maxScroll, behavior: "smooth" });
      } else {
        container.scrollBy({ top: -scrollStep, behavior: "smooth" });
      }
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M6 9l6 6l6-6" />
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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );

  return (
    <div className="bg-black max-h-[110vh] overflow-x-hidden overflow-y-visible relative flex flex-col items-center">

      {/* background decorations */}
      <div className="bg-[#FF9D00]/60 blur-3xl absolute top-[100px] -left-[110px] rounded-full w-[306px] h-[306px]" />
      <div className="bg-[#FF9D00]/60 blur-3xl absolute bottom-[70px] -right-[110px] rounded-full w-[306px] h-[306px]" />

      {/* heading */}
      <div className="text-center font-birthstone text-white bg-black/20 backdrop-blur-md absolute z-10 w-full pt-[100px] pointer-events-none">
        <h2 className="text-[110px]">Kenalan Dengan</h2>
        <h2 className="text-[110px] -mt-10">
          The{" "}
          <span className="font-vietnam font-extrabold uppercase">
            Zenthorians
          </span>
        </h2>
      </div>

      {/* scroll buttons */}
      <div className="flex flex-col absolute right-10 bottom-[300px] z-20">
        <button
          onClick={() => scrollByAmount("up")}
          className="mb-4 w-[48px] h-[48px] border flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20"
        >
          {btnUp}
        </button>
        <button
          onClick={() => scrollByAmount("down")}
          className="w-[48px] h-[48px] border flex items-center justify-center bg-white/10 text-white rounded-full hover:bg-white/20"
        >
          {btnDown}
        </button>
      </div>

      {/* container cards */}
      <div
        ref={scrollRef}
        className="grid grid-cols-4 gap-3 w-max overflow-y-hidden max-h-[1000px] scroll-smooth relative pt-[250px]"
      >
        {studentsData.map((student, index) => (
          <div
            key={student.id}
            ref={index === 0 ? cardRef : null}
            className="w-[309px] h-[486px] bg-[radial-gradient(circle_at_bottom,_#0A66C2,_#085099,_#000000)] rounded-3xl mx-auto my-10 relative flex flex-col snap-start"
          >
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-full object-center object-cover rounded-t-3xl"
            />
            <div className="p-4 flex flex-col gap-4 absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent rounded-b-3xl">
              <h3 className="text-2xl font-bold text-white font-vietnam">
                {student.name}
              </h3>
              <p className="text-white text-sm font-vietnam -mt-1">
                {student.quote}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
