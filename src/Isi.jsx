import MomenPenting from "./components/MomenPenting.jsx";
import HomeroomTeacher from "./components/HomeroomTeacher.jsx";
import { CardProfileStudent } from "./components/CardProfileStudent.jsx";
import Footer from "./components/footer.jsx";

export default function Isi() {
  return (
    <div className="">
      <MomenPenting />
      <CardProfileStudent />
      <HomeroomTeacher />
      <Footer />
    </div>
  );
}
