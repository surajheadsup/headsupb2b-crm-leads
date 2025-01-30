import React from 'react'
import { HitApi } from '../../../Store/Action/Api/ApiAction';
import { searchApiService } from '../../../Constant/Api/Api';
import { Button } from 'rizzui';

export default function ChildTable({ row }) {

    const handleSetting = (row, serverData) => {

        var json = {
            page: 1,
            limit: 1,
            search: { _id: row?.serviceId }
        }



        // HitApi(json, searchApiService).then((result) => {

        //     var checkGlobal = result?.content?.[0]?.globalVariables



        //     if (checkGlobal) {
        //         var findHost = checkGlobal?.find((Obj) => Obj.valueName === 'host')
        //         if (findHost) {

        //             findHost.data = serverData?.host
        //             if (findHost.data !== 'blankhost') {

        //                 autoRequest(result?.content?.[0], setData)
        //             }
        //         }
        //     }
        // })
    }

    return (
        <div>
            <table>
                <tr>
                    <td>Configuraiton Name</td>
                    <td>  </td>
                </tr>
            </table>

            
            
            {/* {row?.apiService?.map((ele, index) => {
                return <Button onClick={() => handleSetting(ele, row)} >{ele?.serviceUsage}</Button>
            })} */}
        </div>
    )
}
