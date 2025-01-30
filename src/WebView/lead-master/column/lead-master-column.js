import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import TableActions from "../../../Component/ui/table/TableActions";
import { ScreenName } from "../../../Constant/Screen/Screen";
import { HeaderCell } from "../../../Component/ui/table/table";
import { Text } from "rizzui";
import useCustomAlertController from "../../../Hooks/use-custom-alert";

export const Columns = [
  { title: 'Sr.No', dataIndex: 'index' },
  { title: 'Make', dataIndex: 'make' },
  { title: 'Grade', dataIndex: 'grade' },
  { title: 'Description', dataIndex: 'itemDescription' },
  { title: 'Qty', dataIndex: 'quantity' },
  { title: 'Basic Rate', dataIndex: 'basicRate' },
  { title: 'Total Amount', dataIndex: 'totalAmount' },
  { title: 'Action', dataIndex: 'action' }
]

export const LeadMasterColumn = (ele) => {
  const { showCustomAlert } = useCustomAlertController();
  const [loadingRows, setLoadingRows] = useState({});

  const renderCell = (value, row, content) => (
    loadingRows[row.index] ? <Skeleton /> : content
  );
  const dynamicColumns = Columns?.map((key) => {
    const isActionColumn = key.dataIndex === 'action';
    if (isActionColumn) {
      return {
        title: <HeaderCell title={key.title} className="font-extrabold" />,
        dataIndex: key.dataIndex,
        key: key.dataIndex,
        width: key.dataIndex === 'index' ? 10 : 200,
        render: (value, row) => <TableActions
          screen={ScreenName.leadMaster}
          row={row}
        />
      };
    } else {
      return {
        title: <HeaderCell title={key.title} className="font-extrabold" />,
        dataIndex: key.dataIndex,
        key: key.dataIndex,
        width: key.dataIndex === 'index' ? 10 : 200,
        render: (value, row) => renderCell(value, row, (
          <Text className="font-medium text-gray-700">{value || '---'}</Text>
        ))
      };
    }

  });
  return dynamicColumns || [];
};