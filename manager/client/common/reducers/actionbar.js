import types from '../constants/actionTypes'

const initialState = {
    title: '',
    action: '',
    back: false
}

function actionbar(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_ACTIONBAR:
            return {
                ...state,
                ...action.actionbar
            }
        default:
            return state
    }
}

export default actionbar
