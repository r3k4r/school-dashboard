'use client'

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'

const data = [
  {
    name: 'Total',
    count: 6371,
    pv: 2400,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 3243,
    pv: 2400,
    fill: '#fde047',
  },
  {
    name: 'Boys',
    count: 3128,
    pv: 4567,
    fill: '#93c5fd',
  },
 
];


const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Students</h1>
            <Image src="/moreDark.png" alt="more-image"  width={20} height={20} />
        </div>

        {/* CHART */}
        <div className='w-full h-[75%] relative'>
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                        background
                        dataKey="count"
                    />
                </RadialBarChart>
            </ResponsiveContainer> 
            <Image src="/maleFemale.png" alt="boy-girl" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>

        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                 <div className='w-5 h-5 rounded-full bg-blue-300' />
                    <h1 className='font-bold'>3,128</h1>
                    <h2 className='text-xm text-gray-400'>Boys (47%)</h2>
            </div>
            
            <div className='flex flex-col gap-1'>
                 <div className='w-5 h-5 rounded-full bg-yellow-300' />
                    <h1 className='font-bold'>3,243</h1>
                    <h2 className='text-xm text-gray-400'>Girls (53%)</h2>
            </div>
        </div>
    </div>
  )
}

export default CountChart

