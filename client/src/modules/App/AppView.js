import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import NavBar from './NavBar';

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
