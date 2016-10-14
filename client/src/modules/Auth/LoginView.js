import React from 'react';
import { Link } from 'react-router';
import { Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { FieldFormComponent } from '../../components';
import { validate } from './LoginValidation';
import './RegisterView.css';

// TODO: Clean this messy component

const LoginView = ({ pristine, submitting, handleSubmit }) => {
  return (
    <div>
      <h1>Log In</h1>
      <Col md={6} mdOffset={3}>
        <Form
          horizontal
          onSubmit={handleSubmit}
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

          <Field
            type="password"
            name="password"
            labelSize={4}
            fieldSize={8}
            placeholder="Please enter your password"
            component={FieldFormComponent}
          >
            Password
          </Field>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button
                bsStyle="primary"
                bsSize="large"
                type="submit"
                disabled={submitting || pristine}
              >
                Log In
              </Button>
            </Col>
          </FormGroup>
        </Form>
        <Link to="/signup">
          Don't have an account?
        </Link>
      </Col>
    </div>
  );
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginView)
