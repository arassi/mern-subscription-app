import express from "express";

const router = express.Router();

import { prices, createSubscription, subscriptionStatus, subscriptions, customerPortal } from "../controllers/subs";
import { requireSignin } from "../middlewares";

router.get("/prices", prices);
router.post("/create-subscription", requireSignin, createSubscription);
router.get("/subscription-status", requireSignin, subscriptionStatus);
router.get("/subscriptions", requireSignin, subscriptions);
router.get('/customer-portal', requireSignin, customerPortal); // to manage subscriptions

module.exports = router;
