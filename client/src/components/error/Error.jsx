import style from "./error.module.css";
import imageError from "../../utils/images/error.png"
import imageError2 from "../../utils/images/huellas.png"
import { useDispatch } from "react-redux";
import { reset } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(reset())
        navigate("/home")
    }

    return (
        <>
            <div className={style.content}>
                <img src={imageError} alt="error Doggy" />
                <div className={style.message}>
                    <h2>Error not found 404</h2>
                    <button className={style.button} onClick={handleClick}>back</button>
                </div>
                <img src={imageError2} alt="error Doggy" />
            </div>
        </>
    )
}

export default Error;
