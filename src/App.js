import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './Pages/Home/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path="/" component={HomePage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
