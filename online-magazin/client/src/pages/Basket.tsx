import React, {useContext, useEffect, useMemo, useState} from 'react';
import {DeviceStoreType, DeviceType} from "../store/DeviceStore";
import {Context} from "../index";
import BasketDevice from "../components/BasketDevice";
import {getBasketDevices, removeAllBasketDevices} from "../http/deviceAPI";
import {UserStoreType} from "../store/UserStore";
import {Card, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {routePaths} from "../routes";
import {observer} from "mobx-react-lite";

export interface BasketDeviceType {
    id: number,
    quantity: number,
    basketId: number,
    deviceId: number
}

export interface basketDevices {
    device: DeviceType,
    quantity: number
}

const Basket = observer(() => {
    const {device}: { device: DeviceStoreType } = useContext(Context)
    const [loading, setLoading] = useState<boolean>(true)
    const [devices, setDevices] = useState<basketDevices[]>([])
    useEffect(() => {
        getBasketDevices().then((data) => {
            device.setBasket(data)
        }).finally(() => setLoading(false))
    }, []);
    if (loading) {
        return <Spinner animation={"border"}/>
    }
    const deleteAll = () => {
        removeAllBasketDevices().then(() => {
            device.setBasket([])
            setDevices([])
        })
    }

    return (
        <Container>
            {device.basket[0]
                ? <>{device.basket.map((dev) => {
                    console.log('run', dev)
                    return <BasketDevice key={dev.device.img} dev={dev}/>
                })}
                    <Button className='m-2' onClick={deleteAll}>Clear the Basket</Button></>
                : <Card className='p-5 m-3 w-75'>
                    Your basket is empty now
                    <p>You can choose something on <Link to={routePaths.SHOP_ROUTE}>Shop page</Link></p>
                </Card>
            }
        </Container>
    );
});

export default Basket;