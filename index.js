const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const productos = ['Banana', 'Cebollas', 'Lechuga', 'Papas', 'Pimenton', 'Tomate'];



app.set("view engine", "handlebars");

app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/partials/",
    })
);

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

app.get("/", (req, res) => {
    res.render("main");
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

// Ruta genérica 
app.get("*", (req, res) => {
    res.send("<center><h1>Esta página no existe... </h1></center>");
});
