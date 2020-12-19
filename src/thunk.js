
// eslint-disable-next-line import/no-anonymous-default-export
export const miThunk = paylaod => ({
  actions: fetchAc,
  request: async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    return await result.json()
  }
})