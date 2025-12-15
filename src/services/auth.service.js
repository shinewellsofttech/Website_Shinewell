import api from './api'

const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password })
      if (response.token) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
      }
      return response
    } catch (error) {
      throw error
    }
  },

  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData)
      if (response.token) {
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
      }
      return response
    } catch (error) {
      throw error
    }
  },

  logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  getToken() {
    return localStorage.getItem('token')
  },

  getUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  isAuthenticated() {
    return !!this.getToken()
  },
}

export default authService

