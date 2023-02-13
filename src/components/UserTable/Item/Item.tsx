import { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../../interfaces/User';
import { useUiStore } from '../../../hooks/useUiStore';
import { useUsers } from '../../../hooks/useUsers';

interface Props {
  user: User;
}

export const Item: FC<Props> = ({user}) => {

  const { openModal } = useUiStore();
  const { userDeleteMutation } = useUsers();

  const handleDelete = () => {
    openModal({
      modalType: 'warning',
      modalMessage: `Are you sure to delete the user: ${user.first_name}?`,
      callback: () => {
        userDeleteMutation.mutate(user.id);
      }
    });
  }

  return (
    <tr className='b-rd-5 shadow-lg shadow-gray-200/70 bg-white' key={ user.id }>
      <td className='b-rd-tl-1 b-rd-bl-1 pa-lg'>
        <img
          className='w-10 h-10 min-w-10 rounded-full'
          src={ user.avatar }
          alt={ user.first_name }
        />
      </td>
      <td className='px-2'>{ user.first_name }</td>
      <td className='px-2'>{ user.second_name }</td>
      <td className='px-2'>{ user.email }</td>
      <td className='b-rd-tr-1 b-rd-br-1 pl-2 pr-lg'>

        <Link
          to={`/user/edit/${ user.id }`}
          className='pa-1.5 bg-blue-100 rounded-full mr-2 inline-block vertical-bottom'>

          <span className='i-fluent-edit-16-filled block bg-blue-500'></span>
        </Link>

        <button
          onClick={handleDelete}
          className='pa-1.5 bg-red-100 rounded-full'
        >
          <span className='i-fluent-delete-16-filled block c-red-500'></span>
        </button>
      </td>
    </tr>
  )
}
