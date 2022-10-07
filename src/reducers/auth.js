import {
    REG_SUCCEED,
    REG_FAIL,
    LOGIN_SUCCEED,
    LOGIN_FAIL,
    LOGOUT,
  } from '../constants/messages';

// JSON parse user data from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const initialState  = user && user 
  ? {isLoggedIn:true, user}
  : {isLoggedIn:false, user:null };
  

  // eslint-disable-next-line import/no-anonymous-default-export
  export default function(state = initialState , action) {
    const {type, payload} = action;

    // eslint-disable-next-line default-case
    switch(type) {
//REG SUCCESS
        case REG_SUCCEED:
            return{
                ...state,
                isLoggedIn:false,
            };
//REG FAIL
            case REG_FAIL:
            return {
                ...state,
                isLoggedIn:false,
             };
//LOGIN SUCCESS
             case LOGIN_SUCCEED:
                return{
                    ...state,
                    isLoggedIn:true,
                    user:payload.user,
                };
//LOGIN FAIL
                case LOGIN_FAIL:
                    return{
                        ...state,
                        isLoggedIn:false,
                        user:null,
                    };
//LOGOUT
                case LOGOUT:
                    return {
                        ...state, 
                        isLoggedIn:false,
                        user:null,
                    };
//DEFAULT SWITCH CASE
                default:
                    return state;
    }
  }


  