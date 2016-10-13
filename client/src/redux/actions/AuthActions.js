import axios from 'axios';
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

export const registerUser = data => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/users`, data)
      .then(res => dispatch(authUser({
        id: res.data._id,
        username: res.data.username,
        email: res.data.email
      })))
      .catch(err => dispatch(authError(err.message)));
  }
}
