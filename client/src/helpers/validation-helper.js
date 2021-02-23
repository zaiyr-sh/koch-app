export const validateNonEmptyLength = (field) => {
    if (field.length === 0) return "Поле не должно быть пустым";
}

export const validateMaxLength = (field, size) => {
    if (field.toString().length > size) return `Поле должно быть до ${size} цифр длиной`;
}

export const validateMinLength = (field, size) => {
    if (field.length < size) return `Поле должно быть от ${size} и выше символов длиной`;
}

export const validatePhoneNumber = (phone_number) => {
    if (phone_number.trim().length !== 13) return "Неправильно введенный формат номера телефона";
}

export const validatePersonName = (name) => {
    if (/\d/.test(name) || (name.length < 2)) return "Поле должно быть от 2 и выше символов длиной и не содержать чисел";
}

export const validatePassword = (password) => {
    if (!(/[a-zA-Z]/g.test(password) && /\d/.test(password)) || (password.length <= 8)) return "Пароль должен быть от 8 символов длиной, содержать одну латинскую букву и число";
}

export const verificationCode = (isVerified) => {
    if (!isVerified) return "Вы ввели неверный код";
}