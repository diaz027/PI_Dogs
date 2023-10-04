const createDog = require('../controllers/createDog');


const createPostDog = async (req, res) => {
    try {
        const {name, height, weight, life_span, reference_image_id, temperaments} = req.body;
        const dogs = await createDog(name, height, weight, life_span, reference_image_id, temperaments);
        res.status(200).send(dogs)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
module.exports = createPostDog;