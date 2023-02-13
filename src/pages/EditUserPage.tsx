import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserForm } from '../components/UserForm/UserForm';
import { useUiStore } from '../hooks/useUiStore';
import { useUser } from '../hooks/useUser';
import { User } from '../interfaces/User';
import { useUserMutation } from '../hooks/useUserMutation';

export const EditUserPage = () => {

  const { userUpdateMutation, userDeleteMutation } = useUserMutation();
  const { openModal } = useUiStore();
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.id || '0';

  const userQuery = useUser(userId);

  const onUpdateUser = async (user: User) => {
    try {
      await userUpdateMutation.mutateAsync({...userQuery.data, ...user});

      openModal({
        modalType: 'success',
        modalMessage: `User ${user.first_name} ${user.second_name} has been updated!`,
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

  const handleDelete = async () => {
    try {
      const user = userQuery.data as User;
      await userDeleteMutation.mutateAsync(user.id || '0');

      openModal({
        modalType: 'success',
        modalMessage: `User ${user.first_name} ${user.second_name} has been deleted!`,
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
  }

  const onDeleteUser = () => {
    openModal({
      modalType: 'warning',
      modalMessage: `Are you sure to delete the user: ${userQuery.data?.first_name}?`,
      callback: () => {
        handleDelete();
      }
    });
  };

  if (!userQuery.isLoading && !userQuery.data) navigate('/');

  return (
    <>
      <div className='flex items-center mb-lg'>
        <Link
          to={`/`}
          className={` c-gray-500 hover:bg-gray-500/20 pa-0.5 text-3xl rounded-full flex items-center mr-2`}
        >
          <span className='i-fluent-arrow-left-16-filled inline-block'></span>
        </Link>
        <div className='text-blue-500 fw-700 text-4xl'>Edit User</div>
      </div>

      {
        userQuery.isLoading || userQuery.isFetching
          ? <div>Loading...</div>
          : (<UserForm
              user={userQuery.data}
              isLoading={userUpdateMutation.isLoading}
              onSaveUser={onUpdateUser}
              onDeleteUser={onDeleteUser}
            />)
      }
    </>
  )
}
