import {browserHistory} from 'react-router'
import types from '../constants/actionTypes'
import utils from '../../shared/utils'

function replaceStats(stats) {
    return {
        type: types.REPLACE_STATS,
        stats
    }
}

function getStats() {
    return (dispatch, getState) => {
        utils.ajax({
            url: '/api/stat/getStats',
            type: 'get'
        }).then(res => {
            dispatch(replaceStats(res.entry))
        })
    }
}

export default {
    replaceStats,
    getStats
}
