import "./styles.css";

import { Home } from "./pages/HOME";
import { UserProfile } from "./pages/FORM";
import { FoodAssessment } from "./pages/MAIN";
import history from "./components/history";

import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
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
