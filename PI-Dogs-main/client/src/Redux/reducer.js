import { CREATE_DOG, FILTER, FILTER_BD, GET_DOGS, GET_NAME, ORDER, ORDER_PESOS, TEMPERAMENTO } from "./action-types";

let initialState = {
    dogs: [],//original
    newDogs: [], //copia
    temperaments: [],
    tempHome: [],
    allFilteBd: []

}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case GET_NAME:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case CREATE_DOG:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case TEMPERAMENTO:
            return { ...state, temperaments: action.payload }

        case FILTER:
            return { ...state, tempHome: action.payload };
            
        case FILTER_BD:
            return { ...state, allFilteBd: action.payload }

        case ORDER:
            if (action.payload === 'A') {
                const allDogsCopy = [...state.newDogs]
                const result = allDogsCopy.sort((a, b) => a.id - b.id)
                return {
                    ...state,
                    dogs: [...result]
                }
            }
            if (action.payload === 'D') {
                const allDogsCopy = [...state.newDogs]
                const result = allDogsCopy.sort((a, b) => b.id - a.id)
                return {
                    ...state,
                    dogs: [...result]
                }
            }
        case ORDER_PESOS:
            let sortedDogs = [...state.dogs];
            sortedDogs.sort((a, b) => {
                if (action.payload === 'asc') {
                    return a.weight - b.weight
                } else {
                    return b.weight - a.weight
                }
            });


        default:
            return state;
    }

}
export default reducer;