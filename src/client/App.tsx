import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>自己紹介</h1>
      <h2>名前: 山田 太郎</h2>
      <p>職業: 学生</p>
      <h3>趣味:</h3>
      <ul>
        <li>プログラミング</li>
        <li>読書</li>
        <li>旅行</li>
      </ul>
      <h3>自己紹介:</h3>
      <p>こんにちは、山田太郎です。</p>
    </div>
  );
};

export default App;
