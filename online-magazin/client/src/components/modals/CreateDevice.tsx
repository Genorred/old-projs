import React, {useContext, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Col, Dropdown, Form, Row} from "react-bootstrap";
import {Context} from "../../index";
import {DeviceStoreType, TypeAndBrandType} from "../../store/DeviceStore";
import {createDevice, getBrands, getDevices, getTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

interface propTypes {
    show: boolean,
    onHide: () => (void)
}

const CreateDevice = observer((props: propTypes) => {
    const {show, onHide} = props
    const {device}: { device: DeviceStoreType } = useContext(Context)


    useEffect( ()=>{
        getTypes().then(types=>device.setTypes(types))
        getBrands().then(brands=>device.setBrands(brands))
    }, [])
    interface info {
        title: string,
        description: string,
        number: number
    }

    const [name, setName] = useState<string>('')
    const [price, setPrice] = useState<number>(0)
    const [file, setFile] = useState<File>()
    const [type, setType] = useState<TypeAndBrandType>()
    const [brand, setBrand] = useState<TypeAndBrandType>()
    const [deviceInfo, setDeviceInfo] = useState<info[]>([])

    const addInfo = () => {
        setDeviceInfo([...deviceInfo, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number: number) => {
        setDeviceInfo(deviceInfo.filter(info => info.number !== number))
    }
    const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }
    const changeInfo = (key: string, value: string, number: number) => {
        setDeviceInfo(deviceInfo.map(info =>
            info.number === number ? {...info, [key]: value} : info
        ))
    }
    const addDevice = () => {
        if (file!==undefined){
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', `${device.selectedBrand.id}`)
        formData.append('typeId', `${device.selectedType.id}`)
        formData.append('info', JSON.stringify(deviceInfo))
        createDevice(formData).then(data => onHide())
    }}
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add a new device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={e => {
                    e.preventDefault()
                    addDevice()
                }}>
                    <Dropdown className='mt-4'>
                        <Dropdown.Toggle>
                            {device.selectedType.name || 'choose type'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={()=>device.setSelectedType(type)}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-4'>
                        <Dropdown.Toggle>
                            {device.selectedBrand.name || 'choose brand'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item onClick={()=>device.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-3'
                        placeholder='write device name'
                        value={name}
                        onChange={(e)=> {
                            setName(e.target.value)
                            e.stopPropagation()
                        }}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='write device price'
                        type='number'
                        value={price}
                        onChange={(e)=> {
                            setPrice(Number(e.target.value))
                            e.stopPropagation()
                        }}
                    />
                    <Form.Control
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button onClick={() => addInfo()}>
                        add a new characteristic
                    </Button>
                    {deviceInfo.map(info =>
                        <Row className='mt-4' key={info.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='enter a name of property'
                                    value={info.title}
                                    onChange={(e)=>
                                        changeInfo('title', e.target.value, info.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder='enter a description of property'
                                    value={info.description}
                                    onChange={(e)=>
                                        changeInfo('description', e.target.value, info.number)}
                                />
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(info.number)} variant='outline-danger'>Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Close</Button>
                <Button variant='outline-success' onClick={()=> {
                    onHide()
                    addDevice()
                }
                }>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;