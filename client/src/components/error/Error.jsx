import style from "./error.module.css";
import imageError from "../../utils/images/error.png"
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
                <button onClick={handleClick}>back</button>
                <div className={style.message}>Error not found 404</div>
            </div>
        </>
    )
}

export default Error;
