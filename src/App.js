import React from "react";
import "./index.css";

import Weather from "./Weather.js";
import "./App.css";
import Footer from "src/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Application</h1>

        <Weather />
      </header>
      <Footer />
    </div>
  );
}

export default App;
