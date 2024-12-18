import React, {useContext, useEffect, useState} from 'react';
import {Card, Col, Row, Spinner} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Context} from "../index";
import {DeviceStoreType} from "../store/DeviceStore";
import DeviceItem from "./DeviceItem";
import {getBrands, getDevices, getTypes} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const DeviceList =observer( () => {
    const {device}: {device: DeviceStoreType} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        setLoading(true)
        getDevices(device.selectedBrand.id, device.selectedType.id,
            device.page, device.limit).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
            console.log(data)
        }).finally(()=>setLoading(false))

    }, [device.page, device.selectedBrand, device.selectedType])
    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
            <Row className='d-flex'>
                {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
    );
});

export default DeviceList;