import * as types from '../actions/actionTypes';

const initialState = {
  isUser: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.WELCOME_IF_NOT_USER:
      return {
        isUser: true
      };
    case types.CLOSE_WELCOME_IF_NOT_USER:
      return {
        isUser: false
      };
    default:
      return state;
  }
};

// The user get the welcome modal if is not a user already
