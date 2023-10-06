require('dotenv').config();
const axios = require('axios')
const { Dog } = require('../db')
const { API_KEY } = process.env

const getDogs = async () => {
  const dogDb = await Dog.findAll();
  const response = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
  const result = response.data;
  return dogDb.concat(result);
}


module.exports = getDogs;