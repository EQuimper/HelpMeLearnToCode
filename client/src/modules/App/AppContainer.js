import { connect } from 'react-redux';
import AppView from './AppView';

export default connect(
  (state, ownProps) => ({
    route: ownProps.location
  })
)(AppView);
