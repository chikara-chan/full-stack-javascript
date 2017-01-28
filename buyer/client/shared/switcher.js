function switchShopType(shopType) {
    switch (shopType) {
        case 0:
            return '普通超市'
        default:
            return ''
    }
}

function switchGender(shopType) {
    switch (shopType) {
        case 0:
            return '男'
        case 1:
            return '女'
        default:
            return ''
    }
}

export default {
    switchShopType,
    switchGender
}
