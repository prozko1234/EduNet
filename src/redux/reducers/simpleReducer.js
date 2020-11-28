import * as types from '../../constants/actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case types.SIMPLE_ACTION:
            return {
                result: action.payload
            }
        default:
            return state
    }
}