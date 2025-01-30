import React from 'react'
import { Button, Text, Title } from 'rizzui'
import TrendingUpIcon from '../../Constant/Icons/trending-up'
import cn from '../../Utils/class-names'
import { useMedia } from '../../Hooks/use-media';
import TrendingDownIcon from '../../Constant/Icons/trending-down'
import useCustomNavigate from '../../Hooks/use-custom-navigate';

export default function UptimeCard({ title, data }) {
    const isMedium = useMedia('(max-width: 1200px)', false);
    
    const { goTo } = useCustomNavigate();

    const CheckUptime = ({ t_data, t_title }) => {
        return <Text className="flex flex-col items-center leading-none text-gray-500">
            <Text as="span" className={cn(`me-2 inline-flex items-center font-medium `, Math.sign(t_data) === -1 ? 'text-red' : 'text-green')}>
                {Math.sign(t_data) === -1 ? <TrendingDownIcon className="me-1 h-4 w-4" /> : <TrendingUpIcon className="me-1 h-4 w-4" />}
                {t_data}
            </Text>
            <Text className={cn('mt-2 text-xs')}>{t_title}</Text>
        </Text>
    }

    const handleNavigate = (url) =>{
        goTo(url)
    }

    return (
        <div className='bg-white rounded-lg'>
            <div className='p-3'><Title as='h5' className='text-center'>{title}</Title></div>
            <div className='border'></div>
            <div className='grid grid-cols-4 gap-2 text-center p-4'>
                <div className='bg-[#f1f1f1] rounded-xl p-2'>
                    <Text>Empty Bag</Text>
                    <Text className='font-bold'>{data?.status?.emptyBags}</Text>
                </div>
                <div className='bg-[#f1f1f1] rounded-xl p-2'>
                    <Text>Filled Bag</Text>
                    <Text className='font-bold'>{data?.status?.filledBags}</Text>
                </div>
                <div className='bg-[#f1f1f1] rounded-xl p-2'>
                    <Text>Alert</Text>
                    <Text className='font-bold'>{data?.status?.alerts}</Text>
                </div>
                <div className='bg-[#f1f1f1] rounded-xl p-2'>
                    <Text>Readers</Text>
                    <Text className='font-bold'>{data?.status?.readers}</Text>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2 text-center p-4'>
                <div className='rounded-xl p-2'><CheckUptime t_title={'Last 24 Hours'} t_data={data?.uptime?.last24Hours} /></div>
                <div className='rounded-xl p-2'><CheckUptime t_title={'Last 12 Hours'} t_data={data?.uptime?.last12Hours} /></div>
                <div className='rounded-xl p-2'><CheckUptime t_title={'Last 6 Hours'} t_data={data?.uptime?.last6Hours} /></div>
            </div>
            <div className='flex gap-3 justify-center mb-6'>
                <Button className="" type="button" size={isMedium ? 'lg' : 'md'} onClick={()=>handleNavigate('/inventory-management/live-reads/')}>
                    Live Reads
                </Button>
                <Button className="" type="button" size={isMedium ? 'lg' : 'md'}  onClick={()=>handleNavigate(`/inventory-management/details/${title?.replaceAll(' ','-')?.toLowerCase()}`)}>
                    Inventory
                </Button>
            </div>
        </div>
    )
}
