import { GET_DOGS, GET_NAME } from "./action-types";

let initialState = {
    dogs: [],//original
    newDogs: [] //copia
   }
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DOGS:
            return {...state, dogs:action.payload, newDogs:action.payload};
        case GET_NAME:   
        return {...state, dogs:action.payload, newDogs:action.payload};

        
        default: 
        return state;
    }

}
export default reducer;