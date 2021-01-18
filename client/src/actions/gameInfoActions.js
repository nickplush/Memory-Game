export const getGameInfo = (info) => dispatch => {
    dispatch({ type: 'GET_INFO', payload: info })
}
export const changeRecords = (results) => dispatch => {
    dispatch({ type: 'CHANGE_RECORDS', payload: results })
}
