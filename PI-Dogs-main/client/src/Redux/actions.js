import { GET_DOGS, GET_NAME } from './action-types'
import axios from 'axios'

export const getDogs =() => {
    return async (dispatch) => {
    const response = await axios.get('http://localhost:3001/dogs');
     return  dispatch ({
             type: GET_DOGS,
             payload: response.data,
       });
 }
};

export const getDogsName= (name) =>{
      return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/name?name=` + name);
      return  dispatch ({
       type: GET_NAME,
       payload: response.data,
      });
  }
}

