import React, { useEffect, useState } from 'react';
import { MultiSelect } from 'rizzui'; // Assuming Rizzui has a MultiSelect component
import { HitApi } from '../../../../Store/Action/Api/ApiAction';
import { CompileMultiSelectData } from './select-promiss';
import cn from '../../../../Utils/class-names';

const SearchableMultiSelect = ({
  name, limit, reduxState, api, searchable, dynamicSearch,
  getFieldName, onChange, label, callBackJson, error, validate, hideSelectedOptions, dropdownClassName
}) => {
  const [options, setOptions] = useState(null);
  const [selectedValues, setSelectedValues] = useState(null);

  const value = reduxState?.[name] || [];

  useEffect(() => {
    // Load options if API and data are available
    if (options === null && api) {
      loadData();
    } else {
      if (value?.length > 0) {

        var isObjectArray = Array.isArray(value) && value.every(item => typeof item === 'object' && item !== null && !Array.isArray(item));

        handleLoadData(isObjectArray)
      }

    }



  }, [options, callBackJson, value]);

  const handleLoadData = (isObjectArray) => {
    if (options) {
      if (isObjectArray) {
        const defaultSelected = value.map((item) => {
          const transformedObj = {};
          // Map reduxState values to expected structure using callBackJson keys
          for (const key in callBackJson) {

            transformedObj[callBackJson[key]] = item[key];
          }
          return transformedObj;
        });
        setSelectedValues(defaultSelected);
      } else {
        const defaultSelected = value.map((itemValue) => {
          const matchingOption = options.find((opt) => opt.value === itemValue);
          if (matchingOption) {
            return { label: matchingOption.label, value: matchingOption.value };
          } else {
            // If no matching option is found, fallback to {label: value, value: value}
            return { label: itemValue, value: itemValue };
          }
        });
        setSelectedValues(defaultSelected);

      }
    }
  }

  // Handler for when the user changes the selection
  const handleChange = (selectedOptions) => {
    const selectedValues = selectedOptions
      .map((selectedOption) => {
        const matchingOption = options.find((opt) => opt.value === selectedOption);
        return matchingOption
          ? {
            label: matchingOption.label,
            value: matchingOption.value,
            ele: matchingOption?.ele
          }
          : undefined;
      })
      .filter(Boolean); // Filter out any undefined values

    setSelectedValues(selectedValues);

    let transformedValues;
    if (callBackJson) {
      transformedValues = selectedValues.map((ele) => {
        const transformedObj = {};
        for (const key in callBackJson) {
          transformedObj[key] = ele[callBackJson[key]];
        }
        return transformedObj;
      });
    }
    if (value) {
      Object.assign(reduxState, { [name]: transformedValues || selectedValues });
    }

    if (onChange) {
      onChange(transformedValues || selectedValues);
    }
    if (validate) validate([name, value]);
  };

  const loadData = () => {
    const json = { page: 1, limit: limit || 30, search: dynamicSearch || {} };
    HitApi(json, api).then((res) => {
      if (res?.content?.[0]) {
        CompileMultiSelectData(res?.content, getFieldName).then((CompiledData) => {
          setOptions(CompiledData);
        });
      }
    });
  };


  return (
    <div>
      <MultiSelect
        options={options || []}
        value={selectedValues?.map((item) => item.value)}
        onChange={handleChange}
        placeholder="Search and select values"
        searchable={searchable}
        label={label}
        // className={'max-w-7'}
        dropdownClassName={cn(dropdownClassName, 'max-h-7')}
        error={error?.[name]}
        hideSelectedOptions={hideSelectedOptions || false}
      />
    </div>
  );
};

export default SearchableMultiSelect;
