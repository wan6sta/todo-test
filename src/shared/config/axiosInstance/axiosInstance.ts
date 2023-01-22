import axios from 'axios'

const BASE_URL = 'https://social-network.samuraijs.com/api/1.1'

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})