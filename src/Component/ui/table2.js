import React from 'react';
import Skeleton from 'react-loading-skeleton';
import cn from '../../Utils/class-names';
import { Empty, Text } from 'rizzui';

export default function Table2({
  columns,
  data,
  rowKey = 'key',
  className,
  loadingRow,
}) {
  return (
    <div className={`overflow-x-auto ${cn(className)}`}>
      <table className="min-w-full bg-white border border-gray-300 rounded-[14px]">
        <thead>
          <tr className="text-left bg-red-main text-white">
            {columns.map((column) => (
              <th
                key={column.key || column.dataIndex}
                style={{ width: column.width }}
                className="px-4 py-2 border-b border-gray-300 text-left"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((dataItem, index) => (
              <tr key={dataItem[rowKey] || index} className={loadingRow === dataItem._id ? 'opacity-50' : ''}>
                {loadingRow === dataItem._id ? (
                  <td colSpan={columns.length} className="p-2">
                    <Skeleton height={40} />
                  </td>
                ) : (
                  columns.map((column) => (
                    <td
                      key={column.key || column.dataIndex}
                      style={{ width: column.width }}
                      className="px-4 py-2 border-b border-gray-300"
                    >
                      {column.render
                        ? column.render(dataItem[column.dataIndex], dataItem, index)
                        : dataItem[column.dataIndex]}
                    </td>
                  ))
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-5 text-center lg:py-8">
                <Empty />
                <Text className="mt-3">No Data</Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
