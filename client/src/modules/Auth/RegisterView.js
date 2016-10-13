import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, ControlLabel, Button, Checkbox, HelpBlock, InputGroup } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FieldFormComponent } from '../../components';
import { validate } from './RegisterValidation';
import './RegisterView.css';

// TODO: Clean this messy component

const RegisterView = ({ registerUser, pristine, submitting, handleSubmit, SubmissionError, error }) => {
  return (
    <div>
      <h1>Register</h1>
      <Col md={6} mdOffset={3}>
        <Form
          horizontal
          onSubmit={handleSubmit(registerUser)}
        >

          <Field
            type="text"
            value="username"
            name="username"
            labelSize={4}
            fieldSize={8}
            placeholder="Please enter your username"
            component={FieldFormComponent}
          >
            Username
          </Field>

          {error ? error : null}

          <Field
            type="email"
            name="email"
            labelSize={4}
            fieldSize={8}
            placeholder="Please enter your email"
            component={FieldFormComponent}
          >
            Email
          </Field>

          <Field
            type="password"
            name="password"
            labelSize={4}
            fieldSize={8}
            placeholder="Please enter a password"
            component={FieldFormComponent}
          >
            Password
          </Field>

          <Field
            type="password"
            name="confirmPassword"
            labelSize={4}
            fieldSize={8}
            placeholder="Confirm your password"
            component={FieldFormComponent}
          >
            Confirm Password
          </Field>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                bsStyle="primary"
                bsSize="large"
                type="submit"
                disabled={submitting || pristine}
              >
                Sign Up
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Col>
    </div>
  );
}

export default reduxForm({
  form: 'RegisterForm',
  validate
})(RegisterView)
