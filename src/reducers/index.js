export default function (state = {}, action) {
    switch (action.type) {
        case 'GET_INFO':
            return action.payload
        case 'CHANGE_RECORDS':
            return {...state,records: action.payload}
        default:
            return state
    }
}
