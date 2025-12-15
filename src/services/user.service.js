import api from './api'

const userService = {
  async getProfile() {
    return api.get('/user/profile')
  },

  async updateProfile(userData) {
    return api.put('/user/profile', userData)
  },

  async changePassword(oldPassword, newPassword) {
    return api.post('/user/change-password', { oldPassword, newPassword })
  },
}

export default userService

