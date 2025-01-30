// development
// export const Protocol = 'http://'
// export const IP = '165.232.187.211'
// export const BASEURL = Protocol + IP
// production
export const Protocol = 'http://'
export const IP = '165.232.187.211'
export const BASEURL = Protocol + IP

export const UserMicroService = `${Protocol}${IP}/userheadsup/api/`
export const OrderMicroService = `${Protocol}${IP}/orderheadsup/api/`
export const HelperMicroService = `${Protocol}${IP}/helperheadsup/api/`



export const login = BASEURL + '/auth/login'

// General 
export const searchGeneral = HelperMicroService + 'searchGeneral'

// Roles
export const addRole = UserMicroService + 'addRole'
export const updateRole = UserMicroService + 'updateRole'
export const searchRole = UserMicroService + 'searchRole' //UserMicroService
export const deleteRole = UserMicroService + 'deleteRole' //UserMicroService

// Leads
export const addLead = OrderMicroService + 'addLead' //UserMicroService
export const updateLead = OrderMicroService + 'updateLead' //UserMicroService
export const searchLead = OrderMicroService + 'searchLead' //UserMicroService
export const deleteLead = OrderMicroService + 'deleteLead' //UserMicroService

//User

export const addUser = UserMicroService + "addUser"
export const updateUser = UserMicroService + "updateUser"
export const deleteUser = UserMicroService + "deleteUser"
export const searchUser = UserMicroService + "searchUser"

// Supplier
export const addSupplier = HelperMicroService + 'addSupplier'
export const updateSupplier = HelperMicroService + 'updateSupplier'
export const searchSupplier = HelperMicroService + 'searchSupplier'
export const deleteSupplier = HelperMicroService + 'deleteSupplier'




