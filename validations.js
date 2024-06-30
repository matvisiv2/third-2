import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Invalid email').isEmail(),
    body('password', 'The password must contain at least 5 characters').isLength({ min: 5 }),
    body('fullName', 'Enter name').isLength({ min: 3 }),
    body('avatarUrl', 'Invalid url').optional().isURL(),
];