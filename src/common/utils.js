
let idCounter = 20;
export const getRandomID = () => {
    return idCounter++;
}

export const omit = (obj, key) => {
    return Object.keys(obj)
        .filter(o => Array.isArray(key)
            ? !key.includes(o)
            : o !== key)
        .reduce((acc, key) => ({
            ...acc,
            [key]: obj[key]
        }), {})
}