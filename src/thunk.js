import { crudHOD } from './hods' 

const { reducer, get } = crudHOD('thunk', 'https://jsonplaceholder.typicode.com/users')

export default reducer
export const miThunk = get