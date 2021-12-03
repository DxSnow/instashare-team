//importing libraries
import React, { Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//importing css and components
import './App.css';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';


class App extends Component {
  render() {
    return (
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
    )
  }
}
export default App;
