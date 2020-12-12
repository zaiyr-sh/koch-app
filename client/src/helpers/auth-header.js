export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { 'Authorization': 'Bearer ' + user.access };
    } else {
        return {};
    }
}

export function authFormDataHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.access) {
        return { 'Authorization': 'Bearer ' + user.access, 'content-type': 'multipart/form-data' };
    } else {
        return {};
    }
}