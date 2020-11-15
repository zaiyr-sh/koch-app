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
    getNextCargoes(offset) {
        return axiosInstance
            .get(
                `cargo/?limit=10&offset=${offset}`
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



