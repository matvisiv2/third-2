const PORT = 4444;

import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('{some ,}');
});

app.post('/auth/login', (req, res) => {
    const token = jwt.sign({
        email: req.body.email,
        fullName: 'Roman',
    },
    'secret123'
);

    res.json({
        success: true,
        token,
    });
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});