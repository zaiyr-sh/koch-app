export function authHeader(contentType = 'application/json') {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access) return { 'Authorization': 'Bearer ' + user.access, 'content-type': contentType };
    else return {};
}