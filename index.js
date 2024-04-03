const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const productos = ['banana', 'cebollas', 'lechuga', 'papas', 'pimenton', 'tomate'];



app.set("view engine", "handlebars");

app.engine(
    "handlebars",
    exphbs.engine({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/partials/",
    })
);
const path = require("path");

app.use("/css", express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css")));
app.use("/jquery", express.static(path.join(__dirname, "/node_modules/jquery/dist")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js")));

//Definiendo carpeta "assets" como pública
app.use(express.static(path.join(__dirname, "assets")));

app.get("/", (req, res) => {
    res.render("main", {productos});
});


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

// Ruta genérica 
app.get("*", (req, res) => {
    res.send("<center><h1>Esta página no existe... </h1></center>");
});
