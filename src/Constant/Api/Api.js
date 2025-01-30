// export const IP = "api.hindalco.headsupcorporation.com"
// export const Protocol = 'https://'
 
export const IP = '192.168.1.24:9090'
export const Protocol = 'http://'

export const MQTTIP = 'ws://192.168.0.104:9001'
export const BaseUrl = `${Protocol}${IP}/auth/`
export const UserMicroService = `${Protocol}${IP}/userheadsup/api/`
export const HelperMicroService = `${Protocol}${IP}/helper/api/`
export const PlantMicroService = `${Protocol}${IP}/plant/api/`
export const DeviceMicroService = `${Protocol}${IP}/device/api/`
export const IOTMicroService = `${Protocol}${IP}/iot/api/`
export const OrderMicroService = `${Protocol}${IP}/orderheadsup/api/`
export const OrderItemMicroService = `${Protocol}${IP}/orderheadsup/api/`
export const uploadMicroService = `${Protocol}${IP}/upload/api/`


export const IotMicroService = `${Protocol}${IP}/iot/api/`

export const LoginApi2 = BaseUrl + 'login'
// User
// export const addUser = UserMicroService + 'addUser'
// export const updateUser = UserMicroService + 'updateUser'
export const searchUser = UserMicroService + 'searchUser'
// export const deleteUser = UserMicroService + 'deleteUser'
// Role
export const addRole = UserMicroService + 'addRole' //UserMicroService
export const updateRole = UserMicroService + 'updateRole'
export const searchRole = UserMicroService + 'searchRole' //UserMicroService
export const deleteRole = UserMicroService + 'deleteRole' //UserMicroService
// Product
export const addProduct = HelperMicroService + 'addProduct'
export const updateProduct = HelperMicroService + 'updateProduct'
export const searchProduct = HelperMicroService + 'searchProduct'
export const deleteProduct = HelperMicroService + 'deleteProduct'
// Customer
export const addCustomer = HelperMicroService + 'addCustomer'
export const updateCustomer = HelperMicroService + 'updateCustomer'
export const searchCustomer = HelperMicroService + 'searchCustomer'
export const deleteCustomer = HelperMicroService + 'deleteCustomer'
// General
export const addGeneral = HelperMicroService + 'addGeneral'
export const updateGeneral = HelperMicroService + 'updateGeneral'
export const searchGeneral = HelperMicroService + 'searchGeneral'
export const deleteGeneral = HelperMicroService + 'deleteGeneral'
// Supplier
export const addSupplier = HelperMicroService + 'addSupplier'
export const updateSupplier = HelperMicroService + 'updateSupplier'
export const searchSupplier = HelperMicroService + 'searchSupplier'
export const deleteSupplier = HelperMicroService + 'deleteSupplier'
// Site
export const addSite = PlantMicroService + 'addSite'
export const updateSite = PlantMicroService + 'updateSite'
export const searchSite = PlantMicroService + 'searchSite'
export const deleteSite = PlantMicroService + 'deleteSite'
// Building
export const addBuilding = PlantMicroService + 'addBuilding'
export const updateBuilding = PlantMicroService + 'updateBuilding'
export const searchBuilding = PlantMicroService + 'searchBuilding'
export const deleteBuilding = PlantMicroService + 'deleteBuilding'
// Reader
export const addReader = DeviceMicroService+'addReader' 
export const updateReader = DeviceMicroService+'updateReader'
export const searchReader = DeviceMicroService+'searchReader'
export const deleteReader = DeviceMicroService+'deleteReader'
// Reader Configutaio
export const loginReader = DeviceMicroService+'loginReader'
export const readerStatus = DeviceMicroService+'readerStatus'
export const readerNetwork = DeviceMicroService+'readerNetwork'
export const getAccessInMqtt = DeviceMicroService+'getAccessInMqtt'
export const viewTopics = DeviceMicroService+'viewTopics'
export const readerMode = DeviceMicroService+'readerMode'
export const editReaderMode = DeviceMicroService+'editReaderMode'

export const rebootReader = DeviceMicroService + 'rebootReader'

export const proxy = DeviceMicroService + 'proxy'





//Weighing Scale
export const addWeighingScale = DeviceMicroService+'addWeighingScale' 
export const updateWeighingScale = DeviceMicroService+'updateWeighingScale'
export const searchWeighingScale = DeviceMicroService+'searchWeighingScale'
export const deleteWeighingScale = DeviceMicroService+'deleteWeighingScale'

//Vehicle
export const addVehicle = HelperMicroService + 'addVehicle'
export const updateVehicle = HelperMicroService + 'updateVehicle'
export const searchVehicle = HelperMicroService + 'searchVehicle'
export const deleteVehicle = HelperMicroService + 'deleteVehicle'
// Zone
export const addZone = PlantMicroService + 'addZone'
export const updateZone = PlantMicroService + 'updateZone'
export const searchZone = PlantMicroService + 'searchZone'
export const deleteZone = PlantMicroService + 'deleteZone'

//Location
export const addLocation = PlantMicroService + 'addLocation'
export const updateLocation = PlantMicroService + 'updateLocation'
export const searchLocation = PlantMicroService + 'searchLocation'
export const deleteLocation = PlantMicroService + 'deleteLocation'

//Tag
export const addTag = IOTMicroService + 'addTag'
export const updateTag = IOTMicroService + 'updateTag'
export const searchTag = IOTMicroService + 'searchTag'
export const searchTagHistory = IOTMicroService + 'searchTagHistory'
export const getDocCount = IOTMicroService+ 'getDocCount'
export const deleteTag = IOTMicroService + 'deleteTag'

//addbuildToZone

export const addBuildingToZone = PlantMicroService + 'addBuildingToZone'
export const removeBuildingFromZone = PlantMicroService + 'removeBuildingFromZone'

//addZoneToLocation

export const addZoneToLocation = PlantMicroService + 'addZoneToLocation'
export const removeZoneFromLocation = PlantMicroService + 'removeZoneFromLocation'
export const mapping = PlantMicroService + 'mapping'
export const removeMapping = PlantMicroService + 'removeMapping'


//addBatch 

export const addBatch = IOTMicroService + 'addBatch'
export const searchBatch = IOTMicroService + 'searchBatch'
export const updateBatch = IOTMicroService + 'updateBatch'
export const deleteBatchCollection = IOTMicroService + 'deleteBatchCollection'


// mqtt
export const addMqttConfig = DeviceMicroService + 'addMqttConfig'
export const updateMqttConfig = DeviceMicroService + 'updateMqttConfig'
export const searchMqttConfig = DeviceMicroService + 'searchMqttConfig'
export const deleteMqttConfig = DeviceMicroService + 'deleteMqttConfig'

//rfidTags

export const searchRfidTag = IOTMicroService + 'searchRfidTag'
export const searchRfidTags = IOTMicroService + 'searchTag'


// inbound

export const addInbound = OrderMicroService + 'addInbound'
export const getProductdsFromInbound = OrderMicroService + 'getProductdsFromInbound'
// Dashbaord

//order 
export const addOrder = OrderMicroService + 'addOrder'
export const updateOrder = OrderMicroService + 'updateOrder'
export const searchOrder = OrderMicroService + 'searchOrder'
export const deleteOrder = OrderMicroService + 'deleteOrder'
export const changeOrderStatus = OrderMicroService + 'changeOrderStatus'
export const searchOrderTrail = OrderMicroService + 'searchOrderTrail'
export const updateDeviceProfile = DeviceMicroService + 'updateDeviceProfile'


//updateBulkTags
export const addBulkTags = IOTMicroService + 'addBulkTags'
export const updateBulkTags = IOTMicroService + 'updateBulkTags'



// Device Manager
export const addDevice = DeviceMicroService+'addDevice'
export const searchDevice = DeviceMicroService+'searchDevice'
export const updateDevice = DeviceMicroService+'updateDevice'
export const deleteDevice = DeviceMicroService+'deleteDevice'
export const addConfig = DeviceMicroService+'addConfig'
export const updateConfig = DeviceMicroService+'updateConfig'
export const searchConfig = DeviceMicroService+'searchConfig'
export const deleteConfig = DeviceMicroService+'deleteConfig'



//Broker

export const addBroker = DeviceMicroService + 'addBroker'
export const searchBroker = DeviceMicroService + 'searchBroker'
export const updateBroker = DeviceMicroService + 'updateBroker'
export const deleteBroker = DeviceMicroService + 'deleteBroker'


//add certificates
export const addCertificate = DeviceMicroService + 'addCertificate'
export const searchCertificate = DeviceMicroService + 'searchCertificate'
export const updateCertificate = DeviceMicroService + 'updateCertificate'
export const deleteCertificate = DeviceMicroService + 'deleteCertificate'

//get certificates


//apk Upload

export const uploadFile = uploadMicroService + 'uploadFile'
export const searchFile = uploadMicroService + 'searchFile'
export const activate = uploadMicroService + 'activate'
export const download = uploadMicroService + 'download'

// Mapper

export const addMapper = DeviceMicroService + 'addMapper'
export const searchMapper = DeviceMicroService + 'searchMapper'
export const updateMapper = DeviceMicroService + 'updateMapper'
export const deleteMapper = DeviceMicroService + 'deleteMapper'


export const searchApiService = DeviceMicroService + 'searchApiService'


export const addDeviceProfile = DeviceMicroService + 'addDeviceProfile'
export const searchDeviceProfile = DeviceMicroService + 'searchDeviceProfile'
// export const updateMapper = DeviceMicroService + 'updateMapper'
export const deleteDeviceProfile = DeviceMicroService + 'deleteDeviceProfile'


export const searchCycleCount = IOTMicroService + 'searchCycleCount'
export const addBulkCycleCount = IOTMicroService + 'addBulkCycleCount'
export const generateCycleCount = IOTMicroService + 'generateCycleCount'


export const getQuotation = OrderMicroService + 'searchQuotation'

export const updateQuotation = OrderMicroService + 'searchQuotation'
export const addQuotation = OrderMicroService + 'searchQuotation'

export const getLead = OrderMicroService + 'searchQuotation'
export const updateLead = OrderMicroService + 'searchQuotation'
export const addLead = OrderMicroService + 'searchQuotation'

export const serverIP="http://165.232.187.211"
export const UserUrl=`${serverIP}/`

export const loginApi = serverIP + '/auth/login'




export const addUser=UserUrl+"userheadsup/api/addUser"
export const updateUser=UserUrl+"userheadsup/api/updateUser"
export const deleteUser=UserUrl+"userheadsup/api/deleteUser"
export const mySearchUser=UserUrl+"userheadsup/api/searchUser"




//Frontend Service Name is  OrderMicroService and backend Service Name is searchPurchaseOrder those who can findout data
export const searchPurchaseOrder = OrderMicroService + 'searchPurchaseOrder'

export const searchPurchaseOrderItem = OrderMicroService + 'searchPurchaseOrderItem'

export const buildVersion  = 1.01

export const refreshEnable = false
