const axios = require('axios');
const { Dog } = require('../db');

const getDogsById = async(idRaza) => {
  // const dogDb = await Dog.findAll({where:  {id: idRaza}});

  if(idRaza.toString().length > 3){
      //Busco BD
      const dogDb = [await Dog.findByPk(idRaza)]
      const newTotal = dogDb.map((dog)=>{
          return {
              name: dog.name,
              weight: {metric: dog.weight},
              height: {metric: dog.height},
              life_span: dog.life_span,
              temperament: dog.Temperament 
              //Devuelve array
          }
      })
      return newTotal[0];
  } 

  
  const getInfo = await axios.get(`https://api.thedogapi.com/v1/breeds/${idRaza}`);
  const  dogApiInfo= getInfo.data;
  return dogApiInfo
}
module.exports = getDogsById;