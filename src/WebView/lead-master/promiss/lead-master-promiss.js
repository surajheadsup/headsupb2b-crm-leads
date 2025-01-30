import { GetPageCount } from "../../../Utils/Utils"

export const CompileLeadMaster = (data, pagination) => {
    return new Promise((resolve, reject) => {
        var td = {
            content: data?.content?.map((ele, index) => Object.assign(ele, { index: GetPageCount(pagination, index)})),
            totalElements: data?.totalElements, number: data?.number + 1, totalPages: data?.totalPages,
        }
        resolve(td)
    })
}