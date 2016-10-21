import { connect } from 'react-redux';
import { loginUser } from './AuthActions';
import LoginView from './LoginView';

export default connect(
  null,
  { loginUser }
)(LoginView);
