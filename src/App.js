import React from "react";
import "./index.css";

import Weather from "./Weather.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application</h1>

        <Weather />
      </header>
      <footer>
        <p>
          {" "}
          This project was coded with 💜 by
          <a href="https://www.justmeomaya.com">Maya Claros</a>
          and is open sourced on
          <a href="https://github.com/mayaclaros/mc-lyte">GitHub</a>
          and hosted by
          <a href="https://mclyte.netlify.app/">Netlify</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
