import { useState, useEffect } from 'react';
import { useFilterOptions } from '../../../Hooks/user-filter-options';

const useDynamicOptions = ({ data, serverKey }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (data && serverKey) {
      const generatedOptions = data.map((ele, index) => ({
        _id: index,
        label: ele[serverKey],
        value: ele[serverKey],
        status: true,
      }));
      setOptions(generatedOptions);
    }
  }, [data, serverKey]);

  return options;
};

export default useDynamicOptions;
