'use client'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Image from 'next/image'


const data = [
  {
    name: 'Sat',
    present: 40,
    absent: 24,
  },
  {
    name: 'Sun',
    present: 30,
    absent: 13,
  },
  {
    name: 'Mon',
    present: 20,
    absent: 98,
  },
  {
    name: 'Tue',
    present: 27,
    absent: 39,
  },
  {
    name: 'Wed',
    present: 18,
    absent: 48,
  },
  {
    name: 'Thu',
    present: 23,
    absent: 38,
  },
  {
    name: 'Fri',
    present: 34,
    absent: 43,
  },
];

const AttendenceChart = () => {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4'> 
        {/* TITLE */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Attendence</h1>
            <Image src="/moreDark.png" alt="more-image" quality={100} width={20} height={20} className="cursor-pointer"/>
        </div>

        {/* CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <BarChart
                width={500}
                height={300}
                data={data}
                barSize={20}
                >
                <CartesianGrid strokeDasharray="3 3" verticle={false} stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{borderRadius: "10px", borderColor: "lightgray"}}  />
                <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop: "20px", paddingBottom: "40px"}}/>
                <Bar dataKey="absent" fill="#fde047" legendType="circle" />
                <Bar dataKey="present" fill="#93c5fd" legendType="circle" />
                </BarChart>
            </ResponsiveContainer>


    </div>
  )
}

export default AttendenceChart