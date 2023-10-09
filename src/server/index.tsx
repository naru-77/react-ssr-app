import express from "express";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import App from "../client/App";

// const express = require("express");
const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
