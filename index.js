const PORT = 3000;

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({
        some: 'sem',
    })
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});