import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/users';

export const useUsers = () => {
  const usersQuery = useQuery(['users'], getUsers, {
    refetchOnWindowFocus: false,
  });

  return usersQuery;
}
