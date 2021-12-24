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
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import jwt_decode from 'jwt-decode';
import { logoutUser } from './actions/authActions';
import {SET_USER} from './actions/types';
import setAuthToken from './utils/setAuthToken';

if (localStorage.jwtToken){
  //decode
  const decoded = jwt_decode(localStorage.jwtToken);
  //check the expiry of the token
  const currentTime = Date.now()/1000;
  if (decoded.exp < currentTime){
    //Expired
    //Logout user
    store.dispatch(logoutUser());
    //Redirect user to login
    window.location.href = "/login";
  }

  //Set auth header
  setAuthToken(localStorage.jwtToken);
  //dispatch
  store.dispatch({
    type: SET_USER,
    payload: decoded,
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>

            <div className = "App">
              <Header />
              <div className = "container">
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />

                  <PrivateRoute exact path="/posts" component={Posts} />
                  {/* profile page -- any logged in user can see other users' profile page*/}
                  <Route exact path="/profile/:username" component={Profile} />
                  <PrivateRoute exact path="/accounts/edit" component={EditProfile} />
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
