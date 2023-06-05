import { ALL_DOGS, SEARCH, RESET, DATA_ID, PESO, ALFABETO, ORIGEN, TEMPERAMENT, TEMP_FILTER, ADD_DOGGY, DARK_MODE, ERROR, WRITTEN } from "./types";

const initialState = {
    search: [],
    allDogs: [],
    dogsFilter: [],
    detail: [],
    filtros: [],
    temperaments: [],
    addDoggy: [],
    darkMode: false,
    error: false,
    escrito: "",
};

const sortByWeight = (dogs, sortOrder) => {
    return [...dogs].sort((a, b) => {
        if (sortOrder === "Ascendente") {
            return a.weight.localeCompare(b.weight)
        }
        if (sortOrder === "Descendente") {
            return b.weight.localeCompare(a.weight)
        }
        return 0
    })
}

const sortByName = (dogs, sortOrder) => {
    return [...dogs].sort((a, b) => {
        if (sortOrder === "A-Z") {
            return a.name.localeCompare(b.name)
        }
        if (sortOrder === "Z-A") {
            return b.name.localeCompare(a.name)
        }
        return 0
    })
}

const filterByOrigin = (dogs, origin) => {
    return dogs.filter(el => {
        if (origin === "API") {
            if (el.id < 300) {
                return el
            }
        } else if (origin === "DB") {
            if (el.id >= 300) {
                return el
            }
        }
        return 0
    })
}

const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SEARCH:
            if (payload.length > 0) {
                return { ...state, search: payload, error: false, dogsFilter: payload };
            } else {
                return { ...state, search: payload };
            }

        case ERROR:
            return { ...state, error: payload };

        case ALL_DOGS:
            return { ...state, allDogs: payload, dogsFilter: payload };

        case RESET:
            return { ...state, search: payload, dogsFilter: payload, error: false, escrito: "" };

        case DATA_ID:
            return { ...state, detail: payload };

        case WRITTEN:
            return { ...state, escrito: payload }

        case ADD_DOGGY:
            return { ...state, addDoggy: payload }

        case DARK_MODE:
            return { ...state, darkMode: !state.darkMode }

        case PESO:

            let orden = [];

            if (state.search.length > 0) {
                orden = sortByWeight(state.search, payload);
                return { ...state, search: orden };
            }

            if (state.search.length === 0) {
                orden = sortByWeight(state.dogsFilter, payload);
                return { ...state, dogsFilter  : orden };
            }

            break

        case ALFABETO:
            let alfa = []

            if (state.search.length === 0) {
                 alfa =sortByName(state.dogsFilter, payload)
                return { ...state, dogsFilter: alfa };
            }
            if (state.search.length > 0) {
                alfa = sortByName(state.search, payload);
                return { ...state, search: alfa };
            }

        return

        case ORIGEN:
            let origen = [];
            origen = state.search.length === 0
                ? filterByOrigin([...state.allDogs], payload)
                : filterByOrigin([...state.search], payload);
            return { ...state, dogsFilter: origen }

        case TEMPERAMENT:
            return { ...state, temperaments: payload }

        case TEMP_FILTER:
            let dato = [];

            if (state.search.length === 0) {
                dato = [...state.allDogs].filter(el => payload === "ALL" ? el : el.temperament && el.temperament.includes(payload))
                return { ...state, dogsFilter: dato }
            }
            if (state.search.length > 0) {
                dato = [...state.dogsFilter].filter(el => payload === "ALL" ? el : el.temperament && el.temperament.includes(payload))
                return { ...state, search: dato }
            }

            return

        default:
            return { ...state };
    }

}

export default reducer;

