const axios = require('axios');
const { Dog } = require('../db');

const getDogsById = async(idRaza) => {
  const dogDb = await Dog.findAll({where:  id});
  const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
  const  dogApiInfo= getInfo.data;
  return dogDb.concat(dogApiInfo);
}
module.exports = getDogsById;