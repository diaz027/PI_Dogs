import { GET_DOGS, GET_NAME, CREATE_DOG, ORDER, FILTER } from './action-types'
import axios from 'axios'

export const getDogs = () => {
      return async (dispatch) => {
            const response = await axios.get('http://localhost:3001/dogs');
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

export const filterTemp =() =>{
      return async (dispatch) => {
            const response = await axios.get(`http://localhost:3001/temperaments`);
            return dispatch({
                  type: FILTER,
                  payload: response.data,
            });
      }
}

export const orderCards = (order) => {
      return {type: ORDER, payload: order}
  }

