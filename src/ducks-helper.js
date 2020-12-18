export const makeType = m => (a, isAsync) => {
    if (isAsync) {
      return {
        START: `${m}/${a}-start`,    
        SUCCESS: `${m}/${a}-success`,    
        ERROR: `${m}/${a}-error`,    
      }
    }
    return `${m}/${a}`
  }
  
  export function mac(type, ...argNames) {
    return function ac(...args) {
      const action = { type }
      argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index]
      })
      return action 
    }
  }
  
  export function asyncMac(types) {
    return {
      error: mac(`${types.ERROR}`, 'error'),
      start: mac(`${types.START}`),
      success: mac(`${types.SUCCESS}`, 'payload'),
    }
  }
  
  export function createReducer(initialState, actionHandlers){
    return function reducer(state = initialState, action){
      if (actionHandlers.hasOwnProperty(action.type)) {
        console.log(action)
        const newState = actionHandlers[action.type](state, action)
        if (newState !== state) {
          return newState
        }
      }
      return state
    }
  }

  export const reduceReducers = (...reducers) => (prevState, value, ...args) =>
    reducers.reduce(
      (newState, reducer) => reducer(newState, value, ...args),
      prevState,
  )