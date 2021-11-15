import "./styles.css";
import { Container } from "react-bootstrap";

import { Home } from "./pages/HOME";
import { UserProfile } from "./pages/FORM";
import { FoodAssessment } from "./pages/MAIN";
import history from "./components/history";

import { HashRouter, Router, Route, Switch } from "react-router-dom";

//Go to components/enterimage.js & change the proxy link

export default function App() {
  return (
    <Container fluid="true" className="App min-vh-100">
      <HashRouter>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/userprofile" component={() => <UserProfile />} />
            <Route
              path="/foodassessment"
              component={() => <FoodAssessment />}
            />
          </Switch>
        </Router>
      </HashRouter>
    </Container>
  );
}

/*
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, About, Contact } from "./components";

export default function App() {
  return (
    <div className="App">
      <Welcome />
      <Header heading="DietLane" />
      <HealthForm />
      <ImageInput />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />s
*/
