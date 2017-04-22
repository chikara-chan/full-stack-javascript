function filterKeys(obj, keys) {
    let rets = {}

    if (typeof obj !== 'object') {
        return obj
    }
    if (typeof keys === 'string') {
        keys = keys.split(/\s+/)
    }
    Object.keys(obj).forEach(key => {
        if (!keys.includes(key)) {
            rets[key] = obj[key]
        }
    })

    return rets
}

function filterNullKeys(obj) {
    let rets = {}

    Object.keys(obj).forEach(key => {
        if (obj[key] != null && obj[key] != '') {
            rets[key] = obj[key]
        }
    })

    return rets
}

function deleteKeys(obj, keys) {
    if (typeof obj !== 'object') {
        return
    }
    if (typeof keys === 'string') {
        keys = keys.split(/\s+/)
    }
    Object.keys(obj).forEach(key => {
        if (keys.includes(key)) {
            delete obj[key]
        }
    })
}

export default {
    filterKeys,
    deleteKeys,
    filterNullKeys
}
