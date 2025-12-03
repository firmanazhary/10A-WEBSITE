import bgSection from '../assets/story/bghomeroom.webp';
import ustadz from "../assets/story/ustd.webp"


export default function HomeroomTeacher() {
    return (
        <section className=''>
<div style={{
      backgroundImage: `url(${bgSection})`,
      backgroundColor: "lightgray",
      backgroundPosition: "-57.542px -377.992px",
      backgroundSize: "146.635% 165.417%",
      backgroundRepeat: "no-repeat",
}} className='w-[94vw] h-[110vh] flex flex-row py-10 px-10 gap-10 relative rounded-lg mx-auto my-20'>
     <div className="absolute inset-0 bg-[#0A66C2]/50 opacity-40 rounded-3xl"></div>
<div className='relative h-full w-1/2 flex flex-col justify-center items-start gap-5 px-6'>
    <div className='h-1/3 w-full'>
      <p className='font-birthstone font-bold text-white text-4xl'>pelita penerang</p>
      <p className='font-birthstone font-bold text-white text-5xl'>
        our <span className='font-vietnam'>HOMEROOM TEACHER</span>
      </p>
    </div>

    <div className='h-1/3 w-full flex flex-row gap-5'>
      <div className='w-60 h-48 bg-slate-400'></div>
      <div className='w-60 h-48 bg-slate-400'></div>
    </div>

    <div className='h-1/3 w-full'>
      <p className='font-vietnam text-white text-sm  tracking-wider'>Hello! I am a Software Engineering student at Politeknik IDN, where I am deeply passionate about learning new technologies and enhancing my programming skills. I also work as an IT teacher, guiding students in web development and other IT-related subjects. As a Web Developer, I create functional and visually appealing websites. Alongside these roles, I take on freelance projects to further expand my experience in the tech industry</p>
    </div>
  </div>

  <div>
    <img src="" alt="" />
  </div>

  <div>
    <div>
      <p>FIRMAN</p>
    </div>

    <div>
      <p>AZHARY</p>
    </div>

    <div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <button></button>
    </div>
  </div>
</div>

  
</section>

    );
}