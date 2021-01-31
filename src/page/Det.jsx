import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';

const Det = (props) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);
    return (
        <div> 
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <div className className='Besar'>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                </div>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleShow1}>
                    Are you sure?
                </Button>
                </Modal.Footer>
                <Modal className='kecil' show={show1} onHide={handleClose1}>
                
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <div>
                    <Button className='confirmationButton' variant="secondary" onClick={handleClose}>
                        Yes
                    </Button>
                    <Button className='confirmationButton1' variant="primary" onClick={handleClose1}>
                        No
                    </Button>
                    </div>
                </Modal>
            </Modal>
            
        {/* <p className="description">{props.description}</p> */}
        </div> 
    )
}

export default Det