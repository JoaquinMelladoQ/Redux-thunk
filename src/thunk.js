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

function asyncMac(types) {
  return {
    error: mac(`${types.ERROR}`, 'error'),
    start: mac(`${types.START}`),
    success: mac(`${types.SUCCESS}`, 'payload'),
  }
}

function createReducer(initialState: {}, actionHandlers: {}): Reducer {
  return function reducer(state = initialState, action: any){
    if (actionHandlers.hasOwnProperty(action.type)) {
      const newState = actionHandlers[action.type](state, action)
      if (newState !== state) {
        return newState
      }
    }
    return state
  }
}

const t = makeType('thunk')

const FETCH = t('fetch', true)

const fetchAc = asyncMac(FETCH)

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
        dispatch(fetchAc.start())
        try {
          const result = await fetch(url)
          const json = await result.json()
          dispatch(fetchAc.success(json))
          console.log(json)  
        } catch (error) {
          dispatch(fetchAc.error(error))  
        }
}