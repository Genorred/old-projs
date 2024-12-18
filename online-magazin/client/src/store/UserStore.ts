import {makeAutoObservable} from "mobx";
import DeviceStore from "./DeviceStore";
export interface USER {
    id: number
    email: string
    role: string,
}
class UserStore{
    _isAuth = false
    _user: USER | null = {
        id: 0,
        email: '',
        role: 'USER'
    }
    constructor() {
        makeAutoObservable(this)
    }
    setIsAuth (bool: boolean){
        this._isAuth = bool
    }
    setUser (user: USER | null){
        this._user = user
    }
    get isAuth(){
        return this._isAuth
    }
    get user(){
        return this._user
    }
}
const userStore = new UserStore()
export type UserStoreType = typeof userStore
export default UserStore