import * as types from '../actions/actionTypes';

export default (state = { user: null, error: ''}, action) => {
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
    default:
      return state;
  }
}
