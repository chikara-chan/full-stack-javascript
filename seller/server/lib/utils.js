function filterKeys(obj, keys) {
    let rets = {}

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

function deleteKeys(obj, keys) {
    if (typeof keys === 'string') {
        keys = keys.split(/\s+/)
    }

    Object.keys(obj).forEach(key => {
        if (!keys.includes(key)) {
            delete obj[key]
        }
    })
}

export default {
    filterKeys,
    deleteKeys
}
