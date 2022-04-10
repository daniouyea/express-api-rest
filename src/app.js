import express from "express";
import routes from "./routes.js";

const app = express();
app.use(express.json());

app.use('/v1', routes);


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

