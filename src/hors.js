export const fetchReducer = ({ START, SUCCESS, ERROR }) => ({
    [START]: state => ({ ...state, fetching: true }),
    [SUCCESS]: (state, { payload }) => ({ ...state, data: payload, fetching: false, fetched: true }),
    [ERROR]: (state, { error }) => ({ ...state, error, fetching: false }),
  })
export const addReducer = ({ START, SUCCESS, ERROR }) => ({
    [START]: state => ({ ...state, creating: true }),
    [SUCCESS]: (state, { payload }) => ({ ...state, data: { ...state.data, ...payload }, creating: false }),
    [ERROR]: (state, { error }) => ({ ...state, error, creating: false }),
  })