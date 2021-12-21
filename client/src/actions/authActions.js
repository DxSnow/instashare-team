import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_USER } from './types';
import setAuthToken from "../utils/setAuthToken";

export const registerUser = (userData, history) => dispatch => {
  //calling the api
   axios
      .post('/api/users/register', userData)
      .then(res => history.push('./login'))
      .catch(err => dispatch ({
         type: GET_ERRORS,
         payload: err.response.data
       }));
}

export const loginUser = (userData, history) => dispatch => {
  axios
    .post('/api/users/login',userData)
    .then(res => {
      const {token} = res.data;
      // res has token, save the token to browser cache, a.k.a local storage
      localStorage.setItem('jwtToken', token);
      //set the token to the auth header. setAuthToken is an imported customized func
      setAuthToken(token);
      //decode token
      const decoded = jwt_decode(token);
      //dispatch action to update store data
      dispatch({
        type: SET_USER,
        payload:decoded
      });
      //direct to posts component where posts from all users show
      history.push('/posts');
    }
    ) //end of .then

    // dispatch error data to store
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}

export const clearErrors= () => ({type:'CLEAR_ERRORS'})
