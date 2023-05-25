/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation, useNavigate } from "react-router-dom";
import style from "./nav.module.css";
import Search from "../search/Search";
import { useDispatch, useSelector } from "react-redux";
import { alfabeto, origen, peso, tempFilter, temperamentos } from "../../redux/actions";
import { useEffect } from "react";
// import logo from "../../utils/images/icon_doggy.svg"

export default function Nav(props) {

    const location = useLocation();
    const dispatch = useDispatch();
    const busqueda = useSelector(state => state.search);
    const temperamento = useSelector(state => state.temperaments);
    const modoOscuro = useSelector(state => state.darkMode);


    const { pathname } = location;

    const checkHome = () => {
        if (pathname === "/" || pathname === "/home") {
            return false;
        }
        return true;
    };

    useEffect(() => {
        dispatch(peso());
        dispatch(temperamentos())
    }, [busqueda, dispatch])

    const pos = checkHome();
    const navigate = useNavigate();
    const landingPage = () => navigate("/home");
    const create = () => navigate("/dogs/create"); // volver a home
    const doggys = () => navigate("/dogs"); // volver a home
    if (pos) {
        return (

            <div className={modoOscuro ? style.darkMode : style.lightMode}>
                <div className={style.content}>
                    <div>
                        <a onClick={landingPage}>
                            <h2 className={style.titleContent}>
                                <svg className={style.logo} version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="25" height="25" viewBox="0 0 1280.000000 1232.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <metadata>
                                        Created by potrace 1.15, written by Peter Selinger 2001-2017
                                    </metadata>
                                    <g transform="translate(0.000000,1232.000000) scale(0.100000,-0.100000)"
                                        fill="#6d2727" stroke="none">
                                        <path d="M8443 12301 c-725 -171 -1292 -772 -1566 -1661 -128 -415 -184 -930
    -142 -1305 82 -741 432 -1322 951 -1583 294 -148 585 -173 859 -76 192 68 451
    220 620 364 449 381 769 968 889 1630 41 227 51 342 50 595 0 484 -68 837
    -219 1150 -230 476 -594 788 -1027 881 -119 25 -317 27 -415 5z"/>
                                        <path d="M3820 12255 c-401 -70 -779 -386 -1004 -839 -123 -247 -181 -484
    -207 -847 -12 -159 -6 -414 12 -574 103 -908 527 -1673 1166 -2101 128 -86
    340 -191 484 -239 102 -34 128 -38 241 -43 150 -6 257 8 388 50 203 65 369
    167 525 323 309 309 501 775 546 1323 18 226 -2 562 -51 825 -196 1067 -809
    1857 -1621 2091 -162 46 -328 57 -479 31z"/>
                                        <path d="M11403 8606 c-669 -110 -1251 -571 -1614 -1280 -167 -327 -251 -593
    -316 -1007 -23 -148 -27 -204 -27 -374 0 -208 12 -311 55 -479 115 -451 386
    -818 723 -981 184 -89 352 -122 541 -105 459 40 868 247 1232 623 401 415 677
    989 767 1592 23 150 39 446 32 567 -37 622 -371 1169 -836 1369 -180 77 -378
    104 -557 75z"/>
                                        <path d="M1051 8344 c-435 -73 -801 -377 -936 -779 -48 -142 -88 -345 -105
    -530 -62 -671 174 -1429 618 -1985 332 -415 760 -702 1239 -831 403 -108 765
    -6 1072 301 274 274 411 674 411 1201 0 205 -10 317 -46 507 -122 652 -492
    1276 -999 1685 -233 188 -547 361 -745 410 -156 39 -353 47 -509 21z"/>
                                        <path d="M6240 5905 c-348 -39 -692 -132 -1031 -281 -518 -229 -1018 -610
    -1341 -1024 -697 -894 -1181 -1862 -1378 -2755 -12 -55 -33 -138 -46 -185 -67
    -243 -56 -519 31 -760 140 -388 443 -689 818 -815 224 -75 559 -74 932 4 243
    50 425 108 941 299 718 267 917 318 1400 363 216 20 255 21 404 10 381 -27
    682 -110 1260 -346 512 -209 798 -322 870 -342 720 -204 1435 47 1680 590 107
    239 119 628 29 997 -88 359 -349 942 -599 1335 -705 1110 -1208 1727 -1790
    2197 -547 441 -1006 650 -1571 713 -159 18 -447 18 -609 0z"/>
                                    </g>
                                </svg>
                                Doggy Style
                            </h2>
                        </a>
                    </div>
                    <div className={style.navOptions}>
                        <ul className={style.list}>
                            <li className={style.itemList}>
                                <select className={style.select} href="#" name="alfabetico" key="alfabetico" onChange={(event) => dispatch(alfabeto(event.target.value))}>
                                    <option value="Seleccionar">Orden Alfabetico</option>
                                    <option value="A-Z">A-Z</option>
                                    <option value="Z-A">Z-A</option>
                                </select>
                            </li>
                            <li className={style.itemList}>
                                <select className={style.select} href="#" name="peso" key="peso" onChange={(event) => dispatch(peso(event.target.value))}>
                                    <option value="Seleccionar">Ordenar por Peso</option>
                                    <option value="Ascendente">Ascendente</option>
                                    <option value="Descendente">Descendente</option>
                                </select>
                            </li>
                            <li className={style.itemList}>
                                <select className={style.select} href="#" name="origen" key="origen" onChange={(event) => dispatch(origen(event.target.value))}>
                                    <option value="ALL">Origen</option>
                                    <option value="ALL">Todos</option>
                                    <option value="API">API</option>
                                    <option value="DB">DB</option>
                                </select>
                            </li>
                            <li className={style.itemList}>
                                <select className={style.select} href="#" name="origen" key="origen" onChange={(event) => dispatch(tempFilter(event.target.value))}>
                                    <option value="ALL">Selecciona Temperamento</option>
                                    <option value="ALL">Todos</option>
                                    {temperamento.map(el => <option key={el.id} value={el.names}>{el.names}</option>)}
                                </select>
                            </li>
                            <li className={style.itemList}>
                                {pathname !== "/dogs/create"
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    ? <a onClick={create}>Crear</a>
                                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                    : <a onClick={doggys}>Dogs</a>
                                }
                            </li>
                            <li className={style.modeButton}>
                                <a onClick={props.color}>
                                    {modoOscuro
                                        ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-low-fill" viewBox="0 0 16 16">
                                            <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                        </svg>
                                        : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-brightness-low" viewBox="0 0 16 16">
                                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z" />
                                        </svg>
                                        }
                                </a>
                            </li>
                        </ul>

                        <Search />
                    </div>
                </div>
            </div>
        );
    }
}

