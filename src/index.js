const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// La carpeta /public dentro de src es la raíz para archivos estáticos (CSS, JS, imágenes)
// El __dirname apunta a la carpeta src/
app.use(express.static(path.join(__dirname, 'public')));

// RUTA PRINCIPAL (/)
app.get('/', (req, res) => {
    // Envía el archivo index.html que está en /src/public/
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// NUEVA RUTA: /git-commands
app.get('/git-commands', (req, res) => {
    // Envía el archivo git-commands.html que está en /src/public/
    res.sendFile(path.join(__dirname, 'public', 'git-commands.html'));
});

app.listen(port, () => {
    console.log('✅ Servidor corriendo en puerto ' + port);
});