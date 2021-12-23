import axios from 'axios';

import {UPDATE_PROFILE, GET_ERRORS} from './types';


export const updateProfile = (userData, history) => dispatch => {
  //calling the api
   axios
      .post('/api/profile', userData)
      .then(res => {
        //create or update store data
        dispatch({
          type: UPDATE_PROFILE,
          payload:res.data
        });
        console.log(res.data);
        {alert('profile saved')}

        //go back to profile page
      //   history.push(`/profile/${res.data.username}`)
      })
      .catch(err => dispatch ({
         type: GET_ERRORS,
         payload: err.response.data
       }));
}
