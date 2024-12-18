import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row, Card, Form} from "react-bootstrap";
import {Context} from "../index";
import {DeviceStoreType, DeviceType} from "../store/DeviceStore";
import {useLocation, useParams} from "react-router";
import bigStar from '../assets/bigStar.png'
import Button from "react-bootstrap/Button";
import {addRating, createBasketDevice, getDevice, getDeviceRating} from "../http/deviceAPI";
import {routePaths} from "../routes";
import {UserStoreType} from "../store/UserStore";
import Rating from "../components/Rating";
import HoverRating from "../components/HoverRating";

interface RatingType {
    id: number,
    rate: number,
    review: string
}

const DevicePage = () => {
    const {user}: { user: UserStoreType } = useContext(Context)
    const [item, setItem] = useState<DeviceType>()
    const [ratings, setRatings] = useState<RatingType[]>()
    const [rate, setRate] = useState<number>(0)
    const [description, setDescription] = useState<string>()
    const {id} = useParams()
    useEffect(() => {
        getDevice(id).then(device => {
                setItem(device)
                if (id) {
                    getDeviceRating(id).then(ratings => setRatings(ratings))
                }
            }
        )
    }, [])
    const sendComment = () => {
        addRating(Number(id), rate, String(description)).then((data=>console.log(data)))
    }
    const addToBasket = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        createBasketDevice(Number(id)).then((data) => console.log('success', data.id))
    }
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image src={`http://localhost:5000/${item?.img}`}
                           style={{width: '300px', height: '300px'}}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center">
                        <h2>{item?.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                backgroundSize: 'cover',
                                fontSize: 64
                            }}
                        >
                            {item?.rating}
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                          style={{
                              width: 300,
                              height: 300,
                              border: 'solid lightgray 5px'
                          }}
                    >
                        <h3>
                            From: {item?.price}
                        </h3>
                        <Button
                            onClick={addToBasket}
                            variant='outline-dark'
                        >
                            add to the basket
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row className='m-3'>
                <h1>
                    Characteristics
                </h1>
                {item?.info && item?.info.map((info, index) =>
                    <Row key={info.title}
                         style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: '10px'}}
                    >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
            <Row className='mx-5'>
                {ratings?.map(rating=>
                <Card border={'light'} className='p-5'>
                    <h6>{user.user?.email}</h6>
                    <Rating deviceRating={rating.rate}/>
                    <div>
                        {rating.review}
                    </div>
                </Card>
                )}
            </Row>
            <Row>
                <Card className='p-3'>
                    <Form>
                            <h3 className='mx-3'>Leave a comment</h3>
                            <HoverRating rate={rate} setRate={setRate}/>
                        <div className='w-75 mt-3'>
                            <Form.Control
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                style={{minHeight: '8rem'}}
                                placeholder='write a description'
                            />
                            <Button
                                className='px-5 mt-2 float-end'
                                onClick={sendComment}
                            >Send</Button>
                        </div>
                    </Form>
                </Card>
            </Row>
        </Container>
    );
};


export default DevicePage;