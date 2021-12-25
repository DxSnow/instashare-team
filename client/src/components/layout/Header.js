import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { username } = this.props.auth.user;
    const {isAuthenticated} = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav .col-sm-6 text-secondary">
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        <li className="nav-item">
          {/* link to current user's profile */}
          <Link className="nav-link" to={`/profile/${username}`} >
              Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Logout
          </Link></li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Instashare</Link>
          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#mobile-nav">
                <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mobile-nav">

            {isAuthenticated? authLinks : 'nothing'}
          </div>
        </div>
      </nav>
    )
  }
}
Header.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, null)(Header);
