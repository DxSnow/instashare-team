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

            <ul className="navbar-nav .col-sm-6 text-secondary">
              <li className="nav-item">
                {/* posts button - show posts from all users  */}
                <Link className="nav-link" to="/posts">
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                {/* profile button - link to current user's profile */}
                <Link className="nav-link" to={`/profile/${username}`} >
                    Profile
                </Link>
              </li>
              <li className="nav-item">
                {/* log out button - log out user (clear token and redux store) and go to log in*/}
                <Link className="nav-link" to="/login" onClick={this.onLogoutClick}>
                <img
                    className="rounded-circle"
                    src={avatar}
                    alt={username}
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Logout
                </Link>
              </li>
            </ul>
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
