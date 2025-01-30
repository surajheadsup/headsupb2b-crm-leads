import { atom, useAtomValue, useSetAtom } from 'jotai';

const modalAtom = atom({ isOpen: false, view: null, customSize: '320px', titleClass : '', useConfirmBox : '', onClose: null });

export function useModal() {
  const state = useAtomValue(modalAtom);
  const setState = useSetAtom(modalAtom);

  const openModal = ({ view, customSize, title, titleClass, onClose, hide }) => {
    setState({ ...state, isOpen: true, view, customSize, title, titleClass, onClose, modalKey:Date.now(), hide });
  };

  const closeModal = (ApiHit) => {
    setState({ ...state, isOpen: false });
    if(ApiHit){ApiHit()}
  };

  const closeAllModals = () => {
    setState({ ...state, isOpen: false, view: null });
  };

  return { ...state, openModal, closeModal, closeAllModals };
}
