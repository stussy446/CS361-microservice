"use strict";

import express from "express";
import { error } from "console";

const router = express.Router();

// yugioh routes
router.get("/", (req, res) => {
  res.send("yugioh!");
});

export default router;
