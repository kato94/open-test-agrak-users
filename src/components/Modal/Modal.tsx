import { useUiStore } from '../../hooks/useUiStore';
import { MODAL_OPTIONS } from './options';

export const Modal = () => {
  const { modal, closeModal } = useUiStore();

  const { title, color, icon, cancel } = MODAL_OPTIONS[modal.modalType];

  const onClosingModal = () => {
    modal.callback && modal.callback();
    closeModal();
  };

  if (!modal.isModalOpen) return null;

  return (
    <>
      <div className='fixed top-0 h-screen w-screen max-w-full'>
        <div className='pa-4 w-full h-full flex items-center justify-center'>

          <div
            className='fixed top-0 h-screen w-screen max-w-full bg-black/50 z-0'
            onClick={closeModal}
          ></div>

          <div className='bg-white w-full max-w-25rem b-rd-xl px-lg py-2xl text-center shadow-lg shadow-black/10 z-1'>

            <div className={`bg-${color}-500 pa-4 mb-lg rounded-full inline-block`}>
              <span className={`i-${icon} block c-white text-center text-6xl`}></span>
            </div>

            <h1 className='text-2xl fw-600 mb-1'>{ title }</h1>

            <p className='text-base c-gray-700 mb-sm'>{ modal.modalMessage }</p>

            <div className='text-white flex flex-wrap gap-4 justify-evenly'>
              {
                cancel && (
                  <button
                    onClick={closeModal}
                    className={`transition-shadow b-1  b-gray-500 c-gray-500 bg-transparent shadow-md shadow-gray-500/40 py-1.5 px-6 text-xs b-rd-4 hover:shadow-gray-500/20`}
                  >
                    CANCEL
                  </button>
                )
              }

              <button
                onClick={onClosingModal}
                className={`transition-shadow bg-${color}-500 shadow-md shadow-${color}-500/70 py-1.5 px-6 text-xs b-rd-4 hover:shadow-${color}-500/40`}
              >
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
