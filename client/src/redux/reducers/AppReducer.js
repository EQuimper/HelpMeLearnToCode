import { combineReducers } from 'redux';
import { AuthReducer } from '../../modules/auth';

export default combineReducers({
  auth: AuthReducer
});
