import express from 'express';
import './database/connection';


const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: "Hellow" })
})


app.get('/users', (req, res) => {
    return res.json({ user: "user 1" })
})


app.listen(3333);