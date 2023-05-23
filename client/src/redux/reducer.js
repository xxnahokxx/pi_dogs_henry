import { ALL_DOGS, SEARCH, RESET, DATA_ID, PESO, ALFABETO, ORIGEN, TEMPERAMENT, TEMP_FILTER, ADD_DOGGY } from "./types";

const initialState = {
    search: [],
    allDogs: [],
    dogsFilter: [],
    detail: [],
    filtros: [],
    temperaments: [],
    addDoggy: [],
};


const reducer = (state = initialState, { type, payload }) => {

    switch (type) {

        case SEARCH:
            return { ...state, search: payload };

        case ALL_DOGS:
            return { ...state, allDogs: payload };

        case RESET:
            return { ...state, search: payload, dogsFilter: payload };

        case DATA_ID:
            return { ...state, detail: payload };

        case ADD_DOGGY:
            return {...state,  addDoggy: payload}

        case PESO:

            let orden = [];

            if (state.dogsFilter.length > 0) {
                orden = [...state.dogsFilter].sort((a, b) => {
                    if (payload === "Ascendente") {
                        return a.weight.localeCompare(b.weight)
                    }
                    if (payload === "Descendente") {
                        return b.weight.localeCompare(a.weight)
                    }
                    return 0
                })
                return { ...state, dogsFilter: orden };
            }
            if (state.dogsFilter.length === 0) {
                orden = state.search.length === 0
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
            }
            break

        case ALFABETO:
            let alfa = []
            if (state.dogsFilter.length > 0) {
                alfa = [...state.dogsFilter].sort((a, b) => {
                    if (payload === "A-Z") {
                        return a.name.localeCompare(b.name)
                    }
                    if (payload === "Z-A") {
                        return b.name.localeCompare(a.name)
                    }
                    return 0
                })
                return { ...state, dogsFilter: alfa };
            }
            if (state.dogsFilter.length === 0) {
                alfa = state.search.length === 0
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
            }
            return

        case ORIGEN:
            let origen = [];
            if (state.dogsFilter.length > 0) {
                origen = [...state.dogsFilter].filter(el => {
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
                return { ...state, dogsFilter: origen }
            }
            if (state.dogsFilter.length === 0) {
                origen = state.search.length === 0
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
            }

            return

        case TEMPERAMENT:
            return { ...state, temperaments: payload }

        case TEMP_FILTER:
            console.log(payload);
            const dato = state.search.length === 0
                ? [...state.allDogs].filter(el => payload === "ALL" ? el : el.temperament && el.temperament.includes(payload))
                : [...state.search].filter(el => payload === "ALL" ? el : el.temperament && el.temperament.includes(payload))
            console.log(dato);
            return { ...state, dogsFilter: dato }

        default:
            return { ...state };
    }

}

export default reducer;
