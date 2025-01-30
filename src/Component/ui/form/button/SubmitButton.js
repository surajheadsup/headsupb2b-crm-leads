import React from 'react'
import { Button } from 'rizzui'
import { useMedia } from '../../../../Hooks/use-media';


export default function SubmitButton() {
    const isMedium = useMedia('(max-width: 1200px)', false);

  return (
    <Button className="w-full" type="submit" size={isMedium ? 'lg' : 'md'} > Save </Button>
  )
}
