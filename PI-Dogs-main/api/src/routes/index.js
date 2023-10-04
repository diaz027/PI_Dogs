// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const express = require('express');
const {Router} = require('express');
const createPostDog = require('../handlers/createDogs');
const getDogsHandlers = require('../handlers/getDogs');
const getDogsByIdhandlres = require('../handlers/getDogsById');
const getDogsByNamehandlres = require('../handlers/getDogsName');
const getTemperamentsHandlers = require('../handlers/getTemperaments');

const mainRouter = Router();

mainRouter.get("/dogs", getDogsHandlers)
mainRouter.get("/dogs/:idRaza",getDogsByIdhandlres)
mainRouter.get("/name",getDogsByNamehandlres)
mainRouter.post("/dogs",createPostDog)
mainRouter.get("/temperaments",getTemperamentsHandlers)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = mainRouter;
