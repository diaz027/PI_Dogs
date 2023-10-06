import { GET_DOGS, GET_NAME, CREATE_DOG, ORDER, FILTER, TEMPERAMENTO, FILTER_BD, FILTER_API, ORDER_PESOS } from './action-types'
import axios from 'axios'

export const getDogs = () => {
      return async (dispatch) => {
            const response = await axios.get('http://localhost:3001/dogs');
            console.log(response.data)
            return dispatch({
                  type: GET_DOGS,
                  payload: response.data,
            });
      }
};

export const getDogsName = (name) => {
      return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/name?name=` + name);
            return dispatch({
                  type: GET_NAME,
                  payload: response.data,
            });
      }
}

export const createAllDog = (formData) => {
      return async (dispatch) => {
            try {

                  const response = await axios.post(`http://localhost:3001/dogs`, formData);
                  alert('ya se creo perrito!!')
                  return dispatch({
                        type: CREATE_DOG,
                        payload: response.data,
                  });
            } catch (error) {
                  alert(error.message)
            }
      }
}

export const temp = () => {
      return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/temperaments`);
            return dispatch({
                  type: TEMPERAMENTO,
                  payload: response.data,
            });
      }
}

export const filterTemp = (name) => {
      return{
            type: FILTER,
            payload:name
        }
        
}


export const filterBd = (name) => {
      return { type: FILTER_BD, payload: name }
}

export const filterApi = (name) =>  {
      return { type: FILTER_API, playload: name}
}


export const orderCards = (order) => {
      return { type: ORDER, payload: order }
}

export const orderPesos = (Order) => {
      return { type: ORDER_PESOS, payload: Order };
    };
    
