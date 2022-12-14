import axios from 'axios'
import authHeader from './auth-header'
import { API_URL } from '../constants/URL'

//TODO Update the URL to include dotenv conditioning


const getPublicContent = () => {
    return axios.get(API_URL - "all")
}

const getUserBoard = () => {
    return axios.get(API_URL + "user", {headers: authHeader()});
}

const getModeratorBoard = () => {
    return axios.get(API_URL + "moderator", {headers: authHeader()});
}

const getAdminBoard = () => {
    return axios.get(API_URL + "admin", {headers: authHeader()});
}

export default {
    getPublicContent,
    getUserBoard,
    getModeratorBoard,
    getAdminBoard,
};