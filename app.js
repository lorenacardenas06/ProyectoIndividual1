const express = require('express'); //Traigo la libreria express

const path = require('path'); //Traigo la ruta

const app = express(); //Utilizo express

app.use(express.static(path.join(__dirname, './public'))); // Se hace la carpeta public publica

app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'));  // Permite enviar un archivo HTML
});

app.get('*', (req,res) =>{
    res.send("Ruta restringida, hemos localizado la direccion de su computador");  // Permite enviar texto o codigo HTML
});

app.listen(3002, function () {
    console.log("Servidor corriendo");
});
