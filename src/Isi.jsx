import Presentasi from "./components/Presentasi.jsx";
import PotretSantri from "./components/PotretSantri.jsx";

export default function Isi() {
    return (
        <div className="bg-[linear-gradient(to_bottom_right,_#234C6A,_#03233B)] min-h-screen py-5 rounded-t-[100px] mt-20">
            <Presentasi />
            <PotretSantri />
        </div>
    );
}