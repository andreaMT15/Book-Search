import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Pages/Home/HomePage';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={HomePage} />
    </div>
  </Router>
);

export default App;
