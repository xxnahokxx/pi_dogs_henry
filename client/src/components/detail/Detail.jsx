import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRazaId } from "../../redux/actions";
import style from "./detail.module.css";

const Detail = () => {

    const link = "https://cdn2.thedogapi.com/images/";

    const [imageError, setImageError] = useState(false);
    const [imageError2, setImageError2] = useState(false);
    const dispatch = useDispatch();
    const detallado = useSelector(state => state.detail);
    const modoOscuro = useSelector(state => state.darkMode);

    const { id } = useParams();

    const navigate = useNavigate();
    const volver = () => navigate(-1);

    useEffect(() => {
        dispatch(getRazaId(id));
    }, [dispatch, id])

    const handleImageError = () => {
        setImageError(true);
    }

    const handleImageError2 = () => {
        setImageError2(true);
    }

    const imagen = () => {
        if (!imageError) {
            return <img className={style.image} src={`${link}${detallado.reference_image_id}.png`} alt={detallado.name} onError={handleImageError} />
        } else if (!imageError2) {
            return <img className={style.image} src={`${link}${detallado.reference_image_id}.jpg`} alt={detallado.name} onError={handleImageError2} />
        } else {
            return <img className={style.image} src={detallado.image} alt={detallado.name} />
        }
    }

    return (
        <>
            <div className={modoOscuro ? style.contentDark : style.contentLight}>
                <button className={style.button} onClick={volver}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
                    <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z" />
                </svg></button>
                <div className={style.nameImage}>
                    <h2>{detallado.name}</h2>
                    {
                        imagen()
                    }
                </div>
                <div className={style.specifications}>

                    <h2 className={style.subtitle}>Temperament:</h2>

                    <p className={style.text} >{detallado.temperament}</p>

                    <h2 className={style.subtitle}>Weight:</h2>
                    <p className={style.text} >{detallado.weight} Kg</p>
                    <h2 className={style.subtitle}>Height:</h2>
                    <p className={style.text} >{detallado.height} cm</p>
                    <h2 className={style.subtitle}>Life Span:</h2>
                    <p className={style.text} >{detallado.life_span} </p>
                </div>
                <span className={style.id}>#{detallado.id}</span>
            </div>
        </>
    )
}


export default Detail;
