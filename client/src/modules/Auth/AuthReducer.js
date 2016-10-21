import {
  AUTH_USER,
  AUTH_USER_ERROR,
  AUTH_USER_SUCCESS
} from './AuthActions';

const INITIAL_STATE = {
  user: null,
  isUser: null,
  loading: false,
  error: null,
  token: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state,
        loading: true
      }
    case AUTH_USER_SUCCESS:
      return { ...state,
        user: action.payload.data,
        token: action.payload.token,
        loading: false,
        isUser: true
      }
    case AUTH_USER_ERROR:
      return { ...state,
        user: null,
        loading: false,
        isUser: false,
        error: action.message
      }
    default:
      return state;
  }
};
