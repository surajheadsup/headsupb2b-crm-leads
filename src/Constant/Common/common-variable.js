export const _id = "_id";
export const deactiveText = "deactive";
export const statusText = "status";
export const location = "location";
export const weighing_scale = "weighing_scale";
export const reader = "reader";
export const vehicle = "vehicle";
export const building = "building";

// Roles and Permission
export const master = "master";
export const userManagementMaster = "user management";
export const rolesAndPermissionMaster = "roles and permission";
export const siteMaster = "site master";
export const buildingsMaster = "buildings master";
export const zoneMaster = "zone master";
export const tagMaster = "tag master";
export const locationMaster = "location master";
export const productMaster = "product master";
export const customerMaster = "customer master";
export const supplierMaster = "supplier master";
export const inventoryMaster = "inventory master";
export const vehicleMaster = "vehicle master";
export const configuraitonMaster = "configuration master";
export const generalMaster = "general master";
export const mappingMaster = "mapping master";
export const purchaseMaster = "purchase master";
export const quatationMaster = "quotation master";
export const leadMaster = "lead master";

// Device
export const readerMaster = "reader master";
export const readerReplacementMaster = "reader replacement master";
export const readerHealthMaster = "reader health master";
export const readerBuildingMappingMaster = "reader building mapping master";
export const weighingScaleMaster = "weighing scale master";

// Device Manager
export const deviceManager = "Device Manager";
export const certificateManager = "certificate";
export const brokerManager = "broker";
export const configurationDeviceManager = "configuration";
export const mapperManager = "mapper";
export const apiServicesManager = "api services";
export const devicesManager = "devices";

// Hand held device
export const handHeldManager = "Handheld Manager";
export const masterOperation = "Master Operation";
export const outboundOrder = "Outbound Orders";
export const inboundOrder = "Inbound Orders";
export const incommingOrder = "Incomming Orders";
export const incommingOrderText = "Incomming Order";
export const holdOrder = "Hold";
export const unHoldOrder = "Un Hold";
export const replaceOrder = "Replace";
export const consumeOrder = "Consume";
export const mappingOrder = "Mapping";
export const cycleCount = "Cycle Count";
export const moveOrder = "Move";
export const gStatusChange = "General Status Change";
export const recheckOrder = "Recheck Order";
export const weighingScale = "Weighing Scale";
export const InventoryText = "Inventory";
export const ActiveInventoryText = "Active Inventory";
export const InactiveInventoryText = "Inactive Inventory";

// inbound order
export const inbound = "inbound";
export const panelInboundOrder = "inbound order";

export const outbound = "outbound";

export const outboundText = "OUTBOUND";
export const inboundText = "INBOUND";
export const readerText = "Readers";
export const cycleCountText = "Cycle Count";

export const dashboardText = "dashboard";
export const orderText = "orders";

// Order Status
export const ORDER_PICKING = "ORDER_PICKING";
export const ORDER_PICKED = "ORDER_PICKED";
export const HOLD = "HOLD";
export const UNHOLD = "UNHOLD";
export const CONSUME = "CONSUME";
export const ORDER_RECEIVING = "ORDER_RECEIVING";
export const ORDER_RECEIVED = "ORDER_RECEIVED";
export const ORDER_RECEIVED_PARTIALLY = "ORDER_RECEIVED_PARTIALLY";
export const CANCELLED = "CANCELLED";

export const DISPATCHED = "DISPATCHED";
export const IN_TRANSIT = "IN_TRANSIT";
export const IN_BUILDING = "IN_BUILDING";

export const INVENTORY = "INVENTORY";
export const INVENTORY_PICKED = "INVENTORY_PICKED";
export const ACTIVEINVENTORY = "ACTIVEINVENTORY";
export const INACTIVEINVENTORY = "INACTIVEINVENTORY";

export const LOADING = "LOADING";

// export const CLOADING = 'CLOADING'
// export const CUNLOADING = 'CUNLOADING'
// export const CLOADING = 'CLOADING'
// export const CUNLOADING = 'CUNLOADING'

export const UNLOADING = "UNLOADING";
export const TOLLING = "TOLLING";
export const FILLING = "FILLING";
export const FILLED = "FILLED";
export const EMPTY = "EMPTY";
export const ORDER_INITIATED = "ORDER_INITIATED";
export const RECHECKING = "RECHECKING";
export const RECHECKED = "RECHECKED";
export const RECHECK_FAILED = "RECHECK_FAILED";

export const READER = "READERS";
export const ORDER = "ORDERS";
export const INBOUNDORDER = "INBOUNDORDER";
export const OUTBOUNDORDER = "OUTBOUNDORDER";
export const INCOMINGORDER = "INCOMINGORDER";

export const ACTIVE = "ACTIVE";
export const INACTIVE = { $not: { $regex: "ACTIVE" } };

export const inventoryQuery = (buildingId, opreationStatus, type) => {
  var json = {
    page: 1,
    limit: 10,
    search: {
      currentLocation: buildingId,
      opreationStatus: opreationStatus,
      tagType: type,
    },
  };

  return json;
};

export const globalSearch = (page, limit, search) => {
  var json = {
    page: page,
    limit: limit,
    search: search,
  };
  return json;
};

export const CANCEL = "CANCEL";
export const DISPATCH = "DISPATCH";

// export const userManagementMaster = 'user management master'

// export const userManagementMaster = 'user management master'
// export const userManagementMaster = 'user management master'
// export const userManagementMaster = 'user management master'
// export const userManagementMaster = 'user management master'
// export const userManagementMaster = 'user management master'

export const deviceProfileVariable = {
  ENTRY: "ENTRY",
  EXIT: "EXIT",
  ENTRYEXIT: "ENTRYEXIT",
  LOADING: "LOADING",
  NOZAL: "NOZAL",
  BAGGING_MANUAL: "BAGGING_MANUAL",
  BAGGING_AUTO: "BAGGING_AUTO",
  CRANE: "CRANE",
};


// Addd by suraj

export const leadGeneration = "lead generation";
export const leadForm = "lead form";