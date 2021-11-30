import './App.css';
import React, { Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/layout/Header';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <Header />

          <Routes>
              <Route exact path="/" element={<Landing />} />

          </Routes>

          <Footer />


        </div>
      </Router>
    )
  }
}
