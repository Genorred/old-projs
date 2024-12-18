import {$authHost, $host} from "./index";
import {DeviceType} from "../store/DeviceStore";
import {useState} from "react";
export const createDevice = async (device: FormData) => {
    const {data} = await $authHost.post('api/device', device, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return data
}
export const getDevices = async (brandId: number|null, typeId: number|null, page: number, limit: number=30) => {
    const {data} = await $host.get('api/device', {params: {
        brandId, typeId, page, limit
        }})
    return data
}
export const getDevice = async (id: string|undefined) => {
    const {data} = await $host.get('api/device/'+id)
    return data
}



export const createType = async (name: string) => {
    const {data} = await $authHost.post('api/type', {name})
    return data
}
export const getTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}



export const createBrand = async (name: string) => {
    const {data} = await $authHost.post('api/brand', {name})
    return data
}
export const getBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}



export const getBasketDevices = async () => {
    const {data} = await $authHost.get('api/basket')
    return data
}
export const createBasketDevice = async (deviceId: number) => {
    const {data} = await $authHost.post('api/basket/create', {deviceId})
    return data
}
export const increaseBasketDevice = async (deviceId: number) => {
    const {data} = await $authHost.put('api/basket/increase', {deviceId})
    return data
}
export const decreaseBasketDevice = async (deviceId: number) => {
    const {data} = await $authHost.put('api/basket/decrease', {deviceId})
    return data
}
export const removeAllBasketDevices = async () => {
    const {data} = await $authHost.delete('api/basket')
    return data
}
export const removeBasketDevice = async (deviceId: number) => {
    const {data} = await $authHost.delete('api/basket/'+deviceId)
    return data
}


export const addRating = async (deviceId: number, rate: number, review: string) => {
    const {data} = await $authHost.post('api/rating', {deviceId, rate, review})
    return data
}
export const changeRating = async (deviceId: number, rate: number, review: string) => {
    const {data} = await $authHost.put('api/rating', {deviceId, rate, review})
    return data
}
export const removeUserRatings = async () => {
    const {data} = await $authHost.delete('api/rating')
    return data
}
export const removeRating = async (deviceId: number) => {
    const {data} = await $authHost.delete('api/rating/'+deviceId)
    return data
}
export const getDeviceRating = async (deviceId: string) => {
    const {data} = await $host.get('api/rating/'+deviceId)
    return data
}
export const getUserRatings = async () => {
    const {data} = await $authHost.get('api/rating')
    return data
}








