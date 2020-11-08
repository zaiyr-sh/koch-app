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
    login(phone_number, password) {
        return axiosInstance
            .post(
                `auth/jwt/create`,
                { phone_number, password}
            );
    },
}



