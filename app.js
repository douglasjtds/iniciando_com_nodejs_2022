const express = require("express");
const app = express();

const products = [];

app.post("/products", (request, response) => {
    
})

app.listen(4002, () => console.log("Servidor está rodando na porta 4002"));