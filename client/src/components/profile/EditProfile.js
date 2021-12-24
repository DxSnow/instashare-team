import { connect } from  'react-redux';
import React, { Component } from 'react'
import classnames from 'classnames';
import {clearErrors}from '../../actions/authActions';
import {updateProfile} from '../../actions/profileActions';


class EditProfile extends Component {

  state={
    name:this.props.profile.name,
    bio:this.props.profile.bio,
    website:this.props.profile.website
  }

  //if state is {}, get profile from server.

  //handle onChange
  onChange = (event) => this.setState({[event.target.name]: event.target.value});

  //handle onSubmit
  onSubmit = (event) => {
    event.preventDefault();
    const updatedProfile = {
      ...this.state
    };
    this.props.updateProfile(updatedProfile, this.props.history);

  }

  render() {
    const {errors} = this.props;
    return (
      <div className='edit-profile'>
        <div className = 'container'>
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="display-4 text-center">Edit Profile</h3>
              <form noValidate onSubmit = {this.onSubmit}>
              

                {/* name */}
                <div className="mb-3">
                  <input
                      type="text"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.name
                      })}
                      placeholder="Name"
                      name="name"
                      value = {this.state.name}
                      onChange={this.onChange}
                      />
                    {/* show error message if input is invalid. */}
                    {
                      <div className="invalid-feedback">
                          {errors.name}
                      </div>
                    }
                </div>
                {/* bio */}
                <div className="mb-3">
                  <input
                      type="text"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.bio
                      })}
                      placeholder="Short bio"
                      name="bio"
                      value = {this.state.bio}
                      onChange={this.onChange}
                      />
                    {/* show error message if input is invalid. */}
                      <div className="invalid-feedback">
                          {errors.bio}
                      </div>
                </div>
                {/* website */}
                <div className="mb-3">
                  <input
                      type="text"
                      className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.website
                      })}
                      placeholder="Website"
                      name="website"
                      value = {this.state.website}
                      onChange={this.onChange}
                      />
                    {/* show error message if input is invalid. */}
                      <div className="invalid-feedback">
                          {errors.website}
                      </div>
                </div>
                {/* submit button */}
                <div class="d-grid gap-2 mb-1">
                  <input type="submit" className="btn btn-light"/>
                </div>



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


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
  profile:state.profile
})
const mapDispatchToProps = {updateProfile, clearErrors}
export default connect(mapStateToProps,mapDispatchToProps)(EditProfile)
