'use client'
import Image from 'next/image'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income: 4000,
    expence: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expence: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    income: 2000,
    expence: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    income: 2780,
    expence: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    income: 1890,
    expence: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    income: 2390,
    expence: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Aug',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Sep',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Oct',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Nov',
    income: 3490,
    expence: 4300,
  },
  {
    name: 'Dec',
    income: 3490,
    expence: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex items-center justify-between'>
            <h1 className='text-lg font-semibold'>Finance</h1>
            <Image src="/moreDark.png" alt="more-image" quality={100} width={20} height={20} className="cursor-pointer" />
        </div>

        <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" verticle={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop: "10px", paddingBottom: "30px"}}/>
          <Line type="monotone" dataKey="income" stroke="#fde047" strokeWidth={3} />
          <Line type="monotone" dataKey="expence" stroke="#93c5fd" strokeWidth={3}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart