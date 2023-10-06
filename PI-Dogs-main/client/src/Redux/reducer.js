import { CREATE_DOG, FILTER, FILTER_API, FILTER_BD, GET_DOGS, GET_NAME, ORDER, ORDER_PESOS, TEMPERAMENTO } from "./action-types";

let initialState = {
    dogs: [],//original
    newDogs: [], //copia
    temperaments: [],
    tempHome: [],
    allFilteBd: [],
    allfilteAPI:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case GET_NAME:
            return { ...state, dogs: action.payload, newDogs: action.payload };
        case CREATE_DOG:
            return { ...state, dogs:[...state.dogs, action.payload], newDogs: [...state.newDogs,action.payload] };

        case TEMPERAMENTO:
            return { ...state, temperaments: action.payload }

        // aca filtro por temperaento
        case FILTER:
            const copyDogs = [...state.dogs]
            const response = [...copyDogs.filter((dog) => {
                return dog.temperament &&  dog.temperament.split(',').map(item => item.trim()).includes(action.payload);
              })]
            return {
                ...state,
                newDogs: response
            }

        case FILTER_BD:
            return { ...state, allFilteBd: action.payload }

            case FILTER_API:
                return { ...state, allfilteAPI: action.payload }

        case ORDER:
            if (action.payload === 'A') {
                const allDogsCopy = [...state.newDogs]
                const result = allDogsCopy.sort((a, b) => a.id - b.id)
                return {
                    ...state,
                    newDogs: [...result]
                }
            }
            if (action.payload === 'D') {
                const allDogsCopy = [...state.newDogs]
                const result = allDogsCopy.sort((a, b) => b.id - a.id)
                return {
                    ...state,
                    newDogs: [...result]
                }
            }
        case ORDER_PESOS:
            let ordenPeso;
            if(action.payload === "PesoMax"){
            ordenPeso = [...state.newDogs].sort((a, b) => {
            const weightA = parseInt(a.weight.metric.split(' - ')[1]);
            const weightB = parseInt(b.weight.metric.split(' - ')[1]);
            return weightB - weightA;
            });
        } else if (action.payload === "PesoMin"){
            ordenPeso = [...state.newDogs].sort((a, b) => {
            const weightA = parseInt(a.weight.metric.split(' - ')[1]);
            const weightB = parseInt(b.weight.metric.split(' - ')[1]);
            return weightA - weightB;
            });
        }
    return {
        ...state,
        newDogs: ordenPeso
    }



        default:
            return state;
    }

}
export default reducer;