import { Link } from 'react-router-dom';
import { FC } from 'react';
import { User } from '../../interfaces/User';
import { useForm } from '../../hooks/useForm';

interface Props {
  isLoading: boolean;
  onSaveUser: (user: User) => void;
  user?: User;
}

export const UserForm: FC<Props> = ({ isLoading, onSaveUser, user }) => {
  const { error, submit } = useForm();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLoading) return;

    const user: User | undefined = submit(e);
    user && onSaveUser(user);
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='grid grid-cols-2 gap-4 mb-lg'>
        <div className='b-rd-1 shadow-lg shadow-gray-200/70 bg-white relative'>
          <input name='first_name' className='bg-transparent pa-sm w-full outline-none' type="text" placeholder='Name' defaultValue={user?.first_name} />
        </div>
        <div className='b-rd-1 shadow-lg shadow-gray-200/70 bg-white relative'>
          <input name='second_name' className='bg-transparent pa-sm w-full outline-none' type="text" placeholder='Second Name' defaultValue={user?.second_name} />
        </div>
        <div className='b-rd-1 shadow-lg shadow-gray-200/70 bg-white relative'>
          <input name='email' className='bg-transparent pa-sm w-full outline-none' type="text" placeholder='Email' defaultValue={user?.email} />
        </div>
        <div className='b-rd-1 shadow-lg shadow-gray-200/70 bg-white relative'>
          <input name='avatar' className='bg-transparent pa-sm w-full outline-none' type="text" placeholder='Avatar' defaultValue={user?.avatar} />
        </div>
      </div>

      {error && <div className='text-red-500 mb-lg bg-red-100 pa-xs b-rd-1'>{error}</div>}

      <div className='flex justify-between'>
        <Link
          to={`/`}
          className={`transition-shadow b-1  b-gray-500 c-gray-500 bg-transparent shadow-md shadow-gray-500/40 px-xs py-2 rounded-md flex items-center hover:shadow-gray-500/20`}
        >
          Cancel
        </Link>

        <button
          disabled={isLoading}
          type='submit'
          className='transition-shadow shadow-md shadow-blue-500/70 bg-blue-500 text-white px-xs py-2 rounded-md flex items-center hover:shadow-blue-500/40 disabled:opacity-70'
        >
          {
            isLoading
              ? <span className='i-fluent-arrow-clockwise-16-filled mr-2 inline-block animate-spin'></span>
              : <span className='i-fluent-save-28-regular mr-2 inline-block'></span>
            }
          Save
        </button>
      </div>
    </form>
  )
}
