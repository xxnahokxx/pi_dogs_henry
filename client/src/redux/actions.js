// import { ADD_FAVORITE, DELETE_FAVORITE, LOG_OUT, LOG_IN, FILTER, ORDER } from "./types";
import axios from "axios";
const endpoint = "http://localhost:3001/";

export const getNameDogs = (name) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${endpoint}/dogs/name`)
        } catch (error) {
            console.log(error.message);
        }
    }
}
