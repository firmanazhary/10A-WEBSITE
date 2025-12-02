import { s } from "framer-motion/client";
import { studentsData } from "../data/studenstData";

export const CardProfileStudent = () => {
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

      {/* section card start */}

      <div className="grid grid-cols-4 gap-3 w-max">
        {studentsData.map((student) => (
          <div
            key={student.id}
            className=" w-[309px] h-[486px] bg-gradient bg-[radial-gradient(circle_at_bottom,_#0A66C2,_#085099,_#000000)] rounded-3xl mx-auto my-10 relative hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            {/* image */}
            <img
              src={student.photo}
              alt={student.name}
              className="w-full h-full  object-center object-cover rounded-t-3xl"
            />
            {/* text */}
            <div className="p-4 flex flex-col gap-4 absolute bottom-0">
              <h3 className="text-2xl font-bold text-white font-vietnam ">{student.name}</h3>
              <p className="text-white">{student.quote}</p>
            </div>
          </div>
        ))}
      </div>

      {/* section card end */}
    </div>
  );
};
