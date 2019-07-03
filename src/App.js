import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Results from './Components/Results/Results';

import HomePage from './Pages/Home/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/results" component={Results} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
