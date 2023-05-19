import { SEARCH, ALL_DOGS, RESET, DATA_ID, PESO, ALFABETO, ORIGEN } from "./types";
import axios from "axios";
const endpoint = "http://localhost:3001";


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

export const postDogs = () => {

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
