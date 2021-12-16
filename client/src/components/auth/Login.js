import React, { Component } from 'react'
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {loginUser} from '../../actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const userData = {...this.state};

    this.props.loginUser(userData,this.props.history);

  }


  render() {
    const {errors} = this.props;
    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-6 text-center">Log In</h1>
              <p className="lead text-center">Sign in to your Instashare account</p>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                  <input type="email" className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.email
                    })}
                     placeholder="Email Address" name="email"
                     value = {this.state.email}
                    onChange={this.onChange.bind(this)}
                     />
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>

                </div>
                <div className="form-group">
                  <input type="password" className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.password
                    })} placeholder="Password" name="password"
                    value = {this.state.password}
                    onChange={this.onChange.bind(this)}
                     />

                  <div className="invalid-feedback">
                    {errors.password}
                  </div>

                </div>
                <input type="submit" className="btn btn-secondary btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(Login);
