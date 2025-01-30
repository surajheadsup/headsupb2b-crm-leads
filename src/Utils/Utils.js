import { Status } from "../Constant/Status";
import moment from 'moment';
import { getAuthenticatedUser, getAuthenticatedUserWithRoles } from "../Storage/Storage";

export const GetPageCount = (pagination, index) => {
    var no = pagination?.limit * pagination?.number - pagination?.limit + index + 1
    return no
}

export const GetFullYear = (timestamp) => {
    var t = parseInt(timestamp)
    var a = new Date(t);
    var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = date + '-' + month + '-' + year;
    return time;
}

export const getFormattedDate = (UNIX_timestamp, types, symbol = '-', timeSeparator = ':', timeFormat = '24', monthName = false, includeDay = true) => {
    if (!types || !Array.isArray(types) || types.length === 0) {
        return 'Invalid types';
    }

    UNIX_timestamp = parseInt(UNIX_timestamp);
    var a = new Date(UNIX_timestamp);
    var days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var day = includeDay ? days[a.getDay()] + ' ' : '';
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = monthName ? months[a.getMonth()] : ('0' + (a.getMonth() + 1)).slice(-2);
    var year = a.getFullYear();
    var date = a.getDate() > 9 ? a.getDate() : '0' + a.getDate();
    var hour = timeFormat === '12' ? a.getHours() % 12 || 12 : a.getHours(); // Convert to 12-hour format if specified
    var minute = a.getMinutes() > 9 ? a.getMinutes() : '0' + a.getMinutes();
    var second = a.getSeconds();
    var period = timeFormat === '12' ? (a.getHours() < 12 ? 'am' : 'pm') : ''; // Determine AM or PM only in 12-hour format

    let result = '';
    types.forEach((type, index) => {
        if (type === 'day') {
            result += `${day}`;
        } else if (type === 'date') {
            result += `${date}`;
        } else if (type === 'month') {
            result += `${month}`;
        } else if (type === 'year') {
            result += `${year}`;
        } else if (type === 'hour') {
            result += ` ${hour}${timeSeparator}`; // Add a space before hour
        } else if (type === 'minute') {
            if (minute !== '00') {
                result += `${minute}${timeSeparator}`;
            } else {
                result += '00';
            }
        } else if (type === 'second') {
            result += `${second}`;
        } else if (type === 'period' && period) { // Add period only if it exists
            result += ` ${period}`; // Include space before period
        } else {
            // Handle invalid type
            result += 'Invalid type';
        }

        // Check if the current type is not 'year' or if the next type is 'period'
        if (type !== 'year' && (index === types.length - 1 || types[index + 1] !== 'period')) {
            if (type !== 'hour' && type !== 'minute' && type !== 'second') {
                result += symbol; // Add the symbol unless it's after the 'year' and before 'period'
            } else {
                result += ''; // Add space instead of symbol for time parts
            }
        }
    });

    if (result.endsWith(symbol)) {
        result = result.slice(0, -symbol.length); // Remove the last character (which is the separator)
    }

    return result;
}


export const AddChildRolePermission = (arr, itemKey) => {
    for (const item of arr) {
        if (item[itemKey]) {
            return item[itemKey];
        }
        for (const key in item) {
            if (item[key] && item[key].child) {
                const result = AddChildRolePermission(item[key].child, itemKey);
                if (result) {
                    return result;
                }
            }
        }
    }
    return null;
};

// inbound/inbound-edit
export const getHeadingFromPathname = () => {
    const pathname = window.location.pathname;
    const segments = pathname.split('/');

    if (pathname.startsWith("/master/inventory/")) {
        return "Inventory / Inventories";
    }
    if (pathname.startsWith("/outbond/outbound-edit/")) {
        return "Outbound / Edit";
    }
    if (pathname.startsWith("/inbound/inbound-edit/")) {
        return "Inbound / Edit";
    }
    if (pathname.startsWith("/master/customer/edit/")) {
        return "Customer Master / Edit";
    }
    if (pathname.startsWith("/master/supplier/edit/")) {
        return "Supplier Master / Edit";
    }
    if (pathname.startsWith("/master/product/edit/")) {
        return "Product Master / Edit";
    }
    if (pathname.startsWith("/device-manager/certificates/edit/")) {
        return "Certificates / Edit";
    }
    if (pathname.startsWith("/master/configuration/edit/")) {
        return "Configuration Master / Edit";
    }
    if (pathname.startsWith("/outbond/outbound-create/")) {
        return "Outbound Order / Create";
    }
    if (pathname.startsWith("/inbond/inbound-create/")) {
        return "Inbound Order / Create";
    }
    // master/customer/edit/
    switch (pathname) {
        case "/":
            return "Dashboard"
        case "/dashboard":
            return "Dashboard"
        case "/master/site":
            return "Site Master";
        case "/master/users":
            return "User Management";
        case "/master/roles-and-permission":
            return "Role And Permission";
        case "/master/building":
            return "Building Master";
        case "/master/product":
            return "Product Master";
        case "/master/customer":
            return "Customer Master";
        case "/master/supplier":
            return "Supplier Master";
        case "/master/general":
            return "General Master";
        case "/master/product/create":
            return "Product Master / Create";
        case "/master/customer/create":
            return "Coustomer Master / Create";
        case "/device/reader":
            return "Device / Reader Master";
        case "/device/reader-replacement":
            return "Device / Reader Replacement";
        case "/device/reader-health":
            return "Device / Reader Health";
        case "/device/reader/create":
            return "Device / Create Reader";
        case "/device/reader-builing-mapping":
            return "Device / Reader Builing Mapping Master";
        case "/device/weighingscale":
            return "Device / Weighing Scale";
        case "/device/weighingscale/create":
            return "Device / Create Weighing Scale ";
        case "/master/vehicle":
            return "Vehicle Master";
        case "/master/zone":
            return "Zone Master";
        case "/master/location":
            return "Location Master";
        case "/master/tag":
            return "Tag Master";
        case "/master/configuration":
            return "Configuration Master";
        case "/master/configuration/create":
            return "Create / Configuration Master";
        case "/inbond/inbound-create":
            return "Inbound Order / Create";
        case "/master/inventory":
            return "Inventory Master"
        case "/master/supplier/create":
            return "Supplier Master / Create"
        case "/inbond/inbound-order":
            return "Inbound Order"
        case "/outbond/outbound-create":
            return "Outbound Order / Create"
        case "/outbond/outbound-order":
            return "Outbound Order"
        case "/device-manager/broker":
            return "Brokers"
        case "/device-manager/broker/add":
            return "Brokers / Add"
        case "/device-manager/certificates":
            return "Certificates"
        case "/device-manager/certificates/add":
            return "Add Certificate"
        case "/upload":
            return "Upload Apk"

        default:
            return "";
    }
}

const endpointBasedOnPermissions = {
    USER_MANAGEMENT: {
        read: ["/usermanagement/read"],
        write: ["/usermanagement/write"],
        delete: ["/usermanagement/delete"]
    },
    USER_VIEW: {
        read: ["/userview/read"],
        write: ["/userview/write"],
        delete: ["/userview/delete"]
    }
};

const checkPermissions = (perms) => {
    const allowedEndPoints = []
    const { value, permission } = perms;
    permission.forEach((permissionItem) => {
        const permissionKeys = Object.keys(permissionItem);
        permissionKeys.forEach((key) => {
            if (permissionItem[key] && endpointBasedOnPermissions[value]) {
                allowedEndPoints.push(...endpointBasedOnPermissions[value][key]);
            }
        });
    })
    return allowedEndPoints
}
export const getEnpointsToPermissons = (doc) => {

    let allowedEndPoints = [];
    doc.forEach((perms, index) => {
        allowedEndPoints.push(...checkPermissions(perms))
        if (perms.child.length > 0) {
            perms.child.forEach((childPerm) => {
                allowedEndPoints.push(...checkPermissions(childPerm))
            })
        }
    })

    return allowedEndPoints
}



export function convertJsonForProductInbound(originalJson) {
    return {
        dispatchFrom: originalJson.dispatchFrom,
        dispatchFromName: originalJson.dispatchFromName,
        orderStatus: originalJson.orderStatus,
        orderDateTime: originalJson.orderDateTime,
        expectedArrival: originalJson.expectedArrival,
        saleType: originalJson.saleType,
        productIds: originalJson.productIds.map(product => ({
            productId: product.productId._id,
            quantity: product.quantity,
            status: Status.ORDER_INITIATED
        })),
        billTo: originalJson.billTo,
        billToName: originalJson.billToName,
        dispatchTo: originalJson.dispatchTo,
        dispatchToName: originalJson.dispatchToName,
        batchNumber: originalJson.batchNumber,
        orderType: originalJson.orderType,
        movementStatus: originalJson.movementStatus,
        status: originalJson.status,
        batchNumber: originalJson.batchNumber,
    };
}


export const CreateUserQuery = (userData) => {
    var forSubAdmin = []
    var forRest = ['Super Master', 'Super Admin', 'Admin']

    var check = userData?.roleName?.include(forRest)



    if (userData?.roleName) {

    }

}

export const compareObjects = (oldObj, newObj) => {
    const changes = [];

    // List of keys to be excluded from comparison
    const excludedKeys = ['updatedAt', 'updatedBy', 'createdAt', 'createdBy', '_id', 'siteIds'];

    for (let key in oldObj) {
        // Skip comparison if the key is in the excluded list
        if (!excludedKeys.includes(key) && oldObj[key] !== newObj[key]) {
            changes.push({
                key: key,
                oldValue: oldObj[key],
                newValue: newObj[key],
            });
        }
    }

    return changes;
};


export function getTimeDifference(timestamp) {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the difference in milliseconds
    const differenceInMillis = now - timestamp;

    // Convert the difference into seconds, minutes, and hours
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);

    // If the difference is more than 24 hours, convert it to days
    if (differenceInHours >= 24) {
        const differenceInDays = Math.floor(differenceInHours / 24);
        return `${differenceInDays} days ago`;
    } else if (differenceInHours > 0) {
        return `${differenceInHours} hours ago`;
    } else if (differenceInMinutes > 0) {
        return `${differenceInMinutes} minutes ago`;
    } else {
        return `${differenceInSeconds} seconds ago`;
    }
}

export function printPreviousDays(totalDates) {
    const dates = [];
    const currentDate = new Date();

    for (let i = 0; i < totalDates; i++) {
        const formattedDate = currentDate.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: '2-digit',
            year: 'numeric'
        }).replace(/\//g, '-');

        dates.push(formattedDate);
        currentDate.setDate(currentDate.getDate() - 1);
    }

    return dates;
}

export const TimeDiffDay = (date1, date2) => {
    if (date1 !== '' && date2 !== '') {
        var date1 = new Date(date1)
        var date2 = new Date(date2)



        var difference = date1.getTime() - date2.getTime();

        var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
        difference -= daysDifference * 1000 * 60 * 60 * 24

        var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
        difference -= hoursDifference * 1000 * 60 * 60

        var minutesDifference = Math.floor(difference / 1000 / 60);
        difference -= minutesDifference * 1000 * 60

        var secondsDifference = Math.floor(difference / 1000);
        return daysDifference;
    } else {
        return 'data error'
    }
}



export const SingleBarChartOptions = {
    chart: {
        type: 'column' // Change this to 'column' for a vertical bar chart
    },
    title: {
        text: '' // Chart title
    },
    xAxis: {
        categories: [], // X-axis categories
        crosshair: true // Adds a vertical guide when hovering over points
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} units</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2, // Padding between columns
            borderWidth: 0
        }
    },
    series: [
        {
            data: [] // Data for Jane
        }
    ]
};

export const searchQueryByType = (dateWithType) => {



    let value;

    if (dateWithType?.type === 'daily' || dateWithType?.type === 'weekly') {
        var month = dateWithType?.date;
        value = getDailyTimestamps(month);
    }

    if (dateWithType?.type === 'hourly') {
        var day = dateWithType?.date;
        value = getHourlyTimestamps(day);
    }

    if (dateWithType?.type === 'monthly') {
        var year = dateWithType?.date;
        value = getMonthlyTimestamps(year);
    }
    return { $gte: value.start, $lte: value.end } // Use the adjusted end date

}

function getDailyTimestamps(monthTimestamp) {
    // Convert the timestamp (month) to a Date object
    const now = new Date(monthTimestamp);

    // Get the start of the month (1st day)
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

    // Get the end of the month (last day)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getTime();

    return { start: startOfMonth, end: endOfMonth };
}


function getHourlyTimestamps(dayTimestamp) {
    const day = new Date(dayTimestamp);

    const startOfDay = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 0, 0, 0).getTime(); // 00:00
    const endOfDay = new Date(day.getFullYear(), day.getMonth(), day.getDate(), 23, 59, 59).getTime(); // 23:59

    return { start: startOfDay, end: endOfDay };
}


function getMonthlyTimestamps(yearTimestamp) {
    const year = new Date(yearTimestamp).getFullYear();

    // Start of the year (1st January, 00:00)
    const startOfYear = new Date(year, 0, 1, 0, 0, 0).getTime(); // January 1, 00:00

    // End of the year (31st December, 23:59)
    const endOfYear = new Date(year, 11, 31, 23, 59, 59).getTime(); // December 31, 23:59

    return { start: startOfYear, end: endOfYear };
}



export const compileChartData = (dataArray, type, date) => {

    const compiledData = [];
    const selectedDate = moment(date).format('YYYY-MM-DD');
    const dataMap = {};

    console.log('type', type);

    type = type || 'daily'

    // Define month names (Jan, Feb, Mar, etc.) in correct order
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (type.toLowerCase() === 'hourly') {
        // Populate hours from 01 to 24
        for (let i = 1; i <= 24; i++) {
            const hour = i.toString().padStart(2, '0'); // Ensure 01, 02, ..., 24
            dataMap[hour] = [];
        }

        dataArray.forEach((element) => {
            const updatedAt = moment(element.updatedAt);
            const updatedDate = updatedAt.format('YYYY-MM-DD');

            if (updatedDate === selectedDate) {
                const hour = updatedAt.format('HH'); // Get the hour
                dataMap[hour].push(element);
            }
        });

        // Transform dataMap to the required format
        const transformedData = Object.keys(dataMap).map((key) => ({
            label: `${key}:00`, // Label as the hour
            data: dataMap[key],
            length: dataMap[key]?.length,
        }));

        return transformedData;

    } else if (type.toLowerCase() === 'daily') {
        const userDate = moment(selectedDate, 'YYYY-MM-DD');
        const currentYear = userDate.year();
        const currentMonth = userDate.month() + 1;

        const startOfMonth = moment(`${currentYear}-${currentMonth}-01`, 'YYYY-MM-DD');
        const daysInMonth = startOfMonth.daysInMonth();

        for (let i = 1; i <= daysInMonth; i++) {
            const day = moment(`${currentYear}-${currentMonth}-${i}`, 'YYYY-MM-DD').format('DD-MM-YYYY');
            dataMap[day] = [];
        }

        dataArray.forEach((element) => {
            const updatedAt = moment(element.updatedAt).format('YYYY-MM-DD');
            const elementMonth = moment(element.updatedAt).month();
            const elementYear = moment(element.updatedAt).year();

            if (elementMonth === userDate.month() && elementYear === userDate.year()) {
                const day = moment(element.updatedAt).format('DD-MM-YYYY');
                dataMap[day].push(element);
            }
        });

        const transformedData = Object.keys(dataMap).map((key) => ({
            label: key, // Label as the day
            data: dataMap[key],
            length: dataMap[key]?.length,
        }));

        return transformedData;

    } else if (type.toLowerCase() === 'weekly') {
        const userDate = moment(selectedDate, 'YYYY-MM-DD');
        const currentYear = userDate.year();
        const currentMonth = userDate.month() + 1;

        const startOfMonth = moment(`${currentYear}-${currentMonth}-01`, 'YYYY-MM-DD');
        const endOfMonth = startOfMonth.clone().endOf('month');

        let weekCount = 1;
        let currentWeekStart = startOfMonth.clone().startOf('week');
        let currentWeekEnd = currentWeekStart.clone().endOf('week');

        while (currentWeekStart.isBefore(endOfMonth)) {
            const weekKey = `week${weekCount}`;
            dataMap[weekKey] = [];
            weekCount++;

            currentWeekStart = currentWeekEnd.add(1, 'day').startOf('week');
            currentWeekEnd = currentWeekStart.clone().endOf('week');
        }

        dataArray.forEach((element) => {
            const updatedAt = moment(element.updatedAt);
            const elementMonth = updatedAt.month();
            const elementYear = updatedAt.year();

            if (elementMonth === userDate.month() && elementYear === userDate.year()) {
                const weekOfMonth = Math.ceil(updatedAt.date() / 7);
                const weekKey = `week${weekOfMonth}`;
                dataMap[weekKey].push(element);
            }
        });

        const transformedData = Object.keys(dataMap).map((key) => ({
            label: key, // Label as the week
            data: dataMap[key],
            length: dataMap[key]?.length,
        }));

        return transformedData;

    } else if (type.toLowerCase() === 'monthly') {
        const userDate = moment(selectedDate, 'YYYY-MM-DD');
        const selectedYear = userDate.year();

        monthNames.forEach((month, index) => {
            const monthKey = `${month}-${selectedYear}`;
            dataMap[monthKey] = [];
        });

        dataArray.forEach((element) => {
            const updatedAt = moment(element.updatedAt);
            const elementMonth = updatedAt.month();
            const elementYear = updatedAt.year();

            if (elementYear === selectedYear) {
                const monthKey = `${monthNames[elementMonth]}-${elementYear}`;
                dataMap[monthKey].push(element);
            }
        });

        const transformedData = Object.keys(dataMap).map((key) => ({
            label: key, // Label as the month
            data: dataMap[key],
            length: dataMap[key]?.length,
        }));

        return transformedData;
    }

    return [];
};


export const GetUserQuery = (json, type) => {
    const user = getAuthenticatedUser()
    const userObject = getAuthenticatedUserWithRoles()

    var tj = { ...json }
    if (type) {
        tj = { userIds: { "$in": [user?.userId] } }
    }

    if (!userObject?.roleObject?.roleName) {
        tj.search = {
            ...tj?.search,
            userIds: { "$in": [user?.userId] } // Adding userIds conditionally
        };
    }
    return tj


}


export const CreatePagination = (data, count) => {
    let n = count;

    const pageSize = Math.ceil(data.length / n);
    let paginate = Array.from({ length: pageSize }, (_, index) => {
        const start = index * n;
        return data.slice(start, start + n);
    });

    return paginate;
};