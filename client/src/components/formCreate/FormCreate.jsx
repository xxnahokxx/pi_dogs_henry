import { useEffect, useRef, useState } from "react";
import style from "./formCreate.module.css";
import { useSelector, useDispatch } from "react-redux"
import { postDogs } from "../../redux/actions";
import validation from "./validation";
import Card from "../card/CardPreview";

const FormCreate = () => {

    const dispatch = useDispatch();


    const formRef = useRef(null);

    const temperamentos = useSelector(state => state.temperaments);

    const [dataDoggy, setDataDoggy] = useState({
        name: "",
        image: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeMin: "",
        lifeMax: "",
        temperament: [],
    })

    const [errorDataDoggy, setErrorDataDoggy] = useState({
        name: "",
        image: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        lifeMin: "",
        lifeMax: "",
        temperament: "",
    })

    const handleChanges = (event) => {
        const { value, name } = event.target
        const temperament = Array.from(event.target.querySelectorAll("select[name='temperament'] option:checked")).map(option => option.value);
        setDataDoggy({ ...dataDoggy, [name]: value, temperament: temperament })
        setErrorDataDoggy(validation({ ...dataDoggy, [name]: value }));
    }

    console.log(dataDoggy.temperament);

    const handleSubmit = (event) => {
        event.preventDefault();

        let data = {
            name: dataDoggy.name,
            image: dataDoggy.image,
            height: `${dataDoggy.heightMin} - ${dataDoggy.heightMax}`,
            weight: `${dataDoggy.weightMin} - ${dataDoggy.weightMax}`,
            life_span: `${dataDoggy.lifeMin} - ${dataDoggy.lifeMax}`,
            temperament: dataDoggy.temperament,
        };

        const arrErrors = Object.values(errorDataDoggy).length;

        if (arrErrors === 0) {
            dispatch(postDogs(data));
            formRef.current.reset();
        }

    }

    console.log(dataDoggy);

    return (
        <>
            <div className={style.content}>

                <div >
                    <div>
                        <h1 className={style.titulo} style={{ textAlign: "center" }}>Describenos el perrito que deseas integrar</h1>
                    </div>
                    <form className={style.formulario} ref={formRef} action="post" onSubmit={handleSubmit}>
                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Name:
                            </label>
                            <input name="name" type="text" onChange={handleChanges} />
                            <span className={style.error}>{errorDataDoggy.name}</span>
                        </div>

                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">URL Image:
                            </label>
                            <input name="image" type="text" onChange={handleChanges} />
                            <span className={style.error}>{errorDataDoggy.image}</span>
                        </div>

                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Height:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="minimo" name="heightMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="maximo" name="heightMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.heightMin}</span>
                            <span className={style.error}>{errorDataDoggy.heightMax}</span>
                        </div>

                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">weight:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="Minimo" name="weightMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="Maximo" name="weightMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.weightMin}</span>
                            <span className={style.error}>{errorDataDoggy.weightMax}</span>
                        </div>
                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Life span:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="Minimo" name="lifeMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="Maximo" name="lifeMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.lifeMin}</span>
                            <span className={style.error}>{errorDataDoggy.lifeMax}</span>
                        </div>

                        <div className={style.seccion}>
                            <label value="Select">
                                Selecciona el temperamento:
                            </label>
                            <select name="temperament" id="temperament" multiple  onChange={handleChanges}>
                                {temperamentos.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                            </select>
                        </div>
                        <button className={style.button} type="submit">Crear Doggy</button>
                    </form>

                </div>
                <Card name={dataDoggy.name} image={dataDoggy.image} weight={`${dataDoggy.weightMin} - ${dataDoggy.weightMax}`} temperament={dataDoggy.temperament}></Card>
            </div>
        </>
    )
}

export default FormCreate;
