
export default function orderByProps (obj, propsOrder) {
    const sortedKeys = [];
    const result = [];

    for (const prop of propsOrder) {
        if (prop in obj) {
            result.push({key: prop, value: obj[prop]});
        }
    }

    for (const key in obj) {
        if (!propsOrder.includes(key)) {
            sortedKeys.push(key)
        }
    }

    sortedKeys.sort();

    for (const key of sortedKeys) {
        result.push({key, value: obj[key]})
    }

    return result;
}