import { ALL_DOGS, SEARCH, RESET, DATA_ID } from "./types";

const initialState = {
    search: [],
    allDogs: [],
    detail: [],
};

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SEARCH:
            return { ...state, search: payload };

        case ALL_DOGS:
            return { ...state, allDogs: payload };

        case RESET:
            return { ...state, search: payload };

        case DATA_ID:
            return { ...state, detail: payload };

        default:
            return { ...state };
    }

}

export default reducer;
