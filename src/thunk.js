import { makeType, asyncMac, createReducer } from './ducks-helper'


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

export default createReducer(initialState, {
  [FETCH.START]: state => ({ ...state, fetching: true }),
  [FETCH.SUCCESS]: (state, { payload }) => ({ ...state, data: payload }),
  [FETCH.ERROR]: (state, { error }) => ({ ...state, error }),
})

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