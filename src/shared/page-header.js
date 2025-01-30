import React, { useEffect } from 'react'
import { IoAdd } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionIcon, Button, Title } from 'rizzui';
import { useModal } from './modal-views/use-modal';
import { pageHeader } from '../config/pageHeader';
import { setSearchableSelectSelectedData } from '../Store/Action/common/searcheable-select/searcheable-select-action';
import { useDispatch, useSelector } from 'react-redux';
import { getHeadingFromPathname } from '../Utils/Utils';
import { FilterCondition } from '../Constant/filters/Filter';
import { deactiveText } from '../Constant/Common/common-variable';
import { PiTextColumns, PiTrashDuotone } from "react-icons/pi";
import { ToggleColumns } from '../Component/ui/table/table';
import { setPagination } from '../Store/Action/Pagination/PaginationAction';
import { getAuthenticatedUserWithRoles } from '../Storage/Storage';
import usePermissionCheck from '../Hooks/use-permission-check';

export default function PageHeader({ title, href, titleClass, children, screen, customSize, disableCreate, ApiHit, setState, json, setAction, columns, checkedColumns, setCheckedColumns, hideIndex, onClose, onChange, onClear, customClick }) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const { openModal, closeAllModals } = useModal();
  const FilterItem = FilterCondition?.find(Obj => Obj?.screen === screen);
  const reduxPagination = useSelector(state => state.PaginationReducer);
  const userObject = getAuthenticatedUserWithRoles()
  const isEditAllowed = usePermissionCheck(screen, 'write');

  // const isEditAllowed = true;

  useEffect(() => {

  }, [columns])

  const handleClick = () => {
    if(customClick){customClick()}
    if (href) {
      if (setState) {
        dispatch(setState({}))
        dispatch(setSearchableSelectSelectedData([]))
      }
      closeAllModals()
      navigate(href);

    } else if(children) {
      openModal({
        view: children,
        customSize: customSize + 'px' || '1020px',
        title: title,
        titleClass: titleClass,
        onClose: onClose
      });
    }
    else{
      alert('No Href or Modal Given')
    }
  }

  const handleFilterChange = (e, serverKey) => {
    let { label, value, _id } = e
    if (value === 'all') {
      Object.assign(json, { search: {} })
      dispatch(setSearchableSelectSelectedData([]))
    } else {
      var pagination = reduxPagination?.doc
      pagination.number = 1
      dispatch(setPagination(pagination))
      if(serverKey){
        Object.assign(json.search, { [serverKey]: value })
      }
    }
    if(setAction){dispatch(setAction(json))}
    if (ApiHit) { ApiHit() }
    if (onChange) { onChange(e) }
  }

  const removeJson = () => {
    var tj = json
    Object.assign(json, { search: { status: { "$ne": deactiveText } } })
    dispatch(setAction(json))
    dispatch(setSearchableSelectSelectedData([]))
    if(onClear) { onClear() }
    if (ApiHit) { ApiHit() }
  }



  return (
    <div className='flex justify-between'>
      <div className='flex space-x-3 items-center'>
        {isEditAllowed && !disableCreate  && <div><Button size='sm' className='font-bold tracking-wider custom-button' onClick={() => handleClick()}> <IoAdd className='h-4 w-4' /> Create </Button></div>}
        <Title as='h5' className='capitalize'>{screen}</Title>
      </div>
      <div className='mx-2 my-5'>
        <div className='flex space-x-3'>
          {
            json && FilterItem?.condition?.map((ele, index) => <div key={index}>
              <div><label className='font-semibold text-xs'>{ele?.title}</label></div>
              {typeof ele.render === 'function'
                ? ele.render(
                  (e) => handleFilterChange(e, ele?.serverKey),
                  () => removeJson()
                )
                : ele.render}
            </div>)
          }
          {Object.keys(json?.search || {}).length > 1 || json?.search?.status?.["$ne"] !== deactiveText ? (<div className='mt-0'> <Button size="sm" onClick={removeJson} className="h-8 bg-gray-200/70" variant="flat"> <PiTrashDuotone className="me-1.5 h-[17px] w-[17px]" /> Clear </Button> </div>) : null}
          {columns && <ToggleColumns columns={columns} checkedColumns={checkedColumns} setCheckedColumns={setCheckedColumns} hideIndex={hideIndex} />}
        </div>
      </div>
    </div>
  )
}
