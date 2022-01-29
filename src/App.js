import React from 'react';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route } from 'react-router-dom'; //sortcat => imrr

import "assets/scss/style.scss";
import LandingPages from 'pages/LandingPages';

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return <div className="App">
      <Router history={history}>
        <Route path="/" component={LandingPages}></Route>
      </Router>
    </div>;
}

export default App;
