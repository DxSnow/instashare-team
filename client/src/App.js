//importing libraries
import React, { Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
            <Routes>
                <Route exact path="/" element={<Landing />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path = "/login" element = {<Login />}/>
            </Routes>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
