
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import './profile.css';
import {getProfile} from '../../actions/profileActions';
import isEmpty from '../../utils/isEmpty';



class Profile extends Component {
  render() {

    const {isAuthenticated, user} = this.props.auth;
    //check if Redux store's profile is empty, if empty, get profile from server. otherwise use store data and do not bother server.
    //after editing profile, store will have new profile data, and it is faster to get store data rather than call server. Only call server when there is no profile data.
    if (isEmpty(this.props.profile)) {
      this.props.getProfile();
    }
    const{name,bio,website} = this.props.profile;

    return (
      <section className="container">
        <div class="row">
          <div class="col">
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.username}
                style={{ width: "6rem" }}
                // title="You must have a gravatar connected to your email to display an image"
              />
          </div>

          <div class="col">
            <div className="my-flex-container">
              <div className="username">{user.username}</div>
              <Link to="/accounts/edit" className="btn btn-light">Edit Profile</Link>
            </div>
            <br />
            <div className="my-flex-container">
              <div>
                <span>0</span> posts
              </div>
              <div>
                <span>0</span> followers
              </div>
              <div>
                <span>0</span> following
              </div>
            </div>
            <br />
            <div className="name">{name}</div>
            <div>{website}</div>
            <div>{bio}</div>
          </div>
          {/* end of profile upper section */}
          <hr />

        </div>
      </section>
    )
  }
}
const mapStateToProps=(state)=>({
  auth:state.auth,
  profile:state.profile})
export default connect(mapStateToProps,{getProfile})(Profile);
