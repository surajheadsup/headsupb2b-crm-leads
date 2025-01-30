import React, { useEffect } from 'react'

import SearchableSelect from '../../Component/ui/form/select/SearchableSelect';
import { mapping, removeMapping, searchUser } from '../../Constant/Api/Api';
import CustomButton from '../../Component/ui/buttons/custom-button';
import { useDispatch, useSelector } from 'react-redux';
import { setBuildingMasterApiJson } from '../../Store/Action/master/building-master/building-master-action';
import { useModal } from '../modal-views/use-modal';
import useAlertController from '../../Hooks/use-alert-controller';
import useDynamicLoading from '../../Hooks/use-dynamic-loading';
import { HitApi } from '../../Store/Action/Api/ApiAction';
import { FaTrash } from 'react-icons/fa';

export default function SearchUser({ row, ApiHit }) {
    const dispatch = useDispatch();
    const reduxBuilding = useSelector(state => state.BuildingMasterReducer)
    const reduxSelectData = useSelector(state => state.SearchableSelectReducer)

    const { openModal, closeModal } = useModal();
    const { showCustomAlert } = useAlertController();
    const { loadingState, setDynamicLoading } = useDynamicLoading();

    useEffect(() => {

    }, [reduxBuilding])

    const handleOnChange = (e) => {
        var json = reduxBuilding?.apiJson
        const { _id, label, value } = e



        Object.assign(json, {
            sourceId: row._id,
            mappingId: _id
        })
        dispatch(setBuildingMasterApiJson(json))
    }

    const handleMapUser = () => {
        var json = reduxBuilding?.apiJson
        var finalJson = {
            sourceId: json?.sourceId,
            mappingId: json?.mappingId,
            "sourceCollection": "buildingCollection",
            "destinationCollection": "user",
            "source": "buildingIds",
            "mapping": "userIds"
        }
        setDynamicLoading({ 'user': true })
        HitApi(finalJson, mapping).then((result) => {
            if (result?.success !== false) {
                setDynamicLoading({ 'user': false })
                showCustomAlert({
                    type: 'success',
                    title: 'Success!',
                    message: 'User to Building Mapping Successfully',
                });
                row.userIds = row?.userIds.concat(json?.mappingId);
                
                if (ApiHit) ApiHit()
                // closeModal()
            }
        })

    }

    const handleDemapUser = (ele) => {
        var r = window.confirm(`Are you sure to Demap ${ele?.label} from ${row?.buildingName}`)
        if (r) {
            var json = reduxBuilding?.apiJson
            var finalJson = {
                sourceId: row?._id,
                mappingId: ele?._id,
                "sourceCollection": "buildingCollection",
                "destinationCollection": "user",
                "source": "buildingIds",
                "mapping": "userIds"
            }

            setDynamicLoading({ 'user': true })
            HitApi(finalJson, removeMapping).then((result) => {
                if (result?.success !== false) {
                    setDynamicLoading({ 'user': false })
                    showCustomAlert({
                        type: 'success',
                        title: 'Success!',
                        message: 'User to Building Mapping Removed Successfully',
                    });
                    // Removing data from userIds array to prevent from relaod
                    const index = row?.userIds.indexOf(ele?._id);
                    if (index !== -1) {
                        const updatedUserIds = [
                            ...row.userIds.slice(0, index),
                            ...row.userIds.slice(index + 1)
                        ];
                        row.userIds = updatedUserIds;
                    }

                    if (ApiHit) ApiHit()
                }
            })
        }
    }



    let item = row?.userIds?.map((userId) => {
        const matchedUser = reduxSelectData?.doc?.find((ele) => ele?._id === userId);

        return matchedUser ? (
            <div className='flex justify-between border-2 p-1.5 m-1.5' key={matchedUser?._id}>
                <label>{matchedUser?._id}</label>
                <label>{matchedUser?.label}</label>
                <label onClick={() => handleDemapUser(matchedUser)}><FaTrash /></label>
            </div>
        ) : null;
    });


    return (
        <div className='p-10  flex flex-col justify-between'>
            <SearchableSelect name={'userId'} api={searchUser} getFieldName={'username'} onChange={handleOnChange} />
            <div className='mb-5'>{item}</div>
            {loadingState?.doc?.user ? <CustomButton type={'submit'} text={'Loading...'} /> : <CustomButton type={'submit'} className={''} text={'Map User'} onClick={() => handleMapUser()} />}
        </div>
    );
}
