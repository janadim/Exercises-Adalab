import React from "react";
import HalfPage from "./HalfPage";

function App() {
  return (
    <div className="App">
      <HalfPage>
        <h1>Primera Mitad</h1>
        <p>Estoy en la izquierda</p>
      </HalfPage>
      <HalfPage>
        <h2>Segunda Mitad</h2>
        <p>Estoy en la derecha</p>
      </HalfPage>
    </div>
  );
}

export default App;
