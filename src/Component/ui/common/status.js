import React from 'react'
import { STATUS_CLASSES } from '../../../Constant/Colors/Color';
import { Badge, Text } from 'rizzui';
import cn from '../../../Utils/class-names';

export default function Status({ value, className }) {
    const lowerCaseValue = value?.toLowerCase();
    const statusClass = STATUS_CLASSES[lowerCaseValue] || STATUS_CLASSES.default;

    return (
        <div className={cn("flex items-center", className)}>
            <Badge color={statusClass?.badgeColor} renderAsDot/>
            <Text className={`ms-2 font-medium capitalize ${statusClass.textColor}`}>
                {value || '---'}
            </Text>
        </div>
    );
}
