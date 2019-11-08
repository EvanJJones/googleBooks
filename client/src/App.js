import React, { Component } from 'react';
import './App.css';
import Container from './Components/Container.jsx';
import SavedBookList from './Components/SavedBookList.jsx';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Container} />
            <Route exact path="/saved" component={SavedBookList} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
