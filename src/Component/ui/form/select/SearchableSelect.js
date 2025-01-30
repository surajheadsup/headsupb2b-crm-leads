import React, { useEffect, useState } from 'react';
import { Badge, Button, Loader, Select, Text } from 'rizzui';
import cn from '../../../../Utils/class-names';
import { CompileSelectData } from './select-promiss';
import { HitApi } from '../../../../Store/Action/Api/ApiAction';
import { STATUS_CLASSES } from '../../../../Constant/Colors/Color';
import { setSearchableSelectData, setSearchableSelectSelectedData } from '../../../../Store/Action/common/searcheable-select/searcheable-select-action';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import CustomLoading from '../../loading/custom-loading';
import { FaCheck } from 'react-icons/fa';
import CustomSwitch from '../../switch/custom-switch';

function renderOptionDisplayValue(option) {
  const lowerCaseValue = option?.label?.toString()?.toLowerCase() || option?.label;
  const statusClass = STATUS_CLASSES[lowerCaseValue] || STATUS_CLASSES.default;
  return (
    <div className="flex items-center">
      <Badge color={statusClass.badgeColor} renderAsDot />
      <Text className={`ms-2 font-medium capitalize ${statusClass.textColor}`}>
        {option?.label}
      </Text>
    </div>
  );
}

function renderDefaultDisplay(option) {
  return (
    <div className="flex items-center">
      <Text className="ms-2 capitalize text-gray-800 transition-colors duration-200">
        {option?.label || ''}
      </Text>
    </div>
  );
}

export default function SearchableSelect({
  api, name, className, dynamicSearch, limit, getFieldName, type, placeholder, disabled,
  error, onChange, useCustomDisplay, label, reduxState, setAction, defaultOptions,
  onClear, hide, searchable, selectionType, _id, clearable, validate,
  actionButton, actionButtonClick, actionButtonloading, parent, enableSwitch
}) {
  const dispatch = useDispatch();
  const reduxSelect = useSelector(state => state.SearchableSelectReducer);
  const [options, setOptions] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    if (api && !options && !defaultOptions) {
      loadData();
    } else if (defaultOptions) {
      setOptions(defaultOptions);
    } 

  }, [options, defaultOptions]);

  const loadData = () => {
    if (api) {
      setOptions(null);
      const json = { page: 1, limit: limit || 30, search: dynamicSearch || {} };
      Object.assign(json.search, { status: { "$ne": 'inactive' } });
      setLoading(true);
      HitApi(json, api).then((result) => {
        if (result?.success !== false) {
          CompileSelectData(result?.content, getFieldName, type).then((compiledData) => {
            if (compiledData) {
              setOptions(compiledData);
              dispatch(setSearchableSelectData(result?.content));
            }
            setLoading(false);
          });
        } else {
          setLoading(false);
        }
      });
    }
  };

  const handleChange = (e) => {
    const { value, _id, label } = e;
    let tempSelected = reduxSelect?.selected ? [...reduxSelect.selected] : [];
    const foundIndex = tempSelected.findIndex((obj) => obj?.name === name && obj?.selectionType === selectionType);

    if (foundIndex !== -1) {
      tempSelected[foundIndex] = { name, label, value, selectionType };
    } else {
      tempSelected = [...tempSelected, { name, label, value, selectionType }];
    }

    dispatch(setSearchableSelectSelectedData([...tempSelected]));

    // Update the parent or redux state
    if (parent) {
      parent.userEntry = value; // Update parent's userEntry
    } else if (reduxState) {
      const updatedState = { ...reduxState, [name]: value };
      dispatch(setAction(updatedState));
    }

    if (onChange) onChange(e, tempSelected);
    if (validate) validate([name, value]);
  };

  const handleClear = () => {
    let tempSelected = reduxSelect?.selected || [];
    const existingIndex = tempSelected.findIndex(item => item?.name === name && item?.selectionType === selectionType);

    if (existingIndex !== -1) {
      tempSelected.splice(existingIndex, 1);
      dispatch(setSearchableSelectSelectedData([...tempSelected]));
    }

    if (reduxState) {
      const updatedState = { ...reduxState };
      delete updatedState[name];
      dispatch(setAction(updatedState));
    }

    if (onClear) onClear();
  };

  const GetValue = () => {
    if (parent) {
      return parent?.userEntry;
    } else if (_id) {
      const foundItem = options?.find(obj => obj?._id === _id);
      return foundItem?.label;
    } else {
      const foundItem = reduxSelect?.selected?.find(obj => obj.name === name && obj?.selectionType === selectionType);
      // const foundItem = reduxSelect?.selected?.find(obj => obj.name === name && obj?.selectionType === selectionType);

      return foundItem?.label;
    }
  };

  return (
    <div>
      {!hide && (
        <>
          <div className={cn('font-semibold text-[13px] flex items-center justify-between')}>
            {label && label}
            {enableSwitch && <CustomSwitch name={name} parent={parent} reduxState={reduxState} setAction={setAction} />}
          </div>
          <div className={cn('flex relative')}>
            <Select
              name={name}
              searchable={searchable || false}
              clearable={clearable !== false}
              onClear={handleClear}
              options={options || []}
              placeholder={placeholder || `Select ${label || '...'} `}
              className={cn(className, 'bg-white capitalize min-w-[10rem]', selectionType)}
              selectClassName={cn('h-[2.2rem] text-[13px] tracking-wide')}
              dropdownClassName="p-2 gap-1 grid z-[99] capitalize"
              getOptionDisplayValue={(option) =>
                useCustomDisplay ? renderOptionDisplayValue(option) : renderDefaultDisplay(option)
              }
              error={error?.[name]}
              value={GetValue()}
              onChange={handleChange}
              disabled={disabled || false}
            />
            {actionButton && (
              <label
                className={cn('flex items-center p-2 border-2 rounded-r-md cursor-pointer')}
                onClick={() => {
                  if (actionButtonClick && !actionButtonloading) actionButtonClick();
                }}
              >
                {actionButtonloading ? (
                  <Loader size="sm" className="text-red-main w-4" />
                ) : (
                  <FaCheck />
                )}
              </label>
            )}
          </div>
          {disabled && (
            <span className="text-red-500 text-xs tracking-wide">This field cannot be edited</span>
          )}
        </>
      )}
    </div>
  );
}
