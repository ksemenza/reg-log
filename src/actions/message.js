import { SET_MESSAGE, CLEAR_MESSAGE } from '../constants/messages';

export const setMessage = (message) => ({
    type:SET_MESSAGE,
    payload:message,
});

export const clearMessage = (message) => ({
    type: CLEAR_MESSAGE,
})