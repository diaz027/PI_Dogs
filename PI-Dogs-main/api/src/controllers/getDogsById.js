const axios = require('axios');
const { Dog } = require('../db');

const getDogsById = async(idRaza) => {
    //busca en la base db
  const dogDb = await Dog.findAll({where: {name: idRaza}});
  const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
  const  dogApiInfo= getInfo.data;//Destructuring
    //DEVUELVO AMBAS
  return dogDb.concat(dogApiInfo);
}
module.exports = getDogsById;