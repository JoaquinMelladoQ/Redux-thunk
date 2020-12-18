export const fetchReducer = ({ START, SUCCESS, ERROR }) => ({
    [START]: state => ({ ...state, fetching: true }),
    [SUCCESS]: (state, { payload }) => ({ ...state, data: payload }),
    [ERROR]: (state, { error }) => ({ ...state, error }),
  })