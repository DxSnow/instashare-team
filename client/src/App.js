//importing libraries
import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

//importing css and components
import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from "./components/posts/Posts";
import store from './store';
import PrivateRoute from "./components/common/PrivateRoute";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className = "App">
            <Header />
            <div className = "container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/posts" component={Posts} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
