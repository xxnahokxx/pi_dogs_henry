import React from "react";
import style from "./home.module.css"
import Doggy from "../../utils/images/fondo.png"
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    const home = () => navigate("/dogs");

    return (
        <>
            <div className={style.content}>
                <div className={style.over}></div>
                <div className={style.overlay}>
                    <img src={Doggy} alt="perrito" className={style.doggy} />
                    <div className={style.main}>
                        <h2 className={style.title}>¡Bienvenido a nuestra página de perros!</h2>
                        <button onClick={home} className={style.button}>Bienvenido</button>
                    </div>
                    <h1 className={style.logo}><svg className={style.logo} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25" viewBox="0 0 1280.000000 1232.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <metadata>
                            Created by potrace 1.15, written by Peter Selinger 2001-2017
                        </metadata>
                        <g className={style.logo} transform="translate(0.000000,1232.000000) scale(0.100000,-0.100000)"
                            fill="#b10e0e" stroke="none">
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
                    </svg> Doggy Style</h1>

                </div>
            </div>
        </>
    );
}

