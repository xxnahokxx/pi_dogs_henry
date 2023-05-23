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
            return <img className={style.image} src={`${link}${detallado.reference_image_id}.png`} alt={detallado.name} onError={handleImageError}/>
        } else if (!imageError2) {
            return <img className={style.image} src={`${link}${detallado.reference_image_id}.jpg`} alt={detallado.name} onError={handleImageError2} />
        } else {
            return <img className={style.image} src={detallado.image} alt={detallado.name}/>
        }
    }

    return (
        <>
            <h1>este es el Detail</h1>
            <button onClick={volver}>Back</button>
            <div className={style.content}>
                <h2>{detallado.name}</h2>
                {
                    imagen()
                }
                <div className={style.specifications}>

                    <h2 className={style.subtitle}>Temperament:</h2>

                    <p className={style.text} >{detallado.temperament}</p>

                    <h2 className={style.subtitle}>Weight:</h2>
                    <p className={style.text} >{detallado.weight}</p>
                    <h2 className={style.subtitle}>Height:</h2>
                    <p className={style.text} >{detallado.height}</p>
                    <h2 className={style.subtitle}>Life Span:</h2>
                    <p className={style.text} >{detallado.life_span}</p>
                </div>
                <span className={style.id}>#{detallado.id}</span>
            </div>


        </>
    )
}


export default Detail;
