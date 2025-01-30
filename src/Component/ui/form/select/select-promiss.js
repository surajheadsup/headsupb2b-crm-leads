import { _id } from "../../../../Constant/Common/common-variable";

export const CompileSelectData = (data, getFieldName, type) => {


    return new Promise((resolve, reject) => {
        var td = []
        // if(type==='filter') { td.push({ label: 'all', value: 'all', _id: 'all' })}
        if (type === 'custom') {
            data?.map((ele, index) => {
                var label = ele?.label
                var value = ele?.value
                var usedBy = ele?.usedBy
                var ele = ele
                td.push({ label: label, value: value, _id: ele?._id || ele?.id, usedBy: usedBy, ele: ele })
            })
        } else {
            data?.map((ele, index) => {
                var label = ele?.['label'] || ele?.[getFieldName] || 'CompileSelectData error'
                var value = ele?.[getFieldName] || 'CompileSelectData error'
                var _id = ele?._id || ele?.id || 'CompileSelectData error'
                var ele = ele || 'CompileSelectData error'
                td.push({ label: label, value: value, _id: _id, index: index, ele: ele })
            })
        }
        resolve(td)
    });
};


export const CompileMultiSelectData = (data, getFieldName, type) => {
    return new Promise((resolve, reject) => {
        var tp = []

        data?.map((ele, index) => {
            tp.push({
                label: ele?.[getFieldName],
                value: ele?.[_id],
                ele: ele
            })
        })
        resolve(tp)
    })
}