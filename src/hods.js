import { makeType, asyncMac, createReducer, reduceReducers } from './ducks-helper'
import { fetchReducer, addReducer, delReducer } from './hors'

export const crudHOD = (mod, url) => {
    const t = makeType(mod)
    const FETCH = t('fetch', true)
    const ADD = t('add', true)
    const DEL = t('del', true)
    const fetchAc = asyncMac(FETCH)
    const addAc = asyncMac(ADD)
    const delAc = asyncMac(DEL)
    
    
    const initialState = {
      data: {},
      fetching: false,
      fetched: false,
      error: null, 
    }
    const r1 = createReducer(initialState, fetchReducer(FETCH))
    const r2 = createReducer(initialState, addReducer(ADD))
    const r3 = createReducer(initialState, delReducer(DEL))
    const get = paylaod => ({
        actions: fetchAc,
        request: async () => {
          const result = await fetch(url)
          return await result.json()
        }
      })
    
    return {
        reducer: reduceReducers(r1, r2, r3),
        get,
    }
}
