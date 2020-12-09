export const minutes_with_leading_zeros = (dt) => {
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
}

export const hours_with_leading_zeros = (dt) => {
    return (dt.getHours() < 10 ? '0' : '') + dt.getHours();
}

export const dates_with_leading_zeros = (dt) => {
    return (dt.getDate() < 10 ? '0' : '') + dt.getDate();
}

export const months_with_leading_zeros = (dt) => {
    return (dt.getMonth() < 10 ? '0' : '') + dt.getMonth();
}