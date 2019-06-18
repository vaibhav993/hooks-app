export const validName = (value) => {
    return /^[a-zA-Z\s]+$/.test(value.trim());
}

export const validEmail = (value) => {
    return /^([0-9a-zA-Z]([-.+\w]*[0-9a-zA-Z])*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?))$/.test(
        value
    );
}

export const validPhoneNumber = (value) => {
    return /^[ 0-9+-]+$/.test(value.trim());
}

export const validNumber = (value) => {
    return /^\d+$/.test(value);
}