export interface ModalOptions {
  [key: string]: {
    title: string;
    color: string;
    icon: string;
    cancel?: boolean;
  };
}

export const MODAL_OPTIONS: ModalOptions = {
  warning: {
    title: 'WARNING!',
    color: 'yellow',
    icon: 'fluent-warning-16-filled',
    cancel: true,
  },
  success: {
    title: 'SUCCESS!',
    color: 'emerald',
    icon: 'fluent-checkmark-circle-16-filled',
  },
  error: {
    title: 'ERROR!',
    color: 'red',
    icon: 'fluent-shield-error-16-regular',
  },
};
