import React from "react";
import { useDispatch } from "react-redux";
import { DROPDOWN_OPTIONS } from "../../../../Constant/DropdownConstant";

const MySelect = ({ type, label, selectedValue, name, onChange, setAction, reduxState }) => {
  const dispatch = useDispatch();
  const updatedJson = reduxState

  const options = DROPDOWN_OPTIONS[type] || [];

  const handleChange = (event) => {
    const selectedOption = event.target.value;
    updatedJson[name] = selectedOption
    console.log("selectedOption", selectedOption);
    dispatch(setAction(updatedJson))
    // if (onChange) {


    // }

  };

  return (
    <div className="flex flex-col">

      <label htmlFor={`select-${type}`} className="block text-[13px] font-bold">
        {label || "Choose an option"}
      </label>
      <select
        id={`select-${type}`}
        value={selectedValue}
        onChange={handleChange}
        className="w-full text-sm rounded-lg disabled:bg-gray-200"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
