import { Title, Text, ActionIcon, Button, Popover } from 'rizzui';
import TrashIcon from '../Constant/Icons/trash';

export default function ButtonPopover({ btnTitle,title, description, onClick, loading, disable,icon,style }) {
  return (
    <Popover placement="left">
      <Popover.Trigger >
        <Button style={style} size="sm" variant="outline" aria-label={'Delete Item'}  as="span" type="button" className="@lg:w-auto cursor-pointer mt-2">
          {btnTitle}
        </Button>
      </Popover.Trigger>
      <Popover.Content className="z-0">
        {({ setOpen }) => (
          <div className="w-56 pb-2 pt-1 text-left rtl:text-right">
            <Title as="h6" className="mb-0.5 flex items-start text-sm text-red-600 sm:items-center">
              {icon} {title}
            </Title>
            <Text className="mb-2 leading-relaxed text-gray-500"> {description} </Text>
            {!disable &&
              <div className="flex items-center justify-end ">
                <Button size="sm" variant="outline" className="me-1.5 h-7 hover:bg-red-main hover:text-white" onClick={onClick} isLoading={loading}> Yes </Button>
                <Button size="sm" variant="outline" className="h-7 hover:!border-gray-900 hover:text-gray-700" onClick={() => setOpen(false)}> No </Button>
              </div>
            }
          </div>
        )}
      </Popover.Content>
    </Popover>
  );
}
