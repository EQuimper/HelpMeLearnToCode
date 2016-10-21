import { connect } from 'react-redux';
import { registerUser } from './AuthActions'
import RegisterView from './RegisterView';

export const RegisterContainer = connect(
  null,
  { registerUser }
)(RegisterView);
