import axios from 'axios';
import { browserHistory } from 'react-router';
import * as types from './actionTypes';
import { ROOT_URL } from '../../utils';

const authUser = data => ({
  type: types.AUTH_USER,
  data
});

const authError = message => ({
  type: types.AUTH_ERROR,
  message
});

const openModalRegistration = () => ({ type: types.OPEN_MODAL_REGISTRATION });
export const closeModalRegistration = () => ({ type: types.CLOSE_MODAL_REGISTRATION });

export const registerUser = () => {

  return (dispatch, getState) => {
    const form = getState().form.RegisterForm;
    const user = {
      username: form.values.username,
      email: form.values.email,
      password: form.values.password
    }

    dispatch(authUser(user));
    dispatch(openModalRegistration());
    browserHistory.push('/');


    // axios
    //   .post(`${ROOT_URL}/users`, user)
    //   .then(res => dispatch(authUser({
    //     id: res.data._id,
    //     username: res.data.username,
    //     email: res.data.email
    //   })))
    //   .then(() => {
        // dispatch(openModalRegistration());
        // browserHistory.push('/');
    //   })
    //   .catch(err => dispatch(authError(err.message)));

  }
};
