import React from 'react';
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Resume from './components/Resume';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
