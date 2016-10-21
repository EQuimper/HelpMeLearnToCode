import { combineReducers } from 'redux';
import { ModalReducer } from '../../modules/ui';

export default combineReducers({
  modals: ModalReducer
});
