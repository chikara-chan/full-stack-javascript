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

function addZeros(str, targetLength = 2) {
    while (str.length < targetLength) {
        str = `0${str}`
    }

    return str
}

function formatDate(timestamp, format = 'YYYY-MM-DD hh:mm:ss') {
    const date = new Date(timestamp),
        year = `${date.getFullYear()}`,
        month = `${date.getMonth() + 1}`,
        day = `${date.getDate()}`,
        hours = `${date.getHours()}`,
        minutes = `${date.getMinutes()}`,
        seconds = `${date.getSeconds()}`,
        rMatch = /Y+|M+|D+|h+|m+|s+|S+/g

    return format.replace(rMatch, match => {
        const len = match.length

        switch (match[0]) {
            case 'Y':
                return year.slice(-len)
            case 'M':
                return addZeros(month).slice(-len)
            case 'D':
                return addZeros(day).slice(-len)
            case 'h':
                return addZeros(hours).slice(-len)
            case 'm':
                return addZeros(minutes).slice(-len)
            case 's':
                return addZeros(seconds).slice(-len)
        }
    })
}

export default {
    filterKeys,
    deleteKeys,
    filterNullKeys,
    formatDate
}
