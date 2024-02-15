"use strict";

import express, { response } from "express";
import axios from "axios";
import getRandomCard from "../models/Yugioh.js";

const router = express.Router();

// yugioh routes
router.get("/", (req, res) => {
  axios
    .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then((response) => {
      let chosenCard = getRandomCard(response.data.data);
      res.send(chosenCard);
    })
    .catch((error) => console.error("unable to collect card", error));
});

export default router;
