import React, { Component } from 'react'
import { connect } from 'react-redux';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//import Spinner from '../common/Spinner';
import '../dashboard/dashboard.css';
import {getCurrentUserProfile} from '../../actions/profileActions';
import isEmpty from '../../utils/isEmpty';
import PostFeed from '../posts/PostFeed';
import PostForm from '../posts/PostForm';
import axios from 'axios';

export default class PublicProfile extends Component {

  state = {
    username:this.props.match.params.username,
    profile:"",
    posts:[]
  }
  componentDidMount(){
    console.log("from public profile")
    axios.get(`/api/profile/${this.props.match.params.username}`)
        .then(res=>
          this.setState(this.state.profile=res.data))
        .catch(err=> this.props.history.push('/not-found'))  //TESTED.

    axios.get(`/api/posts/${this.props.match.params.username}`)
        .then(res=>{
          this.setState(this.state.posts=res.data)
        })
        .catch(err=>this.props.history.push('/not-found'))  //TESTED
  }


  render() {

    return (
      <div>
          {this.state.username}
          <PostFeed posts={this.state.posts}/>

      </div>
    )
  }
}
