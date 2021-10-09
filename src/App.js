import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Support from './components/pages/Support';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/support" exact component={Support} />
          <Route path="/rates" exact component={Home} />
          <Route path="/work" exact component={Home} />
          <Route path="/reviews" exact component={Home} />
          <Route path="/contacts" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
