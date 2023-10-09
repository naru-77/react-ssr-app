"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const server_1 = __importDefault(require("react-dom/server"));
const index_1 = __importDefault(require("../client/index"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    const content = server_1.default.renderToString(react_1.default.createElement(index_1.default, null));
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>React SSR App</title>
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="/path-to-your-bundle.js"></script>
    </body>
    </html>
  `);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
