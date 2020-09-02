import React, { useState } from "react";

import Header from "./components//header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/homePage/home";

import "./styles/app.scss";

function App() {
  const [value, toggleValue] = useState(true);

  return (
    <div className="App">
      <Header motion={value} handleToggle={toggleValue} />
      <Home motion={value} />
      <Footer />
    </div>
  );
}

export default App;
