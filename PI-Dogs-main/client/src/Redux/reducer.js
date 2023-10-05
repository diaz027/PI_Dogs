import { CREATE_DOG, FILTER, GET_DOGS, GET_NAME, ORDER } from "./action-types";

let initialState = {
    dogs: [],//original
    newDogs: [] //copia
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case GET_NAME:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case CREATE_DOG:
            return { ...state, dogs: action.payload, newDogs: action.payload };

        case FILTER:
            const filteredDogs = state.newDogs.filter(dog =>  dog.temperament.includes(action.payload) );
            return { ...state, dogs: filteredDogs };

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


        default:
            return state;
    }

}
export default reducer;