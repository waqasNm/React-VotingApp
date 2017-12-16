import React, { Component } from 'react';
import { Modal, Button, ModalHeader, ModalFooter, ModalTitle, ModalBody } from 'react-bootstrap';


class ModalComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }



    render() {

        return (
            <div>
                {/* <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>
                    Launch demo modal
            </Button> */}
                {/* <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Text in a modal</h4>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <hr />
                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal> */}






                <div class="container">
                    <h2>Small Modal</h2>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Open modal
  </button>

                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-sm">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h4 class="modal-title">Modal Heading</h4>
                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                </div>

                                <div class="modal-body">
                                    Modal body..
        </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ModalComponent;
