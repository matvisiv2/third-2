const PORT = 4444;

import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import { registerValidation } from './validations.js';

import UserModel from './models/User.js';

mongoose.connect('mongodb+srv://matvisiv2:matvisiv2@cluster0.wpnvxf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => { console.log('DB ok'); })
    .catch((err) => console.log(`DB error: ${err}`));

const app = express();

app.use(express.json());

app.post('/auth/register', registerValidation, (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
        email: req.b
    });

    return res.json({
        success: true,
    });
});

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server ok');
});