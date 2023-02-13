import { useQuery } from '@tanstack/react-query';
import { getUser } from '../services/users';

export const useUser = (userId: string) => {
  const userQuery = useQuery(['user', userId], () => getUser(userId!), {
    refetchOnWindowFocus: false,
  });

  return userQuery;
}
