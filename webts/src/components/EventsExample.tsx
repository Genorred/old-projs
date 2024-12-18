import React, {ChangeEvent, useEffect, useRef, useState} from 'react';


const EventsExample = () => {
    const [value, setValue] = useState <string> ('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const clickHandler = (e: React.MouseEvent <HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
 console.log('drag')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) =>{
        e.preventDefault()
        setIsDrag(false)
    }
    return (
        <div>
            <input type='text' value={value} onChange={changeHandler} placeholder='управляемый'/>
            <input ref={inputRef} placeholder='неуправляемый'/>
                <button onClick={clickHandler}>srcs</button>
            <div draggable onDrag={dragHandler} style={{backgroundColor:'red', width: '200px', height: '200px' }}></div>
            <div onDrop={dropHandler} onDragOver={dragWithPreventHandler} onDragLeave={leaveHandler} style={{backgroundColor: isDrag ? 'black' : 'red', width: '200px', height: '200px', marginTop: '20px' }}></div>
        </div>
    );
};

export default EventsExample;
