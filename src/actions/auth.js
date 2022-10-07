/**  ACTION CREATOR of register() 
 * 
 * calls the AuthService.register(fname, lname, email, password)
 * dispatch REG_SUCCEED and SET_MESSAGE if successful
 * dispatch REG_FAIL and SET_MESSAGE if failed
 * 
 * ACTION CREATOR of login()
 * 
 * calls the AuthService.login(email, password)
 * dispatch LOGIN_SUCCEED and SET_MESSAGE if successful
 * dispatch LOGIN_FAIL and SET_MESSAGE if failed
 * */ 

// CONSTANT IMPORTS
import {
    REG_SUCCEED,
    REG_FAIL,
    LOGIN_SUCCEED,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from '../constants/messages'

import AuthService from '../services/auth.service';

// REGISTER ACTION
export const register = (fname, lname, email, password) => (dispatch) => {
    return AuthService.register(fname, lname, email, password)
    .then((response) => {
// REG SUCCESS
        dispatch({
            type:REG_SUCCEED,
        });
        dispatch({
            type:SET_MESSAGE,
            payload: response.payload.data.message,
        });
        return Promise.resolve();
    },
// START OF ERROR REG
    (error) => {
        const message = error.message
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString();     
        dispatch({
            type:REG_FAIL,
        })  
//FAIL MESSAGE        
        dispatch({
            type:SET_MESSAGE,
            payload:message,
        });
        return Promise.reject()
    });
};


//LOGIN ACTION
export const login = (email, password) => (dispatch) => {
    return AuthService.login(email, password)
    .then((data) => {
//LOGIN SUCCESS
        dispatch({
            type:LOGIN_SUCCEED,
            payload:{user:data},
        });
// PROMISE RESOLVED
        return Promise.resolve();
    },
//START LOGIN ERROR
    (error) => {
        const message = (
            error.response && error.response.data && error.response.data.message
        ) || error.message || error.toString();
// LOGIN FAIL
        dispatch({ 
            type:LOGIN_FAIL
        });
        dispatch({ 
//FAIL MESAGE
            type:SET_MESSAGE,
            payload:message,
        });
//PROMISE REJECTED
        return Promise.reject();
    }
    )
}

//LOGOUT ACTION
export const logout = () => (dispatch) => {
    AuthService.logout();
    dispatch({type:LOGOUT});

}

