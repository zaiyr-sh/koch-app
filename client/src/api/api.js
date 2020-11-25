import * as axios from 'axios';
import {authHeader} from "../helpers/auth-header";

const axiosInstance = axios.create({
    baseURL: "http://159.89.97.207/api/"
})

// cargoes endpoint
export const cargoesAPI = {
    getCargoes() {
        return axiosInstance
            .get(
                `cargo/`
            )
    },
    getNextCargoes(offset, from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "" ) {
        const priceParam = to_price !== "" && from_price !== "" ? `&price__range=${from_price},${to_price}` : "";
        const weightParam = from_weight !== "" && to_weight !== "" ? `&weight__range=${from_weight},${to_weight}` : "";
        const volumeParam = from_volume !== "" && to_volume !== "" ? `&volume__range=${from_volume},${to_volume}` : "";
        return axiosInstance
            .get(
                `cargo?limit=10&offset=${offset}&from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}${priceParam}${weightParam}${volumeParam}`
            )
    },
    getFilteredCargoes( from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "" ) {
        const priceParam = to_price !== "" && from_price !== "" ? `&price__range=${from_price},${to_price}` : "";
        const weightParam = from_weight !== "" && to_weight !== "" ? `&weight__range=${from_weight},${to_weight}` : "";
        const volumeParam = from_volume !== "" && to_volume !== "" ? `&volume__range=${from_volume},${to_volume}` : "";
        return axiosInstance
            .get(
                `cargo?from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}${priceParam}${weightParam}${volumeParam}`
            )
    },
    getCargoCities(){
        return axiosInstance
            .get(
                `cargo/cities/`
            )
    },
    getCargoRegions(){
        return axiosInstance
            .get(
                `cargo/regions/`
            )
    }
}

// Cargo Transportation endpoint
export const cargoTransportationAPI = {
    getCargoTransportations() {
        return axiosInstance
            .get(
                `cargo/transportation/`
            )
    },
}

// auth endpoint
export const authAPI = {
    getUserData(){
        return axiosInstance
            .get(
                `auth/users/me`, { headers: authHeader() }
            );
    },
    getNextOrders(offset) {
        return axiosInstance
            .get(
                `users/proflie/published-ads?limit=10&offset=${offset}`, { headers: authHeader() }
            );
    },
    getUserOrders() {
        return axiosInstance
            .get(
                `users/proflie/published-ads/`, { headers: authHeader() }
            )
    },
    login(phone_number, password) {
        return axiosInstance
            .post(
                `auth/jwt/create`,
                { phone_number, password}
            );
    },
    updateUserProfile(clientProfile) {
        return axiosInstance
            .put(
                `auth/users/me/`, clientProfile, { headers: authHeader() }
            )
    }
}

// registration endpoint
export const registrationAPI = {
    register(name, surname, user_type, phone_number, password) {
        return axiosInstance
            .post(
                `auth/users/`,
                {name, surname, user_type, phone_number, password}
            )
    }
}



