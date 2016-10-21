import { connect } from 'react-redux';
import AppView from './AppView';
import { closeModal } from '../ui';

export default connect(
  (state, ownProps) => ({
    route: ownProps.location,
    auth: state.app.auth,
    ui: state.ui
  }),
  { closeModal }
)(AppView);
