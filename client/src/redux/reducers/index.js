import { combineReducers } from 'redux';
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';
import DashBoardReducer from './DashBoardReducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  app: AppReducer,
  dashboard: DashBoardReducer
});
