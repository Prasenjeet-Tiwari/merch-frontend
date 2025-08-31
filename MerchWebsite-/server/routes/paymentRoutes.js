import express from "express";
import { createCheckoutSession, verifyPayment } from "../controllers/paymentControllers.js";

const paymentRouter = express.Router();

paymentRouter.post("/create-checkout-session", createCheckoutSession);
paymentRouter.post("/verify-payment", verifyPayment);

export default paymentRouter;
