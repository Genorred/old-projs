import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from "react-bootstrap";
import {createBrand, createType} from "../../http/deviceAPI";
interface propTypes {
    show: boolean,
    onHide: ()=>(void)
}
const CreateType = (props: propTypes) => {
    const {show, onHide} = props
    const [name, setName] = useState<string>('')
    const addType = () => {
        createType(name)
            .then(()=>setName(''))
            .then(()=>onHide())
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
                    Add a new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={e => {
                    e.preventDefault()
                    addType()
                }}>
                    <Form.Control onChange={(e)=> {
                        setName(e.target.value)
                        e.stopPropagation()
                    }} value={name} placeholder='enter a new type'/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={addType}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;