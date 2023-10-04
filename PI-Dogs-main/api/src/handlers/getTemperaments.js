const getTemperaments = require("../controllers/getTemperaments");

const getTemperamentsHandlers = async (req, res) =>{
    try {
        const temp = await getTemperaments()
        res.status(200).json(temp)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}
module.exports = getTemperamentsHandlers;