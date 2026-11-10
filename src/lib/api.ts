import ky from 'ky'

export const api = ky.create({ baseUrl: 'https://jsonplaceholder.typicode.com/' })
