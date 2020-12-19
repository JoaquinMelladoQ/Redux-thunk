import { makeType, asyncMac, createReducer, reduceReducers } from './ducks-helper'
import { fetchReducer, addReducer, delReducer } from './hors'

const t = makeType('thunk')
const FETCH = t('fetch', true)
const ADD = t('add', true)
const DEL = t('del', true)
const fetchAc = asyncMac(FETCH)
const addAc = asyncMac(ADD)
const delAc = asyncMac(DEL)


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
const r3 = createReducer(initialState, delReducer(DEL))

export default reduceReducers(r1, r2, r3)