import agent from './agent';
import {
    ASYNC_START,
    ASYNC_END,
    LOGIN,
    LOGOUT,
    REGISTER,
} from './constants/actionTypes';

const promiseMiddleware = (store) => (next) => (action) => {
    console.log('test');
};

const localStorageMiddleware = (store) => (next) => (action) => {
    console.log('test');


};



export { promiseMiddleware, localStorageMiddleware };