import React, {useContext, useEffect, useRef, useState} from 'react';
import {Card, Image, Spinner} from "react-bootstrap";
import {DeviceStoreType, DeviceType} from "../store/DeviceStore";
import {Context} from "../index";
import {basketDevices, BasketDeviceType} from "../pages/Basket";
import Rating from "./Rating";
import {
    decreaseBasketDevice,
    increaseBasketDevice,
    removeAllBasketDevices,
    removeBasketDevice
} from "../http/deviceAPI";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";

const BasketDevice  =observer( ({dev}: {dev: basketDevices}) => {
    const {device}: {device: DeviceStoreType} = useContext(Context)
    const [qtty, setQtty] = useState<number>(dev.quantity)
    const increase = () => {
        increaseBasketDevice(dev.device.id).then((data)=>setQtty(data.quantity))
    }
    const decrease = () => {
        if(qtty>1){
        decreaseBasketDevice(dev.device.id).then((data)=>setQtty(data.quantity))
    }}
    const deleteOne = () => {
        removeBasketDevice(dev.device.id).then(()=>{
            device.setBasket(device.basket.filter(device=>device.device.id!==dev.device.id))
        })
    }

    return (
        <div>
            <Card.Body className='d-flex align-items-center'>
                <div className='mx-1 d-flex flex-column align-items-center'>
                    <h4> {dev.device.name} </h4>
                    <Image
                        style={{maxWidth: 200, maxHeight: 200}}
                        src={'http://localhost:5000/' + dev.device.img}
                    />
                </div>
                <div className='d-flex flex-column justify-content-evenly' style={{height: 80}}>
                    <Rating deviceRating={dev.device.rating}/>
                    <h6>{dev.device.price}</h6>
                </div>
                <div className='d-flex ms-auto flex-row justify-content-center align-content-center p-3'>
                    <div className='d-flex'>
                        <div
                            style={{fontSize: 25}}
                        >
                           quantity: {qtty}
                        </div>
                        <div className='ms-1 text-center'
                             onClick={increase}
                             style={{width: 40, height: 40, display: 'inline-block', fontSize: 25,
                                 backgroundColor: 'black', color: 'white', borderRadius: 5}}
                        >
                            +
                        </div>
                        <div className='ms-1 text-center'
                             onClick={decrease}
                             style={{width: 40, height: 40, display: 'inline-block', fontSize: 25,
                                 backgroundColor: 'black', color: 'white', borderRadius: 5}}
                        >
                            -
                        </div>
                        <Button
                            onClick={deleteOne}
                            className='ms-2'
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </Card.Body>
        </div>
    );
});

export default BasketDevice;