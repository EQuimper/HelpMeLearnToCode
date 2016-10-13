import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const ModalRegister = ({ show, onHide }) => (
  <Modal show={show} aria-labelledby="modalRegister">
    <Modal.Header closeButton>
      <Modal.Title>Welcome to HelpMeLearningToCode</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cumque eveniet, voluptatum sapiente corporis laborum, cupiditate iste ipsum fugit ea neque ex ducimus pariatur incidunt, natus reiciendis quo impedit tenetur!
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
);
