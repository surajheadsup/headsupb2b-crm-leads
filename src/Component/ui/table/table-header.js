import React from 'react'
import { getUserColumns } from '../../WebView/user-management/users/user-column'
import { HeaderCell } from '../ui/table';

export default function TableHeader({ columns }) {
  return (
    <tr>
      {
        columns?.map((item, index) => <td ><HeaderCell title={item?.title}  /></td>)
      }
    </tr>
  )
}
