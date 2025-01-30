import SearchableSelect from "../../Component/ui/form/select/SearchableSelect";
import { GetUserQuery } from "../../Utils/Utils";
import { searchBuilding, searchGeneral, searchRole } from "../Api/Api";
import { TagOptions } from "../Common/Common";
import { inboundText, outboundText } from "../Common/common-variable";
import { ScreenName } from "../Screen/Screen";


export const FilterCondition = [
    {
        _id: 1, screen: ScreenName?.user,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect selectionType="filter" name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,

            },
            {
                id: 1,
                serverKey: 'roleName',
                render: (onChange, onClear) => <SearchableSelect selectionType="filter" name={'roleName'} placeholder={'Select Role Name'} type={'filter'} api={searchRole} getFieldName={'roleName'} onChange={onChange} onClear={onClear} useCustomDisplay={false} />,

            }
        ]
    },
    {
        _id: 1, screen: ScreenName?.roleAndPermission,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect selectionType="filter" name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,

            },

            {
                id: 0,
                serverKey: 'roleName',
                render: (onChange, onClear) => <SearchableSelect searchable name={'roleName'} placeholder={'Select Role Name'} type={'filter'} api={searchRole} getFieldName={'roleName'} onChange={onChange} onClear={onClear} useCustomDisplay={false} />,

            }
        ]
    },
    {
        _id: 1, screen: ScreenName?.siteMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,

            }
        ]
    },
    {
        _id: 3, screen: ScreenName?.buildingMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,

            }
        ]
    }, {
        _id: 3, screen: ScreenName?.zoneMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,

            }
        ]
    }, {
        _id: 3, screen: ScreenName?.tagMaster,
        condition: [
            {
                id: 0,
                serverKey: 'tagType',
                render: (onChange, onClear) => <SearchableSelect name={'tagType'} placeholder={'Select Tag Type'} type={'filter'} defaultOptions={TagOptions} getFieldName={'value'} onChange={onChange} onClear={onClear} />,

            }
        ]
    }, {
        _id: 3, screen: ScreenName?.locationMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.productMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.customerMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.supplierMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.vehicleMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.generalMaster,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.certificates,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'status'} placeholder={'Select Status'} type={'filter'} api={searchGeneral} dynamicSearch={{ 'usedBy': 'status' }} getFieldName={'value'} onChange={onChange} onClear={onClear} useCustomDisplay={true} />,
            }
        ]
    }, {
        _id: 3, screen: ScreenName?.inboundOrder,
        condition: [
            {
                id: 0,
                render: (onChange, onClear) => <SearchableSelect name={'currentLocation'} selectionType={inboundText} placeholder={'Select Building Inbound'} type={'filter'} api={searchBuilding} dynamicSearch={GetUserQuery({}, true)} getFieldName={'buildingName'} onChange={onChange} onClear={onClear} />,
            },
        ]
    }, {
        _id: 3, screen: ScreenName?.outboundOrder,
        condition: [
            {
                id: 0,
                serverKey: 'status',
                render: (onChange, onClear) => <SearchableSelect name={'currentLocation'} selectionType={outboundText} placeholder={'Select Building Outbound'} type={'filter'} api={searchBuilding} dynamicSearch={GetUserQuery({}, true)} getFieldName={'buildingName'} onChange={onChange} onClear={onClear} />,

            },
        ]
    }, {
        _id: 3, screen: ScreenName?.quotationMaster,
        condition: [
            {
                id: 0,
                serverKey:'quantity',
                render: (onChange, onClear) => <SearchableSelect name={'quantity'} selectionType={outboundText} placeholder={'Select Qty'} type={'filter'} defaultOptions={[{label:'35',value:'35'}]} getFieldName={'buildingName'} onChange={onChange} onClear={onClear} />,

            },
            
        ]
    }
]

