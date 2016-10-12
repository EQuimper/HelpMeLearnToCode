import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
import './RegisterView.css';

class RegisterView extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    remember: false,
    errors: {}
  }

  validationPassword() {
    const { password, passwordConfirm } = this.state;
    if (password.match(/^[a-zA-Z]\w{5,14}$/)) {
      if (password !== passwordConfirm) {
        return 'error';
      }
      return 'success';
    }
  }

  render() {
    const { email, username, password, passwordConfirm, remember, errors } = this.state;
    return (
      <div>
        <h1>Register</h1>
        <Col md={8} mdOffset={2}>
          <div className="RegisterView-paper">
            <Form horizontal>

              <FormGroup controlId="UserRegisterEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Username
                </Col>
                <Col sm={10}>
                  <FormControl
                    value={username}
                    type="text"
                    placeholder="myUsername"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="email"
                    value={email}
                    placeholder="user@example.com"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </Col>
              </FormGroup>

              <FormGroup
                controlId="formHorizontalPassword"
                validationState={this.validationPassword()}
              >
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="mypassword"
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                  />
                  <FormControl.Feedback />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword" validationState={this.validationPassword()}>
                <Col componentClass={ControlLabel} sm={2}>
                  Confirm Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="mypassword"
                    onChange={e => this.setState({ passwordConfirm: e.target.value })}
                    value={passwordConfirm}
                  />
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
                  <Button type="submit">
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
