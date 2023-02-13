import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, ModalState } from './interfaces';

const initialState: InitialState = {
  head: {
    headTitle: 'User list',
  },
  modal: {
    isModalOpen: false,
    modalType: "warning",
    modalMessage: "",
  }
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,

  reducers: {
    onOpenModal: (state, {payload}: PayloadAction<ModalState>) => {
      state.modal.modalType = payload.modalType;
      state.modal.modalMessage = payload.modalMessage;
      state.modal.callback = payload.callback;
      state.modal.isModalOpen = true;
    },
    onCloseModal: (state) => {
      state.modal.isModalOpen = false;
    },
  },
});

export const { onOpenModal, onCloseModal } = uiSlice.actions;

export default uiSlice;
