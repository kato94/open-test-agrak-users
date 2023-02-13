import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { onOpenModal, onCloseModal, ModalState } from '../redux/slices/uiSlice';

export const useUiStore = () => {
  const { modal } = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  const openModal = (modalState: ModalState) => {
    dispatch(onOpenModal(modalState));
  };

  const closeModal = () => {
    dispatch(onCloseModal());
  };

  return {
    modal,

    openModal,
    closeModal,
  };
}
