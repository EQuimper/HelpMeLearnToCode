import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';
import { ModalRegister } from '../../components';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class AppView extends Component {
  render() {
    const { route, ui: { modals: { registerModal } }, auth, closeModal } = this.props;
    return (
      <div className="App">
        <NavBar route={route} isUser={auth.isUser} />
        {this.props.children}
        <ModalRegister show={registerModal.show} user={auth.user} onHide={() => closeModal()} />
      </div>
    );
  }
}

export default AppView;
