import React, {useContext, useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Col} from "react-bootstrap";
import {Context} from "../index";
import {DeviceStoreType, TypeAndBrandType} from "../store/DeviceStore";
import {observer} from "mobx-react-lite";
const TypeBar = observer( () => {
    const {device} : { device: DeviceStoreType } = useContext(Context)
    const setDeviceType = (type: TypeAndBrandType) => () => {
        if(type === device.selectedType){
            device.setSelectedType({id:0, name:''})
        } else {
            device.setSelectedType(type)
        }
    }
    return (
            <ListGroup>
                {device?.types.map((type)=>
                    <ListGroup.Item
                        style={{cursor: "pointer"}}
                        active={type.id === device.selectedType.id}
                        onClick={setDeviceType(type)}
                        key={type.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                )}
            </ListGroup>
    );
});

export default TypeBar;