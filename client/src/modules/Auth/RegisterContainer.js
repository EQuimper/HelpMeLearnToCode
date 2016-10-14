import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/AuthActions';
import RegisterView from './RegisterView';

export const RegisterContainer = connect(
  null,
  actions
)(RegisterView);
