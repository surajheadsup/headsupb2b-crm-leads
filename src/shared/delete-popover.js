import { Title, Text, ActionIcon, Button, Popover } from 'rizzui';
import { FaTimes } from 'react-icons/fa';
import TrashIcon from '../Constant/Icons/trash';

export default function DeletePopover({ title, description, onDelete, loading, disable }) {
  return (
    <Popover placement="left">
      <Popover.Trigger >
        <ActionIcon size="sm" variant="outline" aria-label={'Delete Item'} className="cursor-pointer hover:!border-gray-900 hover:text-gray-700">
          <FaTimes className="h-4 w-4" />
        </ActionIcon>
      </Popover.Trigger>
      <Popover.Content className="z-[99999]">
        {({ setOpen }) => (
          <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
            <Title as="h6" className="mb-0.5 flex items-start text-sm text-red-600 sm:items-center">
              <FaTimes className="me-1 h-[17px] w-[17px]" /> {title}
            </Title>
            <Text className="mb-2 leading-relaxed text-gray-500"> {description} </Text>
            {!disable &&
              <div className="flex items-center justify-end ">
                <Button size="sm" variant="outline" className="me-1.5 h-7 hover:bg-red-main hover:text-white" onClick={onDelete} isLoading={loading}> Yes </Button>
                <Button size="sm" variant="outline" className="h-7 hover:!border-gray-900 hover:text-gray-700" onClick={() => setOpen(false)}> No </Button>
              </div>
            }
          </div>
        )}
      </Popover.Content>
    </Popover>
  );
}
