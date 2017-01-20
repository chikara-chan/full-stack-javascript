function filterObject(obj, filterKeys) {
    let rets = {}

    Object.keys(obj).forEach(key => {
        if (!filterKeys.includes(key)) {
            rets[key] = obj[key]
        }
    })

    return rets
}

export default {
    filterObject
}
