import { connect } from 'react-redux';
import DashBoardView from './DashBoardView';
import * as actions from '../../redux/actions/DashBoardActions';

export default connect(
  state => ({
    dashboard: state.dashboard
  }),
  actions
)(DashBoardView);
