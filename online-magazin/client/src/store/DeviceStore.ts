import {makeAutoObservable} from "mobx";
import {basketDevices} from "../pages/Basket";
export interface TypeAndBrandType{
    id: number,
    name: string
}
export interface infoType {
    title: string,
    description: string
}
export interface DeviceType {
    id: number,
    name: string,
    price: number,
    brandId?: number,
    typeId?: number,
    info?: infoType[]
    rating: number,
    img: string,
}
class DeviceStore{
    private _types:  TypeAndBrandType[]
    private _brands:  TypeAndBrandType[]
    private _devices: DeviceType[]
    private _selectedType :TypeAndBrandType
    private _selectedBrand :TypeAndBrandType
    private _page: number
    private _limit: number
    private _totalCount: number
    private _basket: basketDevices[]
    constructor() {
        this._types = []
        this._brands = []
        this._devices = []
        this._selectedType = {id:0, name:''}
        this._selectedBrand = {id:0, name:''}
        this._page = 1
        this._limit = 20
        this._totalCount = 0
        this._basket = [{device:
                {
                    id: 0,
                    name: '',
                    price: 0,
                    brandId: 0,
                    typeId: 0,
                    info: [],
                    rating: 0,
                    img: '',
                }, quantity: 0
        }]
        makeAutoObservable(this)
    }
    setBasket (basket: basketDevices[]) {
        this._basket = basket
    }
    setPage (page: number) {
        this._page = page
    }
    setLimit (limit: number) {
        this._limit = limit
    }
    setTotalCount (totalCount: number) {
        this._totalCount = totalCount
    }
    setTypes (types: TypeAndBrandType[]){
        this._types = types
    }
    setBrands (brands: TypeAndBrandType[]){
        this._brands = brands
    }
    setDevices(devices: DeviceType[]){
        this._devices = devices
    }
    setSelectedType (type: TypeAndBrandType) {
        this._page=1
        this._selectedType = type
    }
    setSelectedBrand (brand: TypeAndBrandType) {
        this._page=1
        this._selectedBrand = brand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get page () {
        return this._page
    }
    get limit () {
        return this._limit
    }
    get totalCount () {
        return this._totalCount
    }
    get basket () {
        return this._basket
    }
}
const deviceStore = new DeviceStore()
export type DeviceStoreType = typeof deviceStore
export default DeviceStore