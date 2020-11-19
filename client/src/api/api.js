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
                `cargo`
            )
    },
    getNextCargoes(offset, from_region, from_city, to_region, to_city, weight, volume, length, width, height, from_price, to_price) {
        const priceParam = from_price === "" && to_price === "" ? "" : `&price__range=${from_price},${to_price}`
        return axiosInstance
            .get(
                `cargo/?limit=10&offset=${offset}&from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}&weight=${weight}&volume=${volume}&length=${length}&width=${width}&height=${height}
                ${priceParam}`
            )
    },
    getFilteredCargoes(from_region, from_city, to_region, to_city, weight, volume, length, width, height, from_price, to_price) {
        // const priceParam = to_price === "" && from_price ? `price=${from_price}` : `price__range=${from_price},${to_price}`;
        return axiosInstance
            .get(
                `cargo?
                from_region=${from_region}&from_city=${from_city}&to_region=${to_region}&to_city=${to_city}&weight=${weight}&volume=${volume}&length=${length}&width=${width}&height=${height}
                &price__range=${from_price},${to_price}`
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

// auth endpoint
export const authAPI = {
    getUserData(){
        return axiosInstance
            .get(
                `auth/users/me`, { headers: authHeader() }
            );
    },
    getUserOrders() {
        return axiosInstance
            .get(
                `/users/proflie/published-ads/`, { headers: authHeader() }
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



