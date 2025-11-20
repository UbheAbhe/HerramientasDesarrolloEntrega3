const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Zoom a las 6:02PM, entren csmr');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
