import style from "./error.module.css";
import imageError from "../../utils/images/error.png"

const Error = () => {
    return (
        <>
            <div className={style.content}>
                <img src={imageError} alt="error Doggy" />
                <div className={style.message}>Error not found 404</div>
            </div>
        </>
    )
}

export default Error;
