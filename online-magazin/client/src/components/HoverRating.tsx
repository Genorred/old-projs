import React from 'react';
import {Image} from "react-bootstrap";
import star from '../assets/star.svg'
import starYellow from '../assets/star-yellow.svg'
import '../App.css'
interface RatingProps {
    rate: number,
    setRate:(rate: number)=>void
}
const HoverRating = ({rate, setRate}: RatingProps) => {
    return (
        <div className='d-flex flex-row-reverse w-25 justify-content-center'>
            <Image src={rate>4? starYellow: star} className='stars' onClick={()=>setRate(5)}/>
            <Image src={rate>3? starYellow: star} className='stars' onClick={()=>setRate(4)}/>
            <Image src={rate>2? starYellow: star} className='stars' onClick={()=>setRate(3)}/>
            <Image src={rate>1? starYellow: star} className='stars' onClick={()=>setRate(2)}/>
            <Image src={rate>0? starYellow: star} className='stars' onClick={()=>setRate(1)}/>
        </div>
    );
};

export default HoverRating;