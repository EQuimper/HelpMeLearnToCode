import React from 'react';
import { browserHistory } from 'react-router';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap';

const NavBar = ({ route: { pathname } }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">HelpMeLearningToCode</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem active={pathname === '/' ? true : false} onClick={() => browserHistory.push('/')}>Home</NavItem>
        <NavItem
          active={pathname === '/paths' ? true : false}
          onClick={() => browserHistory.push('/paths')}
        >
          Paths
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem
          active={pathname === '/signup' ? true : false}
          onClick={() => browserHistory.push('/signup')}>
          Sign Up
        </NavItem>
        <NavItem href="#">My Account</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavBar;
