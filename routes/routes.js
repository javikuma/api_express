// Importamos Express
const express = require('express');

// Importamos los controladores creados
const {
    getControllers,
    postControllers,
    putControllers,
    deleteControllers
} = require('../controllers/controllers');

// Asignamos a la constante router el método Router()
const router = express.Router();

// Método GET
router.get('/', getControllers);

// Método POSt
router.post('/', postControllers);

// Método PUT
router.put('/:param', putControllers);

// Método DELETE
router.delete('/:param', deleteControllers);

module.exports = router;