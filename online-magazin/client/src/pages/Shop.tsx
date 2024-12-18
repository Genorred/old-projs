import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row, Spinner} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import {observer} from "mobx-react-lite";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {DeviceStoreType} from "../store/DeviceStore";
import {Context} from "../index";
import {getBrands, getDevices, getTypes} from "../http/deviceAPI";
import Pages from "../components/pages";

const Shop = observer( () => {
    const {device}: {device: DeviceStoreType} = useContext(Context)
    const [loading, setLoading] = useState(true)
    useEffect( ()=>{
        getTypes().then(types=>device.setTypes(types))
        getBrands().then(brands=>device.setBrands(brands))
        getDevices(null, null, device.page, device.limit).then(data=>{
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        }).finally(()=>setLoading(false))
    }, [])
    if (loading) {
        return <Spinner animation={"grow"}/>
    }
    return (
        <Container>
            <Row className='mt-2'>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;