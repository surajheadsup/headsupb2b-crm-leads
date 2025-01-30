import { routes } from "../../config/routes";
export const DUMMY_ID = '1'
// Note: do not add href in the label object, it is rendering as label
export const pageLinks = [
  { name: 'Dashboard', href: routes?.panel?.dashboard, },
  { name: 'User Management', href: routes?.panel?.master?.users, status : false },
  { name: 'Roles and Permission', href: routes?.panel?.master?.rolesAndPermission, status : false },
  { name: 'Site Master', href: routes?.panel?.master?.siteMaster, status : false },
  { name: 'Buildings Master', href: routes?.panel?.master?.buildingsMaster, status : false },
  { name: 'Zone Master', href: routes?.panel?.master?.zomeMaster, status : false },
  { name: 'Tag Master', href: routes?.panel?.master?.tagMaster, status : false },
  { name: 'Location Master', href: routes?.panel?.master?.locationMaster, status : false },
  { name: 'Product Master', href: routes?.panel?.master?.productMaster, status : false },
  { name: 'Customer Master', href: routes?.panel?.master?.customerMaster, status : false },
  { name: 'Supplier Master', href: routes?.panel?.master?.supplierMaster, status : false },
  { name: 'Inventory Master', href: routes?.panel?.master?.innventoryMaster, status : false },
  { name: 'Vehicle Master', href: routes?.panel?.master?.vehicleMaster, status : false },
  { name: 'Configuration Master', href: routes?.panel?.master?.configurationMaster, status : false },
  { name: 'General Master', href: routes?.panel?.master?.generalMaster, status : false },
  { name: 'Mapping Master', href: routes?.panel?.master?.mappingMaster, status : false },
  { name: 'Certificates', href: routes?.panel?.deviceManager?.certificates, status : false },
  { name: 'Brokers', href: routes?.panel?.deviceManager?.broker, status : false },
  { name: 'Configuration', href: routes?.panel?.deviceManager?.configuration, status : false },
  { name: 'Mapper', href: routes?.panel?.deviceManager?.mapper, status : false },
  { name: 'Api Services', href: routes?.panel?.deviceManager?.apiService, status : false },
  { name: 'Devices', href: routes?.panel?.deviceManager?.devices, status : false },
  { name: 'Inbound Order', href: routes?.panel?.order?.inboundOrder, status : false },
  { name: 'Outbound Order', href: routes?.panel?.order?.outboundOrder, status : false}

];
