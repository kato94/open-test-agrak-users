import { api } from '../api';
import { User } from '../interfaces/User';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get('/users')
    return response.data
  } catch (e) {
    throw new Error('Error getting users')
  }
}

export const deleteUser = async (id: string): Promise<User> => {
  try {
    const response = await api.delete(`/users/${id}`)
    return response.data
  } catch (e) {
    throw new Error('Error deleting user')
  }
}
