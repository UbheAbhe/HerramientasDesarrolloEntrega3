const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Herramientas de Desarrollo, 3ra Presentacion, Buenas tardes Profesor Ponte Ramirez');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
