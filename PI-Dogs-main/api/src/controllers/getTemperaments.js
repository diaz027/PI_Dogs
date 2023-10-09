const axios = require('axios');
const { Temperaments } = require('../db');

const getTemperaments = async () => {
  const temApi = await axios.get(`https://api.thedogapi.com/v1/breeds`);
  const uniqueTemperaments = new Set(); // new set() es un objeto y para qgregarle cosas lo usamos con el add.

  //recorro cada temperamento de cada perro y extraigo los temperaments de la api
  const temperamentsInfo = temApi?.data?.forEach(dog =>
    dog?.temperament?.split(', ').forEach(temperament => uniqueTemperaments.add(temperament))
  )
  // convierto en array al set 
  const allTemperaments = [...uniqueTemperaments].map(temperament => ({//  lo mapeo para que yo poder convertirlo en objeto
    name: temperament,
  }))
  console.log(allTemperaments)
  //agrego a bd 
    Temperaments.bulkCreate(allTemperaments)
  return allTemperaments
}
module.exports = getTemperaments;