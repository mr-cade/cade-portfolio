import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Resume from "./pages/Resume";
// import Wrapper from "./components/Wrapper";

import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route exact path="/resume" component={Resume} /> */}


        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Wrapper>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
