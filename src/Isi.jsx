import MomenPenting from "./components/MomenPenting.jsx";
import HomeroomTeacher from "./components/HomeroomTeacher.jsx";
import { CardProfileStudent } from "./components/CardProfileStudent.jsx";

export default function Isi() {
    return (
        <div className="">
            <MomenPenting />
            <CardProfileStudent/>
            <HomeroomTeacher />
        </div>
    );
}