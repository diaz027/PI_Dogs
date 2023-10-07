const {Dog, Temperaments} = require('../db')

const createDog = async(name, height, weight, life_span, reference_image_id, temperament) =>{
    const response = await Dog.create({
        name,
        height,
        weight,
        life_span,
        reference_image_id
    })
    const temperamento = await Temperaments.findAll({ where: { name:  temperament } }); // busco los temperamentos que tienen ese nombre
           response.addTemperaments(temperamento);//el nuevo perro que agrego le pongo un temperamento
        //    await response.setTemperaments(temperamento)
           return response;
};
module.exports = createDog;