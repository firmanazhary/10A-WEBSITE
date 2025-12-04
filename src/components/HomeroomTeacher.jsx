import bgSection from '../assets/story/bghomeroom.webp';
import ustadz from "../assets/story/ustd.webp"


export default function HomeroomTeacher() {
    return (
        <section>
          <div style={{
                backgroundImage: `url(${bgSection})`,
                backgroundPosition: "-57.542px -377.992px",
                backgroundSize: "146.635% 165.417%",
                backgroundRepeat: "no-repeat",
          }} className='w-[94vw] h-[110vh] flex flex-row py-10 px-10 gap-10 relative rounded-[50px] mx-auto my-20'>
              <div className="absolute inset-0 bg-[#0A66C2]/50 opacity-40 rounded-[50px]"></div>
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
            <div className='relative min-h-[500px] w-1/2 flex flex-col justify-start items-end gap-44 px-6'>
              <div className='text-right w-[400px]'>
                <p className='text-white font-bold font-vietnam text-[100px] leading-none break-words'>FIRMAN</p>
              </div>

              <div className='rotate-90 -mr-40'>
                <p className='text-white font-bold font-vietnam text-[90px] leading-none'>AZHARY</p>
              </div>

              <div className='flex flex-row justify-end items-center gap-6 w-full'>
                <div className="flex gap-2 flex-row justify-end items-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
                </div>
                <button>
                  <p className='text-white font-vietnam font-bold text-lg'>PORTFOLIO</p>
                </button>
              </div>
            </div>

          </div>

            
        </section>

    );
}