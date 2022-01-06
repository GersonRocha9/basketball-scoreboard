import React, { useState } from "react";

function App() {
  // React Hooks - useState: define uma variável reativa
  const [pointsA, setPointsA] = useState(0);
  const [pointsB, setPointsB] = useState(0);

  return (
    <>
      <h1>Placar</h1>

      <div className="team-container">
        <h3> Time A: {pointsA} </h3>
        <button onClick={() => setPointsA(pointsA + 2)}>2 Pontos</button>
        <button onClick={() => setPointsA(pointsA + 3)}>3 Pontos</button>
      </div>

      <div className="team-container">
        <h3> Time B: {pointsB} </h3>
        <button onClick={() => setPointsB(pointsB + 2)}>2 Pontos</button>
        <button onClick={() => setPointsB(pointsB + 3)}>3 Pontos</button>
      </div>

      <div className="final-score">
        {/* Operador Ternário verificando quem está ganhando/ganhou */}
        <h3>{pointsA > pointsB ? "Time A venceu" : pointsB > pointsA ? "Time B venceu" : "Empate"}</h3>
      </div>
    </>
  );
}

export default App;
