(()=>{"use strict";var e={649:function(e,t,l){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(l(689));t.default=()=>r.default.createElement("div",{style:{fontFamily:"Arial, sans-serif",padding:"20px"}},r.default.createElement("h1",null,"自己紹介"),r.default.createElement("h2",null,"名前: 山田 太郎"),r.default.createElement("p",null,"職業: 学生"),r.default.createElement("h3",null,"趣味:"),r.default.createElement("ul",null,r.default.createElement("li",null,"プログラミング"),r.default.createElement("li",null,"読書"),r.default.createElement("li",null,"旅行")),r.default.createElement("h3",null,"自己紹介:"),r.default.createElement("p",null,"こんにちは、山田太郎です。"))},830:function(e,t,l){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(l(860)),u=n(l(689)),a=n(l(684)),d=n(l(649)),o=(0,r.default)();o.get("/",((e,t)=>{const l=`\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>React SSR App</title>\n    </head>\n    <body>\n        <div id="root">${a.default.renderToString(u.default.createElement(d.default,null))}</div>\n    </body>\n    </html>\n  `;t.send(l)})),o.listen(9e3,(()=>{console.log("Server is running on http://localhost:9000")}))},860:e=>{e.exports=require("express")},689:e=>{e.exports=require("react")},684:e=>{e.exports=require("react-dom/server")}},t={};!function l(n){var r=t[n];if(void 0!==r)return r.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,l),u.exports}(830)})();