import express from 'express';
import { createOrder } from '../controllers/OrderControllers.js';

const OrderRouter = express.Router();

OrderRouter
    .route('/createOrder')
    .post(createOrder)

export {OrderRouter}