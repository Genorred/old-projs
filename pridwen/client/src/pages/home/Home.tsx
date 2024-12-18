import React, {useEffect, useState} from 'react';
import Chat from "./components/Chat/Chat";
import axios, {AxiosResponse} from 'axios'

const Home = () => {
    interface User{
        id: number,
        name: string
    }
    const [isLoading, setIsLoading] = useState(true)
    const [users, setUsers] = useState<User[]>([])
    const fetchUsers = async () => {
        const response: AxiosResponse<User[]> = await axios.get('http://localhost:5000/users')
        console.log(response.data)
         setUsers(response.data)
        setIsLoading(false)
    }
    useEffect(()=> {
        fetchUsers()
    }, [])
    return (
        <div>
            <Chat/>
            {!isLoading
                ? <div>
                    {!isLoading
                        ? users[0].id
                        : 'xd'
                    }

                </div>
                : 'xd'
            }

        </div>
    );
};

export default Home;