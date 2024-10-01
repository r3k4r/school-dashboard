
import Link from 'next/link'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md' >
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold my-4'>Announcements</h1> 
            <Link href="#">
            <p className='text-xs text-gray-400'>View All</p>
            </Link>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-blue-200 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>01-01-2025</span> 
                </div>   

                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nesciunt possimus iure provident?</p>
            </div>

            <div className='bg-yellow-200 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>01-01-2025</span> 
                </div>   

                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nesciunt possimus iure provident?</p>
            </div>

            <div className='bg-purple-200 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Lorem ipsum dolor sit</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md p-1'>01-01-2025</span> 
                </div>   

                <p className='text-sm text-gray-500 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo nesciunt possimus iure provident?</p>
            </div>
        </div>
    </div>
  )
}

export default Announcements