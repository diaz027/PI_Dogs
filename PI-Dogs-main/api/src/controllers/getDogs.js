require ('dotenv').config();
const axios = require('axios')
const { API_KEY } = process.env

const getDogs = async() => {
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  return response.data;
}

  
module.exports = getDogs;