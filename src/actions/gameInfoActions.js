export const getGameInfo = (info) => dispatch => {
    dispatch({ type: 'GET_INFO', payload: info })
}
