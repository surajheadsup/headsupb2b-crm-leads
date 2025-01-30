import { Button, Title } from 'rizzui';
import cn from '../Utils/class-names';
import Breadcrumb from '../Component/ui/breadcrumb';
import ExportButton from './export-button';
import { PiCaretRightBold, PiPlusCircleBold } from 'react-icons/pi';
import { useModal } from './modal-views/use-modal';
import { pageHeader } from '../config/pageHeader';
import { useConfirm } from './confirm/use-confirm';
import { Colors } from '../Constant/Colors/Color';
import usePermissionCheck from '../Hooks/use-permission-check';
import { ScreenName } from '../Constant/Screen/Screen';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch, useSelector } from 'react-redux';
import { setSearchableSelectSelectedData } from '../Store/Action/common/searcheable-select/searcheable-select-action';

export default function PageHeader({ metaTitle, className, children, customSize, title, titleClass, useConfirmBox, href, setState }) {
  const dispatch = useDispatch()
  const reduxSelect = useSelector(state => state.SearchableSelectReducer)

  const { openModal } = useModal();
  const navigate = useNavigate(); // Initialize useNavigate
  let metaObject = pageHeader?.find((Obj) => Obj.title === metaTitle);

  // const isEditAllowed = usePermissionCheck(screen, 'write');// Temporary, replace with your permission check
  const isEditAllowed = true// Temporary, replace with your permission check

  const handleFunctionCall = () => {
    if (href) {
      if (setState) {
        dispatch(setState({}))
        dispatch(setSearchableSelectSelectedData([]))
      }
      navigate(href);
    } else {
      openModal({
        view: children,
        customSize: customSize + 'px' || '1020px',
        title: title,
        titleClass: titleClass,
        useConfirmBox: useConfirmBox
      });
    }
  };

  return (
    <header className={cn('mb-6 @container xs:-mt-2 lg:mb-7', className)}>
      <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between mt-2">
        <div>
          {
            <Breadcrumb separator="" separatorVariant="circle" className="flex-wrap mt-0">
              {metaObject?.breadcrumb?.map((item) =>
                <Breadcrumb.Item key={item.name} {...(item?.href && { href: item?.href })}>
                  {item.name}
                </Breadcrumb.Item>)}
            </Breadcrumb>
          }
        </div>
      </div>
    </header>
  );
}
