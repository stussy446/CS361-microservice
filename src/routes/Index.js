"use strict";

import express from "express";
import { error } from "console";

const router = express.Router();

// home routes
router.get("/", (req, res) => {
  res.send("Hello World hell ya!");
});

export default router;
