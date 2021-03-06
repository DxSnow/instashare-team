import { GET_ERRORS, SET_ERRORS, CLEAR_ERRORS } from '../actions/types';

const initialState = {};

 // eslint-disable-next-line import/no-anonymous-default-export
export default function(state= initialState, action){
  switch(action.type){
    //dispatch call
    case GET_ERRORS:
    case SET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return state;
    default:
      return state;
  }
}
