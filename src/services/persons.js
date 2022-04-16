import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/records'
const baseUrl = '/api/records'
//const baseUrl = 'https://damp-taiga-85250.herokuapp.com/api/records'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
} 

const del = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
export default {getAll, update, create, del}
