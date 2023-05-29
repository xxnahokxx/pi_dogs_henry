import { useLocation } from "react-router-dom";
import style from "./footer.module.css"


const Footer = () => {

    const location = useLocation();
    const { pathname } = location;
    const pos = pathname === "/home" ? false : true;

    if (pos) {
        return (
            <>
                <div className={style.footer}>
                    <div >Creador por Johan Amaya.</div>
                    <div>Bootcamp Henry.</div>
                    <div>Mira mis otras creaciones</div>
                </div>
            </>
        )

     }

}

export default Footer;
