import { connect } from 'react-redux';
import HomeView from './HomeView';
import * as actions from '../../redux/actions/AppActions';

export default connect(
  state => ({
    isUser: state.app.isUser
  }),
  actions
)(HomeView);
