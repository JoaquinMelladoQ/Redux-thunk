import { makeType, asyncMac, createReducer } from './ducks-helper'
import { fetchReducer } from './hors'

const t = makeType('thunk')
const FETCH = t('fetch', true)
const fetchAc = asyncMac(FETCH)

const initialState = {
  data: {
    1: { name: 'Noticia' },
  },
  fetching: false,
  fetched: false,
  error: null,
}
export default createReducer(initialState, fetchReducer(FETCH))
// eslint-disable-next-line import/no-anonymous-default-export
export const miThunk = payload =>
    async (dispatch, getState) => {
        const url = 'https://jsonplaceholder.typicode.com/users'
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