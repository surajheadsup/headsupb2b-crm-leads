import { routes } from "./routes";

export const pageHeader = [
    {
        title: 'User Management', breadcrumb: [
            { href: routes?.panel?.userManagement?.users, name: 'Users' },
            { name: 'List' }
        ],
    }, {
        title: 'Role And Permission', breadcrumb: [
            { href: routes?.panel?.userManagement?.users, name: 'Roles And Permission' },
            { name: 'List' }
        ],
    }, {
        title: 'Site Master', breadcrumb: [
            { href: routes?.panel?.master?.siteMaster, name: 'Site Master' },
            { name: 'List' }
        ],
    }, {
        title: 'Building Master', breadcrumb: [
            { href: routes?.panel?.master?.buildingsMaster, name: 'Building Master' },
            { name: 'List' }
        ],
    },
     {
        title: 'Reader Master', breadcrumb: [
            { href: routes?.panel?.master?.readerMaster, name: 'Reader Master' },
            { name: 'List' }
        ],
    },
    {
        title: 'Reader Replacement', breadcrumb: [
            { href: routes?.panel?.master?.readerMaster, name: 'Reader Replacement' },
            { name: 'List' }
        ],
    },
    {
        title: 'Reader Health', breadcrumb: [
            { href: routes?.panel?.master?.readerHealthMaster, name: 'Reader Health' },
            { name: 'List' }
        ],
    },
    {
        title: 'Product Master', breadcrumb: [
            { href: routes?.panel?.master?.productMaster, name: 'Product Master' },
            { name: 'List' }
        ],
    }, {
        title: 'Customer Master', breadcrumb: [
            { href: routes?.panel?.master?.customerMaster, name: 'Customer Master' },
            { name: 'List' }
        ],
    },
    {
        title: 'Create Product', breadcrumb: [
            { href: routes?.panel?.master?.productMaster, name: 'Product Master' },
            { href: routes?.panel?.master?.createProduct, name: 'Create' }
        ],
    },
    {
        title: 'Create Customer', breadcrumb: [
            { href: routes?.panel?.master?.productMaster, name: 'Customer Master' },
            { href: routes?.panel?.master?.createProduct, name: 'Create' }
        ],
    },{
        title: 'Supplier Master', breadcrumb: [
            { href: routes?.panel?.master?.supplierMaster, name: 'Supplier Master' },
            { name: 'List' }
        ],
    },{
        title: 'Create Supplier', breadcrumb: [
            { href: routes?.panel?.master?.supplierMaster, name: 'Supplier Master' },
            { href: routes?.panel?.master?.createSupplier, name: 'Create' },
            { name: '' }
        ],
    },
    {
        title: 'Reports', breadcrumb: [],
    },
    {
        title: 'Inbound', breadcrumb: [
            { href: routes?.panel?.inbond?.inboundOrder, name: 'Inbound' },
            { name: 'List' }
        ],
    },
    {
        title: 'Inbound / Web Receving', breadcrumb: [
            { href: routes?.panel?.inbond?.inboundOrder, name: 'Web Receving' },
            { name: 'List' }
        ],
    },
    {
        title: 'Inbound / Create', breadcrumb: [
            { href: routes?.panel?.inbond?.inboundCreate, name: 'Inbound Create' },
            { name: 'List' }
        ],
    },
    {
        title: 'Outbound', breadcrumb: [
            { href: routes?.panel?.outbond?.outOrder, name: 'Outbound' },
            { name: 'List' }
        ],
    },
    {
        title: 'Outbound / Web Picking', breadcrumb: [
            { href: routes?.panel?.outbond?.webPicking, name: 'Web Picking' },
            { name: 'List' }
        ],
    },
    {
        title: 'Outbound / Create', breadcrumb: [
            { href: routes?.panel?.inbond?.inboundCreate, name: 'Outbound Create' },
            { name: 'List' }
        ],
    },
    {
        title: 'Mapper', breadcrumb: [
            { href: routes?.panel?.inbond?.inboundCreate, name: 'Mapper' },
            { name: 'List' }
        ],
    },

] 
