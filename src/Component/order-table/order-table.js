import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HitApi } from '../../Store/Action/Api/ApiAction'
import { searchOrder } from '../../Constant/Api/Api'
import { CompileOrderData } from '../../WebView/order/promiss/order-promiss'
import { setOrderApiJson, setOrderData } from '../../Store/Action/order/order-action'
import { setPagination } from '../../Store/Action/Pagination/PaginationAction'
import useDynamicLoading from '../../Hooks/use-dynamic-loading'
import ControlledTable from '../ui/table/custom-table'
import { GetOrderColumn } from '../../WebView/order/order-column'
import { useColumn } from '../../Hooks/use-column'
import { TableClass } from '../../Constant/Classes/Classes'

export default function OrderTable({ type, buildingId }) {

    var dispatchFrom = buildingId
    var dispatchTo = buildingId
    var type = type

    const dispatch = useDispatch()
    const reduxOrder = useSelector(state => state.OrderReducer)
    const reduxPagination = useSelector(state => state.PaginationReducer);
    const { loadingState, setDynamicLoading } = useDynamicLoading()

    useEffect(() => {

        if (dispatchFrom && dispatchTo && type!==undefined) {
            loadData('init')
        }
    }, [buildingId,type])

    const loadData = () => {
        let json = { ...reduxOrder?.searchJson };
        const query = type ? { "$or": [{ dispatchFrom: dispatchFrom, dispatchTo: dispatchTo }, { dispatchTo: dispatchTo }] } : { dispatchFrom: dispatchFrom, dispatchTo: {"$ne":dispatchTo} }
        if (json?.search) {
            Object.assign(json.search, query);
        } else {
            json.search = query;
        }
        HitApi(json, searchOrder).then((result) => {
            if (result?.content?.[0]) {
                CompileOrderData(result, reduxPagination?.doc).then((compiledData) => {
                    dispatch(setOrderData(compiledData));
                    dispatch(setPagination({
                        limit: json?.limit,
                        totalPages: compiledData?.totalPages,
                        number: compiledData?.number,
                        totalElements: compiledData?.totalElements,
                    }));
                    setDynamicLoading({ order: false })
                })
            }
        })
    };

    const columns = useMemo(() => GetOrderColumn(loadData))
    const { visibleColumns } = useColumn(columns);

    return (
        <div>

            <ControlledTable
                isLoading={loadingState?.doc?.order}
                data={reduxOrder?.doc?.content}
                columns={visibleColumns}
                className={TableClass}
                json={reduxOrder?.searchJson}
                setAction={setOrderApiJson}
                ApiHit={loadData}
            />
        </div>
    )
}
