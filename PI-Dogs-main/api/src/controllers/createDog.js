const {Dog, Temperaments} = require('../db')

const createDog = async(name, height, weight, life_span, temperament) =>{

    const response = await Dog.create({
        name,
        height,
        weight,
        life_span
    })

    temperament.forEach(async (temp) => { 
        const temperamento = await Temperaments.findOne({ where: { name:  temp } });// busco los temperamentos que tienen ese nombre
    await response.setTemperaments(temperamento)//el nuevo perro que agrego le pongo un temperamento
    });
    
           return response;
};
module.exports = createDog;