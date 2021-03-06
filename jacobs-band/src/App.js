import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components//header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/homePage/home";
import Lyrics from "./pages/lyrics/lyrics";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

import "./styles/app.scss";

function App() {
  const [value, toggleValue] = useState(true);

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Header motion={value} handleToggle={toggleValue} />
              <Home motion={value} />
              <Footer />
            </Route>
            <Route exact path="/lyrics">
              <Lyrics />
              <Footer />
            </Route>
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
