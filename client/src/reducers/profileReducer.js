import { SET_PROFILE } from '../actions/types';


const initialState = {};
 // eslint-disable-next-line import/no-anonymous-default-export
 export default function(state= initialState, action){
    switch(action.type){

      case SET_PROFILE:
        return action.payload


      default:
      return state;
    }
 }
