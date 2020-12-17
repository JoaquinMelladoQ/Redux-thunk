
const FETCH_START = 'start'
const FETCH_SUCCESS = 'success'
const FETCH_ERROR = 'error'

const fetchStart = () => ({
    type:  FETCH_START,
})
const fetchSuccess = payload => ({
    type:  FETCH_SUCCESS,
    payload,
})
const fetchError = error => ({
    type:  FETCH_ERROR,
    error,
})

const url = 'https://jsonplaceholder.typicode.com/users'
// eslint-disable-next-line import/no-anonymous-default-export
export default payload =>
    async (dispatch, getState) => {
        dispatch(fetchStart())
        try {
          const result = await fetch(url)
          const json = await result.json()
          dispatch(fetchSuccess(json))  
        } catch (error) {
            
        }
}