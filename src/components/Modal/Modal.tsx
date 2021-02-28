import React from 'react'
import { Modal, Button } from 'react-bootstrap';

interface IModalWindow {
  show: boolean;
  count: number;
  handleStartClick: () => void;
}

function ModalWindow({ show, count, handleStartClick }: IModalWindow) {
  return (
    <Modal
      show={show}
      dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header>
        <Modal.Title id="example-custom-modal-styling-title">
          Your results: {count} points
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="success" onClick={handleStartClick}>Try again</Button>
      </Modal.Body>
    </Modal>
  )
}

export default ModalWindow

