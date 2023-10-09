const {Dog, Temperaments} = require('../db')

const createDog = async(name, height, weight, life_span, temperament) =>{
    const response = await Dog.create({
        name,
        height,
        weight,
        life_span
    })
    const temperamento = await Temperaments.findAll({ where: { name:  temperament } }); // busco los temperamentos que tienen ese nombre
           response.addTemperaments(temperamento);//el nuevo perro que agrego le pongo un temperamento
           return response;
};
module.exports = createDog;