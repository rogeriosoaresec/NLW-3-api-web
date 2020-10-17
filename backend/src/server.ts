import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());

app.use(routes);

app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.get('/', (req, res) => {
    return res.json({ welcome: "Implementação de API" })
})

app.listen(3333);