import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logoutUser} from '../../actions/authActions';

class Header extends Component {
  onLogoutClick = (event)=> {
    event.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const { username, avatar } = this.props.auth.user;
    const {isAuthenticated} = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav .col-sm-6 text-secondary">
        {/* posts button - show posts from all users  */}
        <li className="nav-item">
          <Link className="nav-link" to="/posts">
            Posts
          </Link>
        </li>
        {/* profile button - link to current user's profile */}
        <li className="nav-item">
          <Link className="nav-link" to={`/profile/${username}`} >
              Profile
          </Link>
        </li>
        {/* log out button - log out user (clear token and redux store) and go to log in*/}
        <li className="nav-item">
          <Link className="nav-link" to="/login" onClick={this.onLogoutClick}>
          <img
              className="rounded-circle"
              src={avatar}
              alt={username}
              style={{ width: "25px", marginRight: "5px" }}
              title="You must have a gravatar connected to your email to display an image"
            />
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
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logoutUser})(Header);
