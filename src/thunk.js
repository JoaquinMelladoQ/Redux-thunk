import { crudHOD } from './hods' 

const { reducer } = crudHOD('thunk', 'https://jsonplaceholder.typicode.com/users')
