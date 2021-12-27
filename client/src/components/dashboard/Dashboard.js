
import React, { Component } from 'react'
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Spinner from '../common/Spinner';
import './dashboard.css';
import {getCurrentUserProfile} from '../../actions/profileActions';
import isEmpty from '../../utils/isEmpty';
//import axios from 'axios';



class Dashboard extends Component {
  render() {

    const {isAuthenticated, user} = this.props.auth;
    //check if Redux store's profile is empty, if empty, get profile from server. otherwise use store data and do not bother server.
    //after editing profile, store will have new profile data, and it is faster to get store data rather than call server. Only call server when there is no profile data.
    if (isEmpty(this.props.profile)) {
      this.props.getCurrentUserProfile();
    }
    const{name,bio,website} = this.props.profile;

    // To only show posts from a certain user, get all posts from serverm and filter it according to the username in current URL
    const postsByThisUser= this.props.posts.filter(post => post.username === user.username).map((filteredPost) => (
      <li key={this.props.posts.id} className="list-group-item">{filteredPost.text}</li>
  ))



    return (
      <section className="container">
        <div className="row">
          <div className="col">
              <img
                className="rounded-circle"
                src={user.avatar}
                alt={user.username}
                style={{ width: "8rem" }}
              />
          </div>

          <div className="col">
            <div className="my-flex-container">
              <div className="username">{user.username}</div>
              <Link to="/accounts/edit" className="btn btn-light">Edit Profile</Link>
            </div>
            <br />
            {/* <div className="my-flex-container">
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
            <br /> */}
            <div className="name">Full name: {name}</div>
            <div>{website}</div>
            <div>{bio}</div>
          </div>
          {/* end of profile upper part */}
        </div>{/* end of row */}
        <hr />
         {/* posts display part */}
        <div>
            <ul className="list-group list-group-flush">
              {postsByThisUser}
            </ul>
        </div>
      </section>
    )
  }
}
const mapStateToProps=(state)=>({
  auth:state.auth,
  profile:state.profile,
  posts: state.post.posts})
export default connect(mapStateToProps,{getCurrentUserProfile})(Dashboard);
