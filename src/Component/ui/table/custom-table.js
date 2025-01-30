import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './table';
import cn from '../../../Utils/class-names';
import { setNestedPagination, setPagination } from '../../../Store/Action/Pagination/PaginationAction';
import TablePagination from './table-pagination';
import Skeleton from 'react-loading-skeleton'; // Import skeleton loader

export default function ControlledTable({
  columns,
  className,
  data,
  ApiHit,
  nested,
  isLoading,
  disablePagination,
  expandable,
}) {
  const dispatch = useDispatch();
  const reduxPagination = useSelector((state) => state.PaginationReducer);



  const handlePaginate = (page) => {
    let json = nested ? reduxPagination?.nestedPagination?.[nested] : reduxPagination?.doc;
    json.number = page;

    if (nested) {
      const oldNestedPagination = { ...reduxPagination?.nestedPagination };
      Object.assign(oldNestedPagination, { [nested]: json });
      dispatch(setNestedPagination(oldNestedPagination));
    } else {
      dispatch(setPagination(json));
    }

    if (ApiHit) ApiHit();
  };

  // Helper function to render skeleton rows
  const renderSkeletonRows = (rowCount) => {
    return Array(rowCount)
      .fill(null)
      .map((_, index) => (
        <tr key={index} className="rc-table-row">
          {columns.map((col, colIndex) => (
            <td key={colIndex} className="rc-table-cell">
              <Skeleton width="100%" height={30} />
            </td>
          ))}
        </tr>
      ));
  };

  // Pass the correct expandable structure to CustomTable
  const formattedExpandable = expandable
    ? {
        expandedRowRender: expandable.expandedRowRender,
        rowExpandable: expandable.rowExpandable,
        expandedRowKeys: expandable.expandedRowKeys,
        onExpand: expandable.onExpand,
      }
    : null;

  return (
    <div className="">
      {/* Table Section */}
      <div className="relative">
        <Table
          data={!isLoading ? data : []} // Pass empty data when loading
          rowKey={(record) => record._id || record.index} // Adjusted for data consistency
          className={cn(className)}
          columns={columns}
          expandable={formattedExpandable} // Use formatted expandable prop
          components={{
            body: {
              wrapper: (props) => (
                <tbody {...props}>
                  {/* When loading, show skeleton rows */}
                  {isLoading ? renderSkeletonRows(5) : props.children}
                </tbody>
              ),
            },
          }}
        />
      </div>

      {/* Pagination Section */}
      {!disablePagination && (
        <TablePagination
          nested={nested}
          current={reduxPagination?.nestedPagination?.[nested]?.number || reduxPagination?.doc?.number}
          total={reduxPagination?.nestedPagination?.[nested]?.totalElements || reduxPagination?.doc?.totalElements}
          pageSize={reduxPagination?.nestedPagination?.[nested]?.limit || reduxPagination?.doc?.limit}
          onChange={handlePaginate}
          ApiHit={ApiHit}
        />
      )}
    </div>
  );
}
