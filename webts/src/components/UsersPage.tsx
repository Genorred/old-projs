import React, {useEffect, useState} from 'react';
import {ITodo, IUser} from "../types/types";
import axios from "axios";
import UserItem from "./UserItem";
import List from "./List";

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(()=>{
        fetchUsers()
    }, [])
    async function fetchUsers () {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <List items={users} renderItem={(user: IUser)=><UserItem key={user.id} user={user}/> }/>
        </div>
    );
};

export default UsersPage;