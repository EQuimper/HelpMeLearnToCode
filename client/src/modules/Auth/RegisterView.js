import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, Checkbox, HelpBlock, InputGroup } from 'react-bootstrap';
import './RegisterView.css';

class RegisterView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    remember: false,
    helpersBlock: {
      username: false,
      email: false,
      password: false,
      passwordConfirm: false
    }
  }

  validationUsername() {
    const { username, ready } = this.state;
    if (username.length >= 3) {
      return 'success';
    } else if (username !== '') {
      return 'error';
    }
  }

  validationEmail() {
    const { email } = this.state;
    //  Doesn't allow numbers in the domain name and doesn't allow for top level domains that are less than 2 or more than 3 letters (which is fine until they allow more). Doesn't handle multiple &quot;.&quot; in the domain (joe@abc.co.uk).
    if (email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return 'success';
    } else if (email.length > 3) {
      return 'error';
    }
  }

  validationPassword() {
    const { password, passwordConfirm } = this.state;
    // Password must be at least 4 characters, no more than 8 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.
    if (password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/)) {
      if (passwordConfirm === '') {
        return 'warning';
      } else if (password !== passwordConfirm) {
        return 'error';
      }
      return 'success';
    }
  }

  handleDisabledButton() {
    const { username, email, password, passwordConfirm } = this.state;

    if ((username === '') && (email === '') && (password === '') && (passwordConfirm === '') && (password !== passwordConfirm)) {
      return true;
    }

    return false;
  }

  render() {
    const { email, username, password, passwordConfirm, remember, errors, helpersBlock } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <Col md={6} mdOffset={3}>
          <div className="RegisterView-paper">
            <Form horizontal>

              <FormGroup controlId="UserRegisterEmail" validationState={this.validationUsername()}>
                <Col componentClass={ControlLabel} sm={4}>
                  Username
                </Col>
                <Col sm={8}>
                  <FormControl
                    autoFocus
                    onFocus={() => this.setState({ helpersBlock: { username: true } })}
                    onBlur={() => this.setState({ helpersBlock: { username: false } })}
                    value={username}
                    type="text"
                    placeholder="myUsername"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                  {helpersBlock.username ? (
                    <HelpBlock>Must have at least 3 characters!</HelpBlock>
                  ) : null}
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail" validationState={this.validationEmail()}>
                <Col componentClass={ControlLabel} sm={4}>
                  Email
                </Col>
                <Col sm={8}>
                  <FormControl
                    onFocus={() => this.setState({ helpersBlock: { email: true } })}
                    onBlur={() => this.setState({ helpersBlock: { email: false } })}
                    type="email"
                    value={email}
                    placeholder="user@example.com"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  {helpersBlock.email ? (
                    <HelpBlock>Must be a valid email!</HelpBlock>
                  ) : null}
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup
                controlId="formHorizontalPassword"
                validationState={this.validationPassword()}
              >
                <Col componentClass={ControlLabel} sm={4}>
                  Password
                </Col>
                <Col sm={8}>
                  <FormControl
                    onFocus={() => this.setState({ helpersBlock: { password: true } })}
                    onBlur={() => this.setState({ helpersBlock: { password: false } })}
                    type="password"
                    placeholder="mypassword"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                  />
                  {helpersBlock.password ? (
                    <HelpBlock>Must be more than 4 characters and less than 8 with 1 upper case letter!</HelpBlock>
                  ) : null}
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword" validationState={this.validationPassword()}>
                <Col componentClass={ControlLabel} sm={4}>
                  Confirm Password
                </Col>
                <Col sm={8}>
                  <FormControl
                    onFocus={() => this.setState({ helpersBlock: { passwordConfirm: true } })}
                    onBlur={() => this.setState({ helpersBlock: { passwordConfirm: false } })}
                    type="password"
                    placeholder="mypassword"
                    onChange={e => this.setState({ passwordConfirm: e.target.value })}
                    value={passwordConfirm}
                  />
                  {helpersBlock.passwordConfirm ? (
                    <HelpBlock>Must match the password!</HelpBlock>
                  ) : null}
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox
                    value={remember}
                    onChange={() => this.setState({ remember: !remember })}
                  >
                    Remember me
                  </Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    type="submit"
                    disabled={this.handleDisabledButton()}
                  >
                    Sign in
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </Col>
      </div>
    )
  }
}

export default RegisterView;
