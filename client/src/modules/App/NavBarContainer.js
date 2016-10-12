import { connect } from 'react-redux';
import NavBar from './NavBar';

export default connect(
  (state, ownProps) => ({
    route: state.locationBeforeTransitions
  })
)(NavBar);
