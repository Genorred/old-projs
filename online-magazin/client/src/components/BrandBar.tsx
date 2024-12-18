import React, {useContext} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {DeviceStoreType, TypeAndBrandType} from "../store/DeviceStore";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const BrandBar = observer( () => {
    const {device} : { device: DeviceStoreType } = useContext(Context)
    const setDeviceBrand = (brand: TypeAndBrandType) => () => {
        if(brand === device.selectedBrand){
            device.setSelectedBrand({id:0, name:''})
        } else {
            device.setSelectedBrand(brand)
        }
    }
    return (
        <Row className='d-flex'>
            {device.brands.map(brand=>
            <Card
                style={{cursor: "pointer"}}
                border={brand.id===device.selectedBrand.id ? 'danger' : 'light'}
                className='w-auto m-1 px-4 py-3'
                onClick={setDeviceBrand(brand)}
                key={brand.id}
            >
                {brand.name}
            </Card>
            )}
        </Row>
    );
});

export default BrandBar;