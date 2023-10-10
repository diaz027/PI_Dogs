require('dotenv').config();
const axios = require('axios')
const { Dog, Temperaments } = require('../db')
const { API_KEY } = process.env

const getDogs = async () => {
  const dogDb = await Dog.findAll({include: {model: Temperaments}});//con el include estamos buscando la relacion de los dog con los temperamentos
  const newTotal = dogDb.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      weight: { metric: dog.weight },
      height: { metric: dog.height },
      life_span: dog.life_span,
      temperament: dog.Temperaments.map(element => element.dataValues.name).join(', ').trim()//se utiliza para mapear(recorrer) los registros de temperamentos asociados al perro
      //Devuelve array
    }
  })
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  const result = response.data;
  return newTotal.concat(result);
}


module.exports = getDogs;