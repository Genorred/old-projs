import React from 'react';
import {IUser} from "../types/types";
interface UserItemProps {
    user: IUser
}
const UserItem = ({user}: UserItemProps) => {
    return (
        <div>
            {user.id}. {user.name} lives in {user.address.city}
        </div>
    );
};

export default UserItem;