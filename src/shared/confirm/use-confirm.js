import { atom, useAtomValue, useSetAtom } from 'jotai';

const modalAtom = atom({ isOpen: false, description: null, customSize: '320px', btnText : '' });

export function useConfirm() {
  const state = useAtomValue(modalAtom);
  const setState = useSetAtom(modalAtom);

  const openConfirm = ({ description, customSize, title, btnText }) => {
    setState({ ...state, isOpen: true, description, customSize, title, btnText });
  };

  const closeModal = () => {
    setState({ ...state, isOpen: false });
  };

  return { ...state, openConfirm, closeModal };
}
