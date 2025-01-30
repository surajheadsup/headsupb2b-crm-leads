import React from 'react'
import { Button } from 'rizzui'

function CommonButtton({text,size ,type,onClick,className,variant}) {
  return (
      <Button className={className} variant={ variant ? variant :'solid'} type={type ?type :'button'}  size={size} onClick={onClick} >{text}</Button>
  )
}

export default CommonButtton