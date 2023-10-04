const getDogsName = require("../controllers/getDogsName");

const getDogsByNamehandlres = async (req, res) =>{
    try {
        const {name} = req.query;
        const dogs = await getDogsName(name)
        res.status(200).json(dogs)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports = getDogsByNamehandlres;