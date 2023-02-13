import { useMutation, useQuery } from '@tanstack/react-query';
import { deleteUser, getUsers } from '../services/users';

export const useUsers = () => {
  const usersQuery = useQuery(['users'], getUsers, {
    refetchOnWindowFocus: false,
  })

  const userDeleteMutation = useMutation({
    mutationFn: (id: string) => {
      return deleteUser(id);
    },
    onSuccess: () => {
      usersQuery.refetch();
    }
  })

  return {
    usersQuery,

    userDeleteMutation,
  };
}
