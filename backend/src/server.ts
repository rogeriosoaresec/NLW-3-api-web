import express from 'express';
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.get('/', (req, res) => {
    return res.json({ welcome: "Implementação de API" })
})

app.listen(3333);