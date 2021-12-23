
import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import './profile.css';

class Profile extends Component {
  render() {
    // const { profile, loading } = this.props.profile;
    // let profileContent;

    // if (profile === null || loading) {
    //   profileContent = <Spinner />;
    // } else {
    //   profileContent = (
    //     <div>edit profile</div>
    //   )
    // }
    const {isAuthenticated, user} = this.props.auth;
    const{name,bio,website} = this.props.profile;
    return (
      <section className="container">
        <div class="row">
          <div class="col">
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.name}
                style={{ width: "6rem", marginRight: "5px" }}
                title="You must have a gravatar connected to your email to display an image"
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
export default connect(mapStateToProps)(Profile);
