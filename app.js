"use strict";

import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

import { default as homeRouter } from "./src/routes/Index.js";
import { default as yugiohRouter } from "./src/routes/Yugioh.js";

// express setup
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// route configuration
app.use("/", homeRouter);
app.use("/yugioh", yugiohRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
