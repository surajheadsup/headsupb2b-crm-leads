
import { brokerManager, buildingsMaster, certificateManager, configuraitonMaster, customerMaster, generalMaster, inbound, inboundOrder, inventoryMaster, leadMaster, locationMaster, outbound, outboundOrder, productMaster, purchaseMaster, quatationMaster, quotationMaster, readerMaster, rolesAndPermissionMaster, siteMaster, supplierMaster, tagMaster, userManagementMaster, vehicleMaster, zoneMaster } from "../Common/common-variable";


export const ScreenName = {
    user : userManagementMaster,
    roleAndPermission : rolesAndPermissionMaster,
    siteMaster : siteMaster,
    buildingMaster : buildingsMaster,
    generalMaster : generalMaster,
    zoneMaster : zoneMaster,
    locationMaster : locationMaster,
    productMaster : productMaster,
    customerMaster : customerMaster,
    supplierMaster : supplierMaster,
    readerMaster : readerMaster,
    readerReplacementMaster :'reader replacement master',
    inventoryMaster :'inventory master',
    vehicleMaster : vehicleMaster,
    configurationMaster : configuraitonMaster,
    outbound : outbound,
    inbound : inbound,
    Inventory : inventoryMaster,
    tagMaster : tagMaster,
    vehicleMaster :'vehicle master',
    configurationMaster :'configuration master',
    outbound :'outbound',
    inbound :'inbound',
    Inventory :'Inventory',
    tagMaster :'tag master',
    uploadapk : 'Upload Apk',
    // device manager
    certificates : certificateManager,
    broker : brokerManager,
    // Order
    inboundOrder : inboundOrder,
    outboundOrder : outboundOrder,
    quatationMaster:quatationMaster,
    purchaseMaster:purchaseMaster,
    leadMaster:leadMaster
}
