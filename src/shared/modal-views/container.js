import { useEffect } from 'react';
import { ActionIcon, Modal, Text } from 'rizzui';
import { usePathname } from '../../Hooks/use-pathname';
import { useModal } from './use-modal';
import { FaTimes } from "react-icons/fa";

export default function GlobalModal() {
  const { isOpen, view, closeModal, customSize, title, titleClass, onClose, modalKey, hide } = useModal();
  const pathname = usePathname();
  useEffect(() => {
    closeModal();
  }, [pathname]);

  const handleClose = (ApiHit) => {
    closeModal(ApiHit);
    if (onClose) { onClose() }
  }

  return (
    <Modal isOpen={isOpen} onClose={() => { }} customSize={customSize} overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg" containerClassName="dark:bg-gray-100" className="z-[99999]">
      <div className="m-auto px-7 pt-6 flex justify-between">
        {title ? (
          <div className={` ${titleClass} text-center flex justify-between`}>
            <Text as="h3" className={`font-bold`}>{title}</Text>
          </div>
        ) : null}
        {
          !hide && <FaTimes
            className="me-1 h-[17px] w-[17px] cursor-pointer"
            onClick={() => handleClose()}
          />
        }
      </div>
      {view}
    </Modal>
  );
}
