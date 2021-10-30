// Importamos Express
const express = require('express');

// Importamos nuestras rutas creadas
const routes = require('./routes/routes.js');

// Asignamos Express a una constante
const app = express();

// Usamos éste middleware para Parsear el Body a JSON
app.use(express.json());

/* Utilizamos la ruta y designamos el 'path'. En éste caso sería en el servidor local: 
    http://localhost:5000/api 
*/
app.use('/api', routes);

// Asignamos un número al puerto
const PORT = process.env.PORT || 5000;

// Iniciamos la Aplicación
app.listen(
    PORT, 
    ()=> console.log(
        `Servidor corriendo en el puerto: ${PORT} `
    )
);