import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero backgroundImage="https://c1.staticflickr.com/7/6019/6283399702_1f37edfd95_b.jpg">
        </Hero>
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