const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Herramientas de Desarrollo - Presentación Profesional</title>
            <link rel="stylesheet" href="/styles.css"> 
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <h1 class="title">Herramientas de Desarrollo</h1>
                </header>
                <main class="content-box">
                    <p class="subtitle">Tercera Presentación</p>
                    <hr class="divider">
                    <p class="greeting">Buenas tardes, Profesor Ponte Ramírez</p>
                </main>
                <footer class="footer">
                    <p class="footer-text">Presentación con estilo profesional | ${new Date().getFullYear()}</p>
                </footer>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log('✅ Servidor de lujo corriendo en puerto ' + port);
    console.log('🔗 Accede a: http://localhost:' + port);
});
