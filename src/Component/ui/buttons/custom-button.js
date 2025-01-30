import React from 'react'
import { Button } from 'rizzui'
import { useMedia } from '../../../Hooks/use-media';
import cn from '../../../Utils/class-names';

export default function CustomButton({text, variant='solid', color='secondary', onClick, className, disabled, type ,loading}) {
  const isMedium = useMedia('(max-width: 1200px)', false);
  
  return (
    <Button isLoading={loading} type={type} className={cn(type==='submit'?'bg-red-main hover:border-red-main hover:bg-red-main':'hover:border-none hover:border-slate-800 hover:bg-gray-200 hover:text-gray-600',className, 'disabled:bg-gray-200 disabled:hover:cursor-not-allowed disabled:border-0')} size={isMedium ? 'lg' : 'md'}  variant={ variant ? variant :'solid'} color={color} onClick={onClick} disabled={disabled}>{text}</Button>
  )
}
