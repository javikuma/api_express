// Método GET
exports.getControllers = ('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: { "example": "Method: GET" }
    });
});
// Método POST
exports.postControllers = ('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: { "example": "Method: POST" }
    });
});
// Método PUT
exports.putControllers = ('/:param', (req, res) => {
    
    // Almacenamos el valor del parámetro en la constante
    const param = req.params.param

    res.status(200).json({
        success: true,
        data: { param } // Retornamos la respuesta con el valor del parámetro
    });
});
// Método DELETE
exports.deleteControllers = ('/:param', (req, res) => {

    // Almacenamos el valor del parámetro en la constante
    const param = req.params.param

    res.status(200).json({
        success: true,
        data: { param } // Retornamos la respuesta con el valor del parámetro
    });
});
