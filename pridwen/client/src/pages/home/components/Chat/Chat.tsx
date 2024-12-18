import React from 'react';
import './Chat.css'
import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';
const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat-bckg'>
            </div>
            <div className='chat-input-form'>
                <Input/>
                <Button>send</Button>
            </div>
        </div>
    );
};

export default Chat;