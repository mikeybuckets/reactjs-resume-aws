import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";
import Sticky from "sticky-js";
import { focusHandling } from "cruip-js-toolkit";

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky("[data-sticky]");
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about-me'>
          <About />
        </Route>
        <Route path='/resume-page'>
          <Resume />
        </Route>
      </Switch>
    </>
  );
}

export default App;
