import React, { useState } from 'react';
import { ActionIcon, Button, Tooltip } from 'rizzui';
import PencilIcon from '../../../Constant/Icons/pencil';
import EyeIcon from '../../../Constant/Icons/eye';
import DeletePopover from '../../../shared/delete-popover';
import { CiCirclePlus } from "react-icons/ci";
import usePermissionCheck from '../../../Hooks/use-permission-check';
import { getAuthenticatedUser, getAuthenticatedUserWithRoles } from '../../../Storage/Storage';
import { PiGear } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import { _id, deactiveText } from '../../../Constant/Common/common-variable';
import DispatchPopover from '../../../shared/dispatch-popover';
import cn from '../../../Utils/class-names';
import { useDispatch } from 'react-redux';
import { useModal } from '../../../shared/modal-views/use-modal';
import { FaExchangeAlt } from 'react-icons/fa';
const TableActions = ({ screen, row, onEdit, onView, onDelete, enableSetting, onaddSection, href, enableAdd, checkKeys, handleDispatch, onSettingClick, addButtonText, iconClassName, setAction, customButton, customSize, title }) => {
    const dispatch = useDispatch()
    const user = getAuthenticatedUser()
    const { openModal, closeAllModals } = useModal();

    const userObject = getAuthenticatedUserWithRoles()
    const userType = userObject?.roleObject?.roleName === 'Super Master' && row?.roleName === 'Super Master'
    const isEditAllowed = usePermissionCheck(screen, 'write');
    // const isEditAllowed = true
    const isDeleteAllowed = usePermissionCheck(screen, 'delete');
    // const isDeleteAllowed = true

    const areKeysNotEmpty = () => {
        if (!Array.isArray(checkKeys)) return false;
        var check = checkKeys.every((key) => Array.isArray(row[key]) && row[key]?.length <= 0)
        return check;
        // return true;
    };

    // Check if keys are not empty
    const keysAreNotEmpty = areKeysNotEmpty();

    const handleNavigate = () => {
        if (setAction) { dispatch(setAction({})) }
    }

    const handleClick = () => {
        if (customButton?.view) {
            openModal({
                view: customButton?.view,
                customSize: customButton?.customSize + 'px' || '1020px',
                title: customButton?.title,
                titleClass: customButton?.titleClass,
                onClose: customButton?.onClose
            });
        }
    }

    return (
        <div className="flex items-center gap-3 pe-4">
            {/* Edit Button */}
            {isEditAllowed && !userType && row?.status !== deactiveText ? (
                href === undefined ? (
                    <Tooltip size="sm" content="Edit" placement="top" color="invert">
                        <ActionIcon
                            as="span"
                            size="sm"
                            variant="outline"
                            className="cursor-pointer hover:text-gray-700"
                            onClick={() => onEdit(row)}>
                            <PencilIcon className={cn("h-4 w-4", iconClassName)} />
                        </ActionIcon>
                    </Tooltip>
                ) : (
                    <NavLink to={`${href}${row?._id || ''}`} onClick={() => handleNavigate()}>
                        <Tooltip size="sm" content="Edit" placement="top" color="invert">
                            <ActionIcon as="span" size="sm" variant="outline" className="hover:text-gray-700">
                                <PencilIcon className={cn("h-4 w-4", iconClassName)} />
                            </ActionIcon>
                        </Tooltip>

                    </NavLink>
                )
            ) : null}

            {/* View Button */}
            {onView && !userType && (
                <Tooltip size="sm" content="View" placement="top" color="invert">
                    <ActionIcon
                        as="span"
                        size="sm"
                        variant="outline"
                        className="cursor-pointer hover:text-gray-700"
                        onClick={() => onView(row)}
                    >
                        <EyeIcon className={cn("h-4 w-4", iconClassName)} />
                    </ActionIcon>
                </Tooltip>
            )}

            {/* Add Section Button */}
            {enableAdd && row?.status !== deactiveText && <Tooltip size="sm" content={addButtonText || "Add Section"} placement="top" color="invert">
                <ActionIcon
                    as="span"
                    size="sm"
                    variant="outline"
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => onaddSection(row)}
                >
                    <CiCirclePlus size={18} />
                </ActionIcon>
            </Tooltip>}

            {customButton && (
                <Tooltip size="sm" content={customButton?.tooltip} placement="top" color="invert">
                    <ActionIcon as="span" size="sm" variant="outline" className="cursor-pointer hover:text-gray-700" onClick={() => handleClick()}>
                        <FaExchangeAlt className={cn("h-4 w-4", iconClassName)} />
                    </ActionIcon>
                </Tooltip>
            )}

            {enableSetting && (
                <Tooltip size="sm" content="Settings" placement="top" color="invert">
                    <ActionIcon as="span" size="sm" variant="outline" className="cursor-pointer hover:text-gray-700" onClick={onSettingClick}>
                        <PiGear className={cn("h-4 w-4", iconClassName)} />
                    </ActionIcon>
                </Tooltip>
            )}

            {isDeleteAllowed && !userType && keysAreNotEmpty && row?.status !== deactiveText && (
                <DeletePopover
                    title="Deactive"
                    description="Are you sure you want to deactive this?"
                    onDelete={() => onDelete(row)}
                />
            )}

            {
                handleDispatch && <DispatchPopover
                    title="Dispatch"
                    description="Are you sure you want to Dispatch"
                    onDelete={() => handleDispatch(row)}
                />
            }
        </div>

    );
};

export default TableActions;
