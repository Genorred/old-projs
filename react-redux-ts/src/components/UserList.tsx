import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../action-creators/user";
import {useAction} from "../hooks/useAction";
const UserList = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
const{fetchUsers} = useAction()
    useEffect( () => {
        fetchUsers()
    }, [])
    if(loading){
        return <h1>loading...</h1>
    }
    if(error) {
        <h1>error happened</h1>
    }
    console.log(users)
    return (
        <div>
            {users.map( user=>
                <div>{user.name}</div>)
            }
        </div>
    );
};

export default UserList;