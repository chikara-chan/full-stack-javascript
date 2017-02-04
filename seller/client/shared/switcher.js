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

function switchStatus(status) {
    switch (status) {
        case 100:
            return '待接单'
        case 101:
            return '待发货'
        case 102:
            return '待收货'
        case 103:
            return '待评价'
        case 104:
            return '已完成'
        case 200:
            return '已取消'
        case 201:
            return '已拒单'
        default:
            return ''
    }
}

export default {
    switchShopType,
    switchGender,
    switchStatus
}
