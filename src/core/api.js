import axios from 'axios'

const api = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
});

api.interceptors.response.use(
  response => response.data,
  error => response.data || { code: response.status },
);


export const setToken = (token) => {
  api.defaults.headers['Authorization'] = `Bearer ${token}`;
}
export const getUsers = () => api.get('users')
export const login = (payload) => api.post('users/authenticate', payload)
export const signup = (payload) => api.post('users/register', payload)