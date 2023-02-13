import { Link } from 'react-router-dom';
import { useUsers } from '../hooks/useUsers';
import { UserTable } from '../components/UserTable';

export const HomePage = () => {

  const usersQuery = useUsers();

  return (
    <>
      <div className='flex justify-between items-center'>
        <div className='text-blue-500 fw-700 text-4xl mb-lg'>User list</div>

        <Link
          to={`/user/add`}
          className='bg-blue-500 text-white px-xs py-2 rounded-md flex items-center'
        >
          <span className='i-fluent-add-circle-16-regular mr-2 inline-block'></span>
          Add user
        </Link>
      </div>

      {
        usersQuery.isLoading
          ? <div>Loading...</div>
          : <UserTable users={usersQuery.data} />
      }
    </>
  )
}
