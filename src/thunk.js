import { crudHOD } from './hods' 
// eslint-disable-next-line import/no-anonymous-default-export

const { reducer } = crudHOD('thunk')
export const miThunk = paylaod => ({
  actions: fetchAc,
  request: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return await result.json()
  }
})