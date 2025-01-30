import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import cn from '../../../Utils/class-names';
import { useDispatch } from 'react-redux';
import { Input } from 'rizzui';
import { CiCalendar } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";




// Calendar container styles
export const calendarContainerStyles = {
    base: "[&.react-datepicker]:shadow-lg [&.react-datepicker]:border-gray-100 [&.react-datepicker]:rounded-md",
    monthContainer: {
        padding: "[&.react-datepicker>div]:pt-5 [&.react-datepicker>div]:pb-3",
    },
};

// Styles for previous/next buttons
export const prevNextButtonStyles = {
    base: "[&.react-datepicker>button]:items-baseline [&.react-datepicker>button]:top-7",
    border: "[&.react-datepicker>button]:border [&.react-datepicker>button]:border-solid [&.react-datepicker>button]:border-muted [&.react-datepicker>button]:rounded-md",
    size: "[&.react-datepicker>button]:h-[22px] [&.react-datepicker>button]:w-[22px]",
    children: {
        position: "[&.react-datepicker>button>span]:top-0",
        border: "[&.react-datepicker>button>span]:before:border-t-[1.5px] [&.react-datepicker>button>span]:before:border-r-[1.5px] [&.react-datepicker>button>span]:before:border-muted",
        size: "[&.react-datepicker>button>span]:before:h-[7px] [&.react-datepicker>button>span]:before:w-[7px]",
    },
};

// Time-only styles
export const timeOnlyStyles = {
    base: "[&.react-datepicker--time-only>div]:pr-0 [&.react-datepicker--time-only>div]:w-28",
};

export default function CustomDatePicker({ name, label, important = true, reduxState, setAction, onChange, calendarClassName, minDate, maxDate, type, validate, error, showYearPicker, showMonthYearPicker, dateFormat }) {
    const dispatch = useDispatch()
    const [isCalenderOpen, setIsCalenderOpen] = useState(false);
    const handleCalenderOpen = () => setIsCalenderOpen(true);
    const handleCalenderClose = () => setIsCalenderOpen(false);

    // Combine all styles using cn function
    const calendarClass = cn(calendarContainerStyles.base, calendarContainerStyles.monthContainer.padding, prevNextButtonStyles.base, prevNextButtonStyles.border, prevNextButtonStyles.size, prevNextButtonStyles.children.position, prevNextButtonStyles.children.border, prevNextButtonStyles.children.size, timeOnlyStyles.base, calendarClassName);

    const value = reduxState?.[name] || '';

    // Handle change event
    const handleOnChange = (date) => {
        if (validate) validate([name, date]);
        if (onChange) { onChange(date) }
    };

    return (
        <div className='flex flex-col'>
            <label className="block font-bold">{label}{important === false ? '(Optional)' : ''}</label>
            <DatePicker
                highlightDates={[Date.now()]}
                minDate={minDate || Date.now()}
                maxDate={maxDate}
                dateFormat={dateFormat || 'd MMMM yyyy'}
                selected={value} // Pass the current value from reduxState
                onChange={handleOnChange} // Handle onChange event
                placeholderText={`Select ${label}`} // Dynamic placeholder based on label
                calendarClassName={cn(calendarClass, 'bg-white')} // Apply the combined styles
                customInput={<Input prefix={<CiCalendar className="w-5 h-5 text-gray-500 " />} suffix={<FiChevronDown className={cn("h-4 w-4 text-gray-500 transition", isCalenderOpen && "rotate-180")} />} />}
                onCalendarOpen={handleCalenderOpen}
                onCalendarClose={handleCalenderClose}
                showYearPicker={showYearPicker||false}
                showMonthYearPicker={showMonthYearPicker||false}
            />
            {error?.[name] && <span className='text-red text-[13px] mt-0.5 rizzui-input-error-text'>{error?.[name]}</span>}

        </div>
    );
}
