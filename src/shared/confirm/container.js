import { useEffect } from 'react';
import { ActionIcon, Button, Modal, Text, Title } from 'rizzui';
import { usePathname } from '../../Hooks/use-pathname';
import { useConfirm } from './use-confirm';
import { useMedia } from '../../Hooks/use-media';

export default function GlobalConfirmBox() {
  const { isOpen, description, closeModal, customSize, title, btnText } = useConfirm();
  const pathname = usePathname();
  const isMedium = useMedia('(max-width: 1200px)', false);
  useEffect(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal} customSize={customSize} overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-lg" containerClassName="dark:bg-gray-100" className="z-[9999]">
      <div className='px-10 py-6'>
        <Title>{title}</Title>
        <div className='py-4 font-lg'>{description}</div>
        <div className='flex gap-3 justify-end'>
          <Button variant="flat" className="" onClick={()=>closeModal()} size={isMedium ? 'lg' : 'md'}>
            Cancel
          </Button>
          <Button color="danger" type="submit" size={isMedium ? 'lg' : 'md'}>
            {btnText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
