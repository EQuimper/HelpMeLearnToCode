import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

export const ModalWelcome = ({ show, onHide }) => (
  <Modal show={show} aria-labelledby="modalWelcome">
    <Modal.Header>
      <Modal.Title>Welcome to HelpMeLearnToCode</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque eveniet, voluptatum sapiente corporis laborum, cupiditate iste ipsum fugit ea neque ex ducimus pariatur incidunt, natus reiciendis quo impedit tenetur!
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Not now</Button>
      <Button onClick={() => {
        onHide;
        browserHistory.push('/signup');
      }}>Join Us</Button>
    </Modal.Footer>
  </Modal>
);
