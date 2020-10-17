import express from 'express';
import 'express-async-errors';

import routes from './routes';
import path from 'path';

import cors from 'cors';

import './database/connection';

import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.get('/', (req, res) => {
    return res.json({ welcome: "Implementação de API" })
});

app.use(errorHandler); 

app.listen(3333);