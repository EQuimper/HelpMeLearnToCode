import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/AuthActions';
import LoginView from './LoginView';

export const LoginContainer = connect(
  null,
  actions
)(LoginView);
