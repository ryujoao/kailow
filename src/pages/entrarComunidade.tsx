import { Footer } from "../components/footer";
import Nav from "../components/navbar";
import style from "../style/entrarComunidade.module.css";

export default function EntrarComunidade() {
    return (
       <div className={style.bodyEntrarComunidade}>
            <Nav />

            <Footer />
       </div>
    )
}