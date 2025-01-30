import React, { useEffect, useMemo } from 'react'
import useDynamicLoading from '../../Hooks/use-dynamic-loading'
import { ScreenName } from '../../Constant/Screen/Screen'
import { CompileLeadMaster } from './promiss/lead-master-promiss'
import { setPagination } from '../../Store/Action/Pagination/PaginationAction'
import { setLeadMasterData } from '../../Store/Action/lead-master/lead-master-action'
import { LeadMasterColumn } from './column/lead-master-column'
import { useColumn } from '../../Hooks/use-column'
import PageHeader from '../../shared/page-header'
import ControlledTable from '../../Component/ui/table/custom-table'
import { useDispatch, useSelector } from 'react-redux'
import { HitApi } from '../../Store/Action/Api/ApiAction'
import { getLead } from '../../Constant/Api/Api'

function LeadMaster() {

  const dispatch = useDispatch()
  const reduxLead = useSelector(state => state.LeadMasterReducer)
  const reduxPagination = useSelector(state => state.PaginationReducer)
  const { loadingState, setDynamicLoading } = useDynamicLoading()

  const screen = ScreenName.leadMaster

  const loadData = (type) => {
    var searchJson = reduxLead.searchJson
    if (type === 'init') {
      Object.assign(searchJson, { page: 1, limit: 10 })
    } else {
      Object.assign(searchJson, { page: reduxPagination?.doc?.number, limit: reduxPagination?.doc?.limit })
    }
    setDynamicLoading({ lead: true })

    HitApi(searchJson, getLead).then((result) => {
      CompileLeadMaster(result, reduxPagination?.doc).then((CopmpiledResult) => {
        dispatch(setLeadMasterData(CopmpiledResult))
        dispatch(setPagination({ 
          limit: searchJson?.limit,
          totalPages: CopmpiledResult?.totalPages,
          number: CopmpiledResult?.number,
          totalElements: CopmpiledResult?.totalElements,
        }));
        setDynamicLoading({ lead: false })
      })
    })
  }

  const columns = useMemo(() => LeadMasterColumn())
  const { visibleColumns, checkedColumns, setCheckedColumns } = useColumn(columns, screen);

  useEffect(() => {
    if (reduxLead?.doc === null) {
      loadData('init')
    }

  }, [])

  return <div>
    <PageHeader
      screen={screen}
      href={'routes?.panel?.master?.createLead'}
      columns={columns}
      checkedColumns={checkedColumns}
      setCheckedColumns={setCheckedColumns}
      json={reduxLead?.searchJson}
      setAction={setLeadMasterData}
      ApiHit={loadData}
    />
    <ControlledTable
      screen={screen}
      isLoading={loadingState?.doc?.lead}
      data={reduxLead?.doc?.content}
      columns={visibleColumns}
      json={reduxLead?.searchJson}
      setAction={setLeadMasterData}
      ApiHit={loadData}
    />
  </div>
}

export default LeadMaster
