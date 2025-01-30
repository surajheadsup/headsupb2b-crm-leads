import React from 'react'
import { HiOutlineMinusSmall } from "react-icons/hi2";

import { Text } from 'rizzui'
import cn from '../Utils/class-names'

export default function Header({className, title, subtitle}) {
  return (
    <header className={cn('mb-3 @container xs:-mt-2 lg:mb-1', className)}>
      <div className="flex flex-col @lg:flex-row @lg:items-center @lg:justify-between">
        <div>
          <Text as="h5" className={`mb-2 text-[22px] lg:text-sm 4xl:text-[26px] flex items-center font-bold`}> {title} {subtitle?<span className='flex items-center font-normal'><HiOutlineMinusSmall/> {subtitle}</span>:null} </Text>
        </div>
      </div>
    </header>
  )
}
