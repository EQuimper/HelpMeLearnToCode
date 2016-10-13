import * as types from '../actions/actionTypes';

export default (state = { user: null, error: '', modal: false }, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {
        ...state,
        user: action.data
      }
    case types.AUTH_ERROR:
      return {
        ...state,
        error: action.message
      }
    case types.OPEN_MODAL_REGISTRATION:
      return {
        ...state,
        modal: true
      }
    case types.CLOSE_MODAL_REGISTRATION:
      return {
        ...state,
        modal: false
      }
    default:
      return state;
  }
}
