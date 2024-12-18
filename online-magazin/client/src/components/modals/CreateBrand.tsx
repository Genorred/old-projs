import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";
interface propTypes {
    show: boolean,
    onHide: ()=>(void)
}
const CreateBrand = (props: propTypes) => {
    const {show, onHide} = props
    const [name, setName] = useState<string>('')
    const addBrand = () => {
        createBrand(name)
        onHide()
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={e => {
                    e.preventDefault()
                    addBrand()
                }}>
                    <Form.Control onChange={(e)=>setName(e.target.value)} value={name} placeholder='enter a new brand'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addBrand}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;