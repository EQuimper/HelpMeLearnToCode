import React, { Component } from 'react';
import 'whatwg-fetch';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import './App.css';
import NavBar from './NavBar';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class AppView extends Component {
  render() {
    const { route } = this.props;
    return (
      <div className="App">
        <NavBar route={route} />
        {this.props.children}
      </div>
    );
  }
}

export default AppView;
