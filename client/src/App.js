//importing libraries
import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';

//importing css and components
import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className = "App">
            <Header />
            <div className = "main">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
