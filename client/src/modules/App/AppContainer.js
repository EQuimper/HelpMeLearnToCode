import { connect } from 'react-redux';
import AppView from './AppView';
import * as actions from '../../redux/actions/AuthActions';

export default connect(
  (state, ownProps) => ({
    route: ownProps.location,
    authModal: state.user.modal,
    user: state.user
  }),
  actions
)(AppView);
