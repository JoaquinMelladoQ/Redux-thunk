// eslint-disable-next-line import/no-anonymous-default-export
export default payload =>
    (dispatch, getState) => {
        const state = getState()
        console.log(state)
}