export interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string
}


export interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress
}

export interface ITodo{
    id: number,
    title: 'string',
    completed: boolean
}