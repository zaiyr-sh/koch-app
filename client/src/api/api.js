import * as axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "http://159.89.97.207/api/"
})

// cargoes endpoint
export const cargoesAPI = {
    getCargoes() {
        return axiosInstance
            .get(
                'cargo'
            )
    }
}

// auth endpoint
export const authAPI = {
    myUserData(){
        return axiosInstance
            .get(
                `auth/me`
            );
    },
    login(email, password, rememberMe = false) {
        return axiosInstance
            .post(
                `auth/login`,
                { email, password, rememberMe }
            );
    },
    logout() {
        return axiosInstance
            .delete(
                `auth/login`,
            );
    }
}
