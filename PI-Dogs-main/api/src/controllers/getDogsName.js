const axios = require('axios');
const { Dog } = require('../db');

const getDogsName = async(name) => {
    //busca en la base db
  const dogDb = await Dog.findAll({where: {name: name}});
  const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
  const  dogApiInfo= getInfo.data;//Destructuring
    //DEVUELVO AMBAS
  return dogDb.concat(dogApiInfo);
}
module.exports = getDogsName;