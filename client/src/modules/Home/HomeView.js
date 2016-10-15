import React, { Component } from 'react';
import { ModalWelcome } from '../../components';
import './HomeView.css';

class HomeView extends Component {
  componentWillMount() {
    this.props.welcomeIfNotUser();
  }
  render() {
    const { isUser, closeWelcomeIfNoUser } = this.props;
    return (
      <div className="HomeView-root">
        <h1>Home</h1>
        <ModalWelcome show={isUser} onHide={() => closeWelcomeIfNoUser()} />
      </div>
    );
  }
}

export default HomeView;
