import express from "express";
import routes from "./routes.js";
import 'dotenv/config';

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/v1', routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

