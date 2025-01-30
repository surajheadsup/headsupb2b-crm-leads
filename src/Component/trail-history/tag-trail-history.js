import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { compareObjects, getTimeDifference } from '../../Utils/Utils'
import { Colors } from '../../Constant/Colors/Color'
import { setTrailData } from '../../Store/Action/trail-history/trail-history-action'
import { HitApi } from '../../Store/Action/Api/ApiAction'
import { searchTagHistory } from '../../Constant/Api/Api'
import { Loader, Text } from 'rizzui'
import { CompareChanges } from './trail-history-promiss'
import { INVENTORY } from '../../Constant/Common/common-variable'

export default function TagTrailHistory({ _id, api, type }) {
  const dispatch = useDispatch()
  const reduxTrailData = useSelector(state => state.TrailTagHistoryReducer)
  const [compareData, setCompareData] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    var json = { page: 1, limit: 1000, search: {} }
    if (type === INVENTORY) {
      Object.assign(json.search, { parentId: _id })
    }
    else {
      Object.assign(json.search, { orderDetails: _id })
    }
    if (_id && api) {
      HitApi(json, api).then((res) => {
        if (res?.content) {
          dispatch(setTrailData(res))
          CompareChanges(res?.content).then((ComparedData) => {
            console.log('ComparedData = = = = = = = ', ComparedData);
            setCompareData(ComparedData)
          })
        } else {
          setCompareData([])
        }
      })
    } else {
      setCompareData([])
    }
  }
  
  const HistorySummary = ({ updatedArr = [], createdBy = '', dateAgo = '', isCreated = false }) => {
    return (
      <div className="flex my-5">
        <div>
          <p style={{ backgroundColor: Colors.LOGINRED }} className="w-6 h-6 rounded-full text-center text-white font-bold" >
            A
          </p>
        </div>
        <div className="ml-3">
          <div className="flex items-center">
            <p className="text-black font-bold">{createdBy}&nbsp;</p>
            <p className="text-gray-400 font-bold"> - {getTimeDifference(dateAgo)}{' '}
              <span style={{ color: Colors.LOGINRED }}>
                ({isCreated ? 'Created' : 'Updated'})
              </span>
            </p>
          </div>
          {updatedArr.length > 0 && (
            <ul className="ml-3 mt-1 text-black list-disc">
              {updatedArr.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='max-h-[600px] overflow-y-scroll'>
      <div className='px-10 py-2'>
        {/* First Record for created at data */}
        {
          reduxTrailData?.doc?.content && <div className='my-6'>
            <HistorySummary createdBy={"Aman"} isCreated={true} dateAgo={reduxTrailData?.doc?.content?.[0]?.createdAt} updatedArr={['Batch Number - ' + reduxTrailData?.doc?.content?.[0]?.batchNumber]} />
          </div>
        }
        {/* Displya Compareed data */}
        {
          compareData?.length > 0 ? (
            compareData.map((ele, index) => (
              <HistorySummary
                key={index}
                createdBy="Aman"
                isCreated={false}
                dateAgo={ele?.updatedAtTimestamp}
                updatedArr={ele?.changes}
              />
            ))
          ) : (
            compareData ? (
              <Text>No Trail Data Found</Text>
            ) : (
              <div className="flex justify-center p-10">
                <Loader size="lg" className="text-red-main w-16" />
              </div>
            )
          )
        }

      </div>
    </div>
  )
}
