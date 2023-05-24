import { useRef, useState } from "react";
import style from "./formCreate.module.css";
import { useSelector, useDispatch } from "react-redux"
import { postDogs } from "../../redux/actions";
import validation from "./validation";
import Card from "../card/CardPreview";
import Swal from "sweetalert2";
import "./modal.css";
import { useNavigate } from "react-router-dom";

const FormCreate = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();



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

    const handleShowAlert = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: '¿los datos ingresados son correctos?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#9beb85',
            cancelButtonColor: '#cb7b14',
            confirmButtonText: 'Sí, Crealo!',
            background: '#51aff7',
            customClass: {
                container: style['container'],
                confirmButton: style['btn-confirm'],
            },
        }).then((result) => {
            if (result.isConfirmed) {

                let data = {
                    name: dataDoggy.name,
                    image: dataDoggy.image,
                    height: `${dataDoggy.heightMin} - ${dataDoggy.heightMax}`,
                    weight: `${dataDoggy.weightMin} - ${dataDoggy.weightMax}`,
                    life_span: `${dataDoggy.lifeMin} - ${dataDoggy.lifeMax}`,
                    temperament: dataDoggy.temperament,
                };

                dispatch(postDogs(data));
                Swal.fire({
                    title: "¡Bien!",
                    text: `se a creado a ${dataDoggy.name} satisfactoriamente...`,
                    icon: "success",
                    background: "#51aff7",
                    confirmButtonColor: '#37ff00',
                    customClass: {
                        container: style['container'],
                        confirmButton: style['btn-confirm'],
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/dogs");
                    }
                });


                formRef.current.reset();

            } else if (result.isDenied) {
            }
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();


        const arrErrors = Object.values(errorDataDoggy).length;
        if (arrErrors === 0) {
            handleShowAlert();
        }

    }


    return (
        <>
            <div className={style.content}>

                <div >
                    <div>
                        <h1 className={style.titulo} style={{ textAlign: "center" }}>Describenos el perrito que deseas agregar</h1>
                    </div>
                    <form className={style.formulario} ref={formRef} action="post" onSubmit={handleSubmit}>
                        <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Name:
                            </label>
                            <input name="name" type="text" onChange={handleChanges} />
                            <span className={style.error}>{errorDataDoggy.name}</span>
                        </div>

                        { !errorDataDoggy.name && <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">URL Image:
                            </label>
                            <input name="image" type="text" onChange={handleChanges} />
                            <span className={style.error}>{errorDataDoggy.image}</span>
                        </div>}

                        { !errorDataDoggy.image && <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Height:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="minimo" name="heightMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="maximo" name="heightMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.heightMin}</span>
                            <span className={style.error}>{errorDataDoggy.heightMax}</span>
                        </div>}

                        { !errorDataDoggy.heightMin && !errorDataDoggy.heightMax && <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">weight:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="Minimo" name="weightMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="Maximo" name="weightMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.weightMin}</span>
                            <span className={style.error}>{errorDataDoggy.weightMax}</span>
                        </div>}

                        {!errorDataDoggy.weightMin && !errorDataDoggy.weightMax && <div className={style.seccion}>
                            <label className={style.descripcion} htmlFor="">Life span:
                            </label>
                            <div className={style.rangoGrupo}>
                                <input placeholder="Minimo" name="lifeMin" className={style.rango} type="number" onChange={handleChanges} />
                                <input placeholder="Maximo" name="lifeMax" className={style.rango} type="number" onChange={handleChanges} />
                            </div>
                            <span className={style.error}>{errorDataDoggy.lifeMin}</span>
                            <span className={style.error}>{errorDataDoggy.lifeMax}</span>
                        </div>}

                        { !errorDataDoggy.lifeMin && !errorDataDoggy.lifeMax && <div className={style.seccion}>
                            <label value="Select">
                                Selecciona el temperamento:
                            </label>
                            <select name="temperament" id="temperament" multiple onChange={handleChanges}>
                                {temperamentos.map(el => <option key={el.id} value={el.id}>{el.names}</option>)}
                            </select>
                            <span className={style.error}>{errorDataDoggy.temperament}</span>
                            <span>si deseas seleccionar mas de un temperamento, manten oprimido CTRL al hacer click</span>
                        </div>}
                        { !errorDataDoggy.temperament && <button className={style.button} type="submit">Crear Doggy</button>}
                    </form>

                </div>
                <div>
                    <Card name={dataDoggy.name} image={dataDoggy.image} weight={`${dataDoggy.weightMin} - ${dataDoggy.weightMax}`} temperament={dataDoggy.temperament}></Card>
                </div>
            </div>
        </>
    )
}

export default FormCreate;
