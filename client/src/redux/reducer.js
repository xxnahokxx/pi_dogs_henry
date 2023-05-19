import { ALL_DOGS, SEARCH, RESET, DATA_ID, PESO, ALFABETO, ORIGEN } from "./types";

const initialState = {
    search: [],
    allDogs: [],
    detail: [],
    filtros: [],
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

        case PESO:
            const orden = state.search.length === 0
                ? [...state.allDogs].sort((a, b) => {
                    if (payload === "Ascendente") {
                        return a.weight.localeCompare(b.weight)
                    }
                    if (payload === "Descendente") {
                        return b.weight.localeCompare(a.weight)
                    }
                    return 0
                })
                : [...state.search].sort((a, b) => {
                    if (payload === "Ascendente") {
                        return a.weight.localeCompare(b.weight)
                    }
                    if (payload === "Descendente") {
                        return b.weight.localeCompare(a.weight)
                    }
                    return 0
                });
            return { ...state, filtros: orden };

        case ALFABETO:
            const alfa = state.search.length === 0
                ? [...state.allDogs].sort((a, b) => {
                    if (payload === "A-Z") {
                        return a.name.localeCompare(b.name)
                    }
                    if (payload === "Z-A") {
                        return b.name.localeCompare(a.name)
                    }
                    return 0
                })
                : [...state.search].sort((a, b) => {
                    if (payload === "A-Z") {
                        return a.name.localeCompare(b.name)
                    }
                    if (payload === "Z-A") {
                        return b.name.localeCompare(a.name)
                    }
                    return 0
                });
            return { ...state, filtros: alfa };

        case ORIGEN:
            const origen = state.search.length === 0
                ? [...state.allDogs].filter(el => {
                    if (payload === "API") {
                        if (el.id < 300) {
                            return el
                        }
                    } else if (payload === "DB") {
                        if (el.id >= 300) {
                            return el
                        }
                    }
                    return 0
                })
                : [...state.search].filter(el => {
                    if (payload === "API") {
                        if (el.id < 300) {
                            return el
                        }
                    } else if (payload === "DB") {
                        if (el.id >= 300) {
                            return el
                        }
                    }
                    return 0
                })
            return { ...state, filtros: origen }

        default:
            return { ...state };
    }

}

export default reducer;
