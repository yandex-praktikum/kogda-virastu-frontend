import { combineReducers } from 'redux';
import registerReducer from './registerFormSubSlice';
import loginReducer from './loginFormSubSlice';
import newArticleReducer from './newArticleSubSlice';

const formsReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  article: newArticleReducer,
});

export default formsReducer;
