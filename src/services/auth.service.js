import axios from 'axios'
import { API_URL } from '../constants/URL'


// Axios call to BE Post Reg data
const register = (fname, lname, email, password) => {
    return axios.post(API_URL + 'register', {
        fname,
        lname,
        email,
        password,
    });
};

// Axios call to BE Post Log data
const login = (email, password) => {
    return axios.post(API_URL + 'login', {
        email, password
    })
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data
    });
};

const logout = () => {
    localStorage.removeItem("user");
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
  };