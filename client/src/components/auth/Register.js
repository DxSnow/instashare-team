import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux'; // connect function
import {registerUser } from '../../actions/authActions';
import {clearErrors}from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      passwordConfirm: this.state.passwordConfirm
    };
    this.props.registerUser(newUser, this.props.history);
    //calling the api
    //axios
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({errors: err.response.data}));
  }

  render() {
    const {errors} = this.props;
    const {user} = this.props.auth; // deconstruction
    return (
      <div className="register">
      {user ? user.username : 'no user'}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your Instashare account</p>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.username
                    })}
                    placeholder="Name"
                    name="username"
                    value = {this.state.username}
                    onChange={this.onChange.bind(this)}
                    />
                    {
                      <div className="invalid-feedback">
                        {errors.username}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="email"
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                  placeholder="Email Address"
                  name="email"
                    value = {this.state.email}
                    onChange={this.onChange.bind(this)}
                   />
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                    {
                      <div className="invalid-feedback">
                        {errors.email}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })}
                  placeholder="Password"
                  name="password"
                    value = {this.state.password}
                    onChange={this.onChange.bind(this)}
                   />
                    {
                      <div className="invalid-feedback">
                        {errors.password}
                      </div>
                    }
                </div>
                <div className="form-group">
                  <input
                  type="password"
                  className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.passwordConfirm
                    })}
                  placeholder="Confirm Password"
                  name="passwordConfirm"
                    value = {this.state.passwordConfirm}
                    onChange={this.onChange.bind(this)}
                   />
                    {
                      <div className="invalid-feedback">
                        {errors.passwordConfirm}
                      </div>
                    }
                </div>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentWillUnmount(){
    this.props.clearErrors()

  }

}//end of class

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}
//consume data(state info saved in redux store) from redux store
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, {registerUser,clearErrors})(Register);
