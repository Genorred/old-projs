import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [typeIsVisible, setTypeIsVisible] = useState<boolean>(false)
    const [brandIsVisible, setBrandIsVisible] = useState<boolean>(false)
    const [deviceIsVisible, setDeviceIsVisible] = useState<boolean>(false)
    return (
        <Container className='d-flex flex-column'>
            обновляется страница
            <Button variant='outline-dark' className='p-2 mt-4' onClick={()=>setTypeIsVisible(true)}>
                Add a new type
            </Button>
            <Button variant='outline-dark' className='p-2 mt-4' onClick={()=>setBrandIsVisible(true)}>
                Add a new brand
            </Button>
            <Button variant='outline-dark' className='p-2 mt-4' onClick={()=>setDeviceIsVisible(true)}>
                Add a new device
            </Button>
            <CreateType show={typeIsVisible} onHide={()=>setTypeIsVisible(false)}/>
            <CreateBrand show={brandIsVisible} onHide={()=>setBrandIsVisible(false)}/>
            <CreateDevice show={deviceIsVisible} onHide={()=>setDeviceIsVisible(false)}/>
        </Container>
    );
};

export default Admin;