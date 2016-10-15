import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form'
import AuthReducer from './AuthReducer';
import AppReducer from './AppReducer';
import DashBoardReducer from './DashBoardReducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  register: AuthReducer,
  app: AppReducer,
  dashboard: DashBoardReducer
});
