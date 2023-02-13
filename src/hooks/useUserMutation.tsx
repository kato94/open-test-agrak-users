import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, deleteUser, upadteUser } from '../services/users';
import { User } from '../interfaces/User';

export const useUserMutation = () => {

  const queryClient = useQueryClient();

  const userDeleteMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['users']);
    }
  });

  const userCreateMutation = useMutation({
    mutationFn: (user: User) => {
      return createUser(user);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['users']);
    }
  });

  const userUpdateMutation = useMutation({
    mutationFn: (user: User) => {
      return upadteUser(user);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['users']);
    }
  });

  return {
    userDeleteMutation,
    userCreateMutation,
    userUpdateMutation,
  };
}
