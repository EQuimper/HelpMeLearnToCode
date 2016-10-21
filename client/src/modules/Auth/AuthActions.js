import axios from 'axios';
// import { browserHistory } from 'react-router';
import { ROOT_URL } from '../../utils';

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_ERROR = 'AUTH_USER_ERROR';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';

const authUserSuccess = (data, token) => ({
  type: AUTH_USER_SUCCESS,
  payload: {
    data,
    token
  }
});

const authUserError = message => ({
  type: AUTH_USER_ERROR,
  message
});

export const registerUser = () => {
  return (dispatch, getState) => {
    dispatch({ type: AUTH_USER });

    // Get element coming from the form state
    const form = getState().form.RegisterForm;
    const user = {
      username: form.values.username,
      email: form.values.email,
      password: form.values.password
    }

    // If miss something dispatch error
    if (!user.username || !user.email || !user.password) {
      return dispatch(authUserError('You need to fill every input!'));
    }

    axios
      .post(`${ROOT_URL}/user/signup`, user)
      .then(res => dispatch(authUserSuccess({
        id: res.data.user.id,
        username: res.data.user.username,
        email: res.data.user.email
      }, res.data.token)))
      .then(() => {
        dispatch({
          type: 'OPEN_MODAL',
          modalName: 'registerModal'
        });
        // browserHistory.push('/');
      })
      .catch(err => dispatch(authUserError(err.message)));
  }
};

export const loginUser = () => {
  console.log('HELLO');
  return (dispatch, getState) => {
    dispatch({ type: AUTH_USER });

    // Get element coming from the form state
    const form = getState().form.LoginForm;
    const user = {
      email: form.values.email,
      password: form.values.password
    }

    // If miss something dispatch error
    if (!user.email || !user.password) {
      return dispatch(authUserError('You need to fill every input!'));
    }

    axios
      .post(`${ROOT_URL}/user/login`, user)
      .then(res => dispatch(authUserSuccess({
        id: res.data.user.id,
        username: res.data.user.username,
        email: res.data.user.email
      }, res.data.token)))
      .then(() => {
        // browserHistory.push('/');
      })
      .catch(err => dispatch(authUserError(err.message)));
  }
};
