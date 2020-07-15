import React from "react";
import "./App.css";

// Components
import Header from "./Components/Header";
import Hero from "./Components/Hero";

// Fonts
import "fontsource-roboto";

// Material UI
import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
