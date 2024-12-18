import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UserList from "./components/UserList";
import {fetchUsers} from "./action-creators/user";


const App = () => {
    const state = useSelector(state => state)

    return (
        <div>
            <UserList/>
            state
        </div>
    );
};

export default App;