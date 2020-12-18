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
export const miThunk = paylaod => ({
  actions: fetchAc,
  request: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return await result.json()
  }
})