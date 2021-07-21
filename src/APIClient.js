import axios from 'axios'
// import browserHistory from './history'

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  // withCredentials: true,
})

// API.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (
//       err.response &&
//       (err.response.status === 401 || err.response.status === 403) &&
//       window.location.pathname !== '/' &&
//       window.location.pathname !== '/password-reset-instructions' &&
//       window.location.pathname !== '/reset-password'
//     ) {
//       browserHistory.push(`/?redirectUrl=${window.location.pathname}`)
//       window.localStorage.setItem('logged', false)
//     }
//     return Promise.reject(err)
//   }
// )

export default API
