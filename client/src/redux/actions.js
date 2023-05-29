import { SEARCH, ALL_DOGS, RESET, DATA_ID, PESO, ALFABETO, ORIGEN, TEMPERAMENT, TEMP_FILTER, ADD_DOGGY, DARK_MODE } from "./types";
import axios from "axios";
const endpoint = "https://serverpidogs-production.up.railway.app";


export function allDogs() {
    return function (dispatch) {
        return axios.get(`${endpoint}/dogs`)
            .then((response) => {
                dispatch({
                    type: ALL_DOGS,
                    payload: response.data,
                })
            })
            .catch(error => {
                console.log("Error:", error);
            });
    };
}

export const temperamentos = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/temperaments`)
            return dispatch({
                type: TEMPERAMENT,
                payload: data,
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const getNameDogs = (name) => {
    // console.log(name);
    return function (dispatch) {
        return axios.get(`${endpoint}/dogs/name?search=${name}`)
            .then(({ data }) => {
                // console.log(data);
                dispatch({
                    type: SEARCH,
                    payload: data,
                });
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
}

export const getRazaId = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${endpoint}/dogs/${id}`);
            console.log(data);
            return dispatch({
                type: DATA_ID,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }

}

export const postDogs = (doggy) => {

    console.log(doggy);
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`${endpoint}/dogs`, doggy);
            return dispatch({
                type: ADD_DOGGY,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const reset = () => {
    return {
        type: RESET,
        payload: [],
    }
}

export const peso = (option) => {
    return {
        type: PESO,
        payload: option,
    }
}

export const alfabeto = (option) => {
    console.log(option);
    return {
        type: ALFABETO,
        payload: option,
    }
}

export const origen = (option) => {
    console.log(option);
    return {
        type: ORIGEN,
        payload: option,
    }
}

export const tempFilter = (option) => {
    console.log(option);
    return {
        type: TEMP_FILTER,
        payload: option,
    }
}

export const darkMode = () => {
    return {
        type: DARK_MODE,
    }
}




// con promesas, no funciona aun
// return (dispatch) => {
//     axios
//         .get(`${endpoint}/dogs/name?search=${name}`)
//         .then(({ data }) => {
//             console.log(data);
//             dispatch({
//                 type: SEARCH,
//                 payload: data,
//             });
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };
