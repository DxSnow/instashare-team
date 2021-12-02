import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

export default class Landing extends Component {
  render() {
    return (
      <div>
        <button to = "/" className = "button demo"><span>Demo Login</span></button>
        <br />
        <button  className="button register"><span>Sign Up</span></button>
        <br />
        <Link to="/register" className="button register" style={{ textDecoration: 'none' }}>Sign Up</Link>
        <br />
        <button  className="button login"><span>Log In</span></button>

      </div>
    )
  }
}
