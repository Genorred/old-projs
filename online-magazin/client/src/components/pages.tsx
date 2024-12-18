import React, {useContext, useEffect} from 'react';
import {Pagination} from "react-bootstrap";
import {DeviceStoreType} from "../store/DeviceStore";
import {Context} from "../index";
import {getDevices} from "../http/deviceAPI";
import {observer} from "mobx-react-lite";

const Pages = observer(() => {
    const {device}: {device: DeviceStoreType} = useContext(Context)
    const pageCount = Math.ceil(device.totalCount / device.limit)
    let pages: number[] = []
    for(let i=0; i<pageCount; i++){
            pages.push(i+1)
        }
    return (
        <Pagination className='mt-5'>
            {pages.map(page=>
                <Pagination.Item
                    key={page}
                    active={device.page===page}
                    onClick={()=> {
                        device.setPage(page)
                        console.log(device.page)
                    }}
                >{page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;