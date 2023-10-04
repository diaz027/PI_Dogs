const axios = require('axios');
const { Temperaments } = require ('../db');

const getTemperaments = async() => {
  const temApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);//pido a la api
  const temperamentsInfo= temApi?.data?.map(dog => ({name: dog.temperament})); // aca mapeo cada perro para guardar en la db en la linea de abajo
  await Temperaments.bulkCreate(temperamentsInfo);//guarda en db
  return temperamentsInfo;
}
module.exports = getTemperaments;