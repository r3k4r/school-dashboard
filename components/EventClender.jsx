'use client'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react'
import Image from 'next/image'

const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      time: "12:00 PM - 2:00 PM",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

const EventClender = () => {
    const [value, onChange] = useState(new Date());

  return (
    <div className='w-full bg-white p-4 rounded-md'>
         <Calendar onChange={onChange} value={value} />

        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4'>Events</h1> 
            <Image src="/moreDark.png" alt="more-image" quality={100} width={20} height={20} className="cursor-pointer"/>
        </div>

         <div className='flex flex-col gap-5'>
            {events.map((item)=>{
                return(
                <div className='p-3 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-ten even:border-t-thirty' key={item.id} >
                    <div className='flex items-center justify-between'>
                        <h1 className="font-semibold text-gray-600">{item.title}</h1>
                        <h2 className='text-xs text-gray-400'>{item.time}</h2>
                    </div>
                    <p className='text-[13px]  mt-2 text-gray-400'>{item.description}</p>
                </div>    
           ) })}
         </div>
    </div>
  )
}

export default EventClender