import * as axios from 'axios';
import {authFormDataHeader, authHeader} from "../helpers/auth-header";

const axiosInstance = axios.create({
    baseURL: "http://159.89.97.207/api/"
})

// places endpoint
export const placesAPI = {
    getCities(){
        return axiosInstance
            .get(
                `cargo/cities/`
            )
    },
    getRegions(){
        return axiosInstance
            .get(
                `cargo/regions/`
            )
    }
}

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
    getNextCargoTransportations(offset, from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "", vehicle_type = "" ) {
        const priceParam = to_price !== "" && from_price !== "" ? `&price__range=${from_price},${to_price}` : "";
        const weightParam = from_weight !== "" && to_weight !== "" ? `&weight__range=${from_weight},${to_weight}` : "";
        const volumeParam = from_volume !== "" && to_volume !== "" ? `&volume__range=${from_volume},${to_volume}` : "";
        return axiosInstance
            .get(
                `cargo/transportation?limit=10&offset=${offset}&vehicle_type=${vehicle_type}&from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}${priceParam}${weightParam}${volumeParam}`
            )
    },
    getFilteredCargoTransportations( from_region = "", from_city = "", to_region = "", to_city = "", from_weight = "", to_weight = "", from_volume = "", to_volume = "", from_price = "", to_price = "", vehicle_type = "" ) {
        const priceParam = to_price !== "" && from_price !== "" ? `&price__range=${from_price},${to_price}` : "";
        const weightParam = from_weight !== "" && to_weight !== "" ? `&weight__range=${from_weight},${to_weight}` : "";
        const volumeParam = from_volume !== "" && to_volume !== "" ? `&volume__range=${from_volume},${to_volume}` : "";
        return axiosInstance
            .get(
                `cargo/transportation?vehicle_type=${vehicle_type}&from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}${priceParam}${weightParam}${volumeParam}`
            )
    }
}

// auth endpoint
export const authAPI = {
    getUserData(){
        return axiosInstance
            .get(
                `auth/users/me`, { headers: authHeader() }
            )
    },
    getNextOrders(offset) {
        return axiosInstance
            .get(
                `users/proflie/published-ads?limit=10&offset=${offset}`, { headers: authHeader() }
            )
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
            )
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
    },
    registerDriver(data) {
        return axiosInstance
            .post(
                `users/drivers/register/`,
                data,
                { headers: authFormDataHeader() }
            )
    }
}

// placement endpoints
export const placementAPI = {
    cargoPlacement(cargo) {
        return axiosInstance
            .post(
                `cargo/`, cargo, { headers: authHeader() }
            )
    },
    transportationPlacement(transportation) {
        return axiosInstance
            .post(
                `cargo/transportation/`, transportation, { headers: authHeader() }
            )
    }
}

export const typesAPI = {
    getCargoTypes() {
        return axiosInstance
            .get(
                `users/cargo-types/`
            )
    }
}