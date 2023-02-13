export interface ModalState {
  isModalOpen?: boolean;
  modalType: 'warning' | 'error' | 'success';
  modalMessage: string;
  callback?: () => void;
}

export interface HeadState {
  headTitle: string;
}

export interface InitialState {
  modal: ModalState;
  head: HeadState;
}
