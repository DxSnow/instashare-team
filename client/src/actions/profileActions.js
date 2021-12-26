import axios from 'axios';

import {SET_PROFILE, GET_ERRORS} from './types';


export const updateProfile = (userData, history) => dispatch => {
  //calling the api
   axios
      .post('/api/profile', userData)
      .then(res => {
        //create or update store data
        dispatch({
          type: SET_PROFILE,
          payload:res.data
        });
        // go back to profile page
        history.push(`/dashboard`)
      })
      .catch(err => dispatch ({
         type: GET_ERRORS,
         payload: err.response.data
       }));
}

export const getCurrentUserProfile = (username) => dispatch => {
   axios
      .get("/api/profile")
      .then(res => {
        dispatch({
          type: SET_PROFILE,
          payload:res.data
        });
      })
      .catch(err => dispatch ({
         type: GET_ERRORS,
         payload: err.response.data
       }));
}
