import React from 'react';
import {DeviceType} from "../store/DeviceStore";
import {Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom";
import {routePaths} from "../routes";
import {createBasketDevice} from "../http/deviceAPI";
import Button from "react-bootstrap/Button";

const DeviceItem = ({device}: { device: DeviceType }) => {
    const navigate = useNavigate()
    const devicePath = `${routePaths.DEVICE_ROUTE}/${device.id}`
    const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        createBasketDevice(device.id).then((data) => console.log('success', data.id))
    }
    return (
        <Col md={3}>
            <Card
                border='light'
                className='text-black-50 my-2 px-1 py-3 d-flex flex-column justify-content-between'
                style={{cursor: 'pointer', width: '160px', height: '200px'}}
                onClick={() => navigate(devicePath)}
            >
                <div style={{minHeight: 90}}
                     className='d-flex align-items-center justify-content-center'
                >
                    <Image style={{maxHeight: 90, maxWidth: 150}} src={`http://localhost:5000/${device.img}`}/>
                </div>
                <div>Samsung...</div>
                <div className=' text-black d-flex justify-content-between align-items-center'>
                    <div>
                        {device.name}
                    </div>
                    <div>
                        {device.rating} <img src={star}/>
                    </div>
                </div>
                <Button
                    variant={'outline-dark'}
                    onClick={addToBasket}
                    className='m-2 ms-0'
                >
                    add to basket
                </Button>
            </Card>
        </Col>
    );
};

export default DeviceItem;