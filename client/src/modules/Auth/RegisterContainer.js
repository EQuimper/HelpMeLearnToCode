import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/AuthActions';
import RegisterView from './RegisterView';

export default connect(
  null,
  actions
)(RegisterView);
