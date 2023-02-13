import { Link, useNavigate } from 'react-router-dom';
import { UserForm } from '../components/UserForm/UserForm';
import { useUiStore } from '../hooks/useUiStore';
import { useUserMutation } from '../hooks/useUserMutation';
import { User } from '../interfaces/User';

export const AddUserPage = () => {

  const { userCreateMutation } = useUserMutation();
  const { openModal } = useUiStore();
  const navigate = useNavigate();

  const onCreateUser = async (user: User) => {
    try {
      await userCreateMutation.mutateAsync(user);

      openModal({
        modalType: 'success',
        modalMessage: `User ${user.first_name} ${user.second_name} has been added!`,
        callback: () => {
          navigate('/');
        }
      });
    } catch (error) {
      openModal({
        modalType: 'error',
        modalMessage: `Something went wrong!`,
      });
    }
  };

  return (
    <>
      <div className='flex items-center mb-lg'>
        <Link
          to={`/`}
          className={` c-gray-500 hover:bg-gray-500/20 pa-0.5 text-3xl rounded-full flex items-center mr-2`}
        >
          <span className='i-fluent-arrow-left-16-filled inline-block'></span>
        </Link>
        <div className='text-blue-500 fw-700 text-4xl'>Add User</div>
      </div>

      <UserForm isLoading={userCreateMutation.isLoading} onSaveUser={onCreateUser} />
    </>
  )
}
