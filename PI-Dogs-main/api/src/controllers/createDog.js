const {Dog} = require('../db')

const createDog = async(name, height, weight, life_span, reference_image_id, temperaments) =>{
    const response = await Dog.create({
        name,
        height,
        weight,
        life_span,
        reference_image_id,
        temperaments
    })
    return response;
};
module.exports = createDog;