import React, {Ref, RefObject, useEffect, useRef} from 'react';
import {Image} from "react-bootstrap";
import star from "../assets/small-star.svg";
import yellowStar from "../assets/small-yellow-star.svg";
const Rating = ({deviceRating}: {deviceRating: number}) => {
    let ratingArray: boolean[] = []
        for (let i = 0; i < deviceRating; i++) {
            ratingArray.push(true)
        }
    return (
        <div>
            <Image src={ratingArray[0]? yellowStar: star}/>
            <Image src={ratingArray[1]? yellowStar: star}/>
            <Image src={ratingArray[2]? yellowStar: star}/>
            <Image src={ratingArray[3]? yellowStar: star}/>
            <Image src={ratingArray[4]? yellowStar: star}/>
        </div>
    );
};

export default Rating;