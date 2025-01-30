import { useState, useMemo, useEffect } from 'react';
import { filterData } from '../Utils/filter-data';

export function useColumn(columnsData, screenId) {

  const getStoredColumns = () => {
    if (!screenId) {
      // No screenId, return all columns by default
      return columnsData.map((column) => column.dataIndex);
    }

    // Retrieve visible columns for the screen from localStorage
    const storedData = JSON.parse(localStorage.getItem('visibleColumns')) || {};
    return storedData[screenId] || columnsData.map((column) => column.dataIndex);
  };

  const [checkedColumns, setCheckedColumns] = useState(getStoredColumns);

  const visibleColumns = useMemo(
    () => filterData(columnsData, checkedColumns),
    [columnsData, checkedColumns]
  );

  // Store visible columns for the current screen in localStorage (only if screenId exists)
  useEffect(() => {
    if (screenId) {
      const storedData = JSON.parse(localStorage.getItem('visibleColumns')) || {};
      storedData[screenId] = checkedColumns;
      localStorage.setItem('visibleColumns', JSON.stringify(storedData));
    }
  }, [checkedColumns, screenId]);

  return { visibleColumns, checkedColumns, setCheckedColumns };
}
