import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <button to = "/" className = "button demo"><span>Demo Login</span></button>
        <br />

        <Link to="/register" className="button register"><span>Sign Up</span></Link>
        <br />
        <Link to="/login" className="button login"><span>Log In</span></Link>
        <br />

      </div>
    )
  }
}
