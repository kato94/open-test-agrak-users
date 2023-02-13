import { FC } from 'react';
import { User } from '../../interfaces/User';
import { Item } from './Item';

interface Props {
  users: User[] | undefined;
}

export const UserTable: FC<Props> = ({ users }) => {
  return (
    <div className='overflow-x-auto'>
      <table className='w-full border-separate border-spacing-x-none border-spacing-y-4'>
        <thead className='text-gray-400 fw-100 text-left'>
          <tr>
            <th></th>
            <th className='px-2'>Name</th>
            <th className='px-2'>Second Name</th>
            <th className='px-2'>Email</th>
            <th className='px-2 min-w-23'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map((user) => (
              <Item user={user} key={user.id} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
