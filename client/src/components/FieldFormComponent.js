import React, { Component } from 'react';
import {FormGroup, FormControl, ControlLabel, Col, HelpBlock } from 'react-bootstrap';

export const FieldFormComponent = ({
  placeholder,
  type,
  input,
  meta: { touched, error },
  autoFocus,
  meta,
  children,
  labelSize,
  fieldSize,
  touch
}) => {

  const checkState = () => {
    if (touched) {
      if (error) {
        return 'error';
      } else {
        return 'success';
      }
    }
    return null;
  }

  return (
    <FormGroup controlId={input.name} validationState={checkState()}>
      <Col componentClass={ControlLabel} sm={labelSize}>
        {children}
      </Col>
      <Col sm={fieldSize}>
        <FormControl
          {...input}
          autoFocus={autoFocus}
          type={type}
          placeholder={placeholder}
        />
          <HelpBlock>
            {touched && error ? error : null}
          </HelpBlock>
        <FormControl.Feedback />
      </Col>
    </FormGroup>
  );
}
