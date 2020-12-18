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

function mac(type, ...argNames) {
  return function ac(...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action 
  }
}

const t = makeType('thunk')

const FETCH = t('fetch', true)


const fetchStart = mac(FETCH.START)
const fetchSuccess = mac(FETCH.SUCCESS, 'payload')
const fetchError = mac(FETCH.ERROR, 'error')

const url = 'https://jsonplaceholder.typicode.com/users'


const initialState = {
  data: {
    1: { name: 'Noticia' },
  },
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case FETCH.START:
      return {
        ...state,
        fetching: true,
      }
    case FETCH.SUCCESS:
      return {
        ...state,
        data: action.payload,
      } 
    case FETCH.ERROR:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export const miThunk = payload =>
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