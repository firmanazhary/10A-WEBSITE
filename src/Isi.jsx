import Presentasi from "./components/Presentasi.jsx";
import HomeroomTeacher from "./components/HomeroomTeacher.jsx";

export default function Isi() {
    return (
        <div className="bg-[linear-gradient(to_bottom_right,_#234C6A,_#03233B)] min-h-screen py-5 rounded-t-[40px] lg:rounded-t-[100px] mt-20">
            <Presentasi />
            <HomeroomTeacher />
        </div>
    );
}