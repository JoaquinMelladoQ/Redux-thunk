import { makeType, asyncMac, createReducer, reduceReducers } from './ducks-helper'
import { fetchReducer, addReducer } from './hors'

const t = makeType('thunk')
const FETCH = t('fetch', true)
const ADD = t('add', true)
const fetchAc = asyncMac(FETCH)
const addAc = asyncMac(ADD)

const initialState = {
  data: {
    1: { name: 'Noticia' },
  },
  fetching: false,
  fetched: false,
  error: null,
}
const r1 = createReducer(initialState, fetchReducer(FETCH))
const r2 = createReducer(initialState, addReducer(ADD))

export default reduceReducers(r1, r2)
// eslint-disable-next-line import/no-anonymous-default-export
export const miThunk = paylaod => ({
  actions: fetchAc,
  request: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return await result.json()
  }
})