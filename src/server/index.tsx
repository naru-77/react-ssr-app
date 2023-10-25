import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../client/App";

const app = express();
const PORT = 9000;

app.get("/", (req, res) => {
  const content = ReactDOMServer.renderToString(<App />);
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>React SSR App</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="/dist/client/index.js"></script>
    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
