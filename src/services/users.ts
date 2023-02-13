import { api } from '../api';
import { User } from '../interfaces/User';

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (e) {
    throw new Error('Error getting users');
  }
}

export const deleteUser = async (id: string): Promise<User> => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (e) {
    throw new Error('Error deleting user');
  }
}

export const createUser = async (user: User): Promise<User> => {
  try {
    const response = await api.post(`/users`, user);
    return response.data;
  } catch (e) {
    throw new Error('Error creating user');
  }
}

export const upadteUser = async (user: User): Promise<User> => {
  try {
    const response = await api.put(`/users/${user.id}`, user);
    return response.data;
  } catch (e) {
    throw new Error('Error updating user');
  }
}

export const getUser = async (id: string): Promise<User> => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (e) {
    throw new Error('Error getting user');
  }
}
