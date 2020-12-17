const makeType = m => (a, isAsync) => {
  if (isAsync) {
    return {
      START: `${m}/${a}-start`,    
      SUCCESS: `${m}/${a}-success`,    
      ERROR: `${m}/${a}-error`,    
    }
  }
  return `${m}/${a}`
}
const t = makeType('thunk')

const FETCH = t('fetch', true)


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


const initialState = {
  data: {
    1: { name: 'Noticia' },
  },
    fetching: false,
    fetched: false,
    error: null,
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        fetching: true,
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      } 
    case FETCH_ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default payload =>
    async (dispatch, getState) => {
        dispatch(fetchStart())
        try {
          const result = await fetch(url)
          const json = await result.json()
          dispatch(fetchSuccess(json))
          console.log(json)  
        } catch (error) {
          dispatch(fetchError(error))  
        }
}