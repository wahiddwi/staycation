import React from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from 'react-router-dom'; //sortcat => imrr

import "assets/scss/style.scss";
import LandingPages from 'pages/LandingPages';
import Example from 'pages/Example';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return <div className="App">
      <Router history={history}>
        <Route exact path="/" component={LandingPages}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>;
}

export default App;
