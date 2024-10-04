
import Announcements from '@/components/Announcements'
import BigCalendar from '@/components/BigCalender'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'

const SpecificStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">
                {/* USER INFO CARD */}
                <div className="bg-sky-200 py-6 px-4 rounded-md flex-1 flex gap-4">
                {/* IMAGE */}
                    <div className='w-1/3'>
                        <Image
                        src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full object-cover"
                        />
                    </div>
                    {/* Student'SINFORMATION */}
                    <div className='w-2/3 flex flex-col gap-2'>
                        <div>

                            <h1 className='text-xl font-semibold'>Leonard Syndra</h1>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>

                        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src='/blood.png' alt="blood-img" width={14} height={14} />
                                <p className='text-xs md:text-md lg:text-xs'> A+ </p>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src='/date.png' alt="blood-img" width={14} height={14} />
                                <p className='text-xs md:text-md lg:text-xs'> January 20205 </p>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src='/mail.png' alt="blood-img" width={14} height={14} />
                                <p className='text-xs md:text-md lg:text-xs'> user@gmail.com</p>
                            </div>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                                <Image src='/phone.png' alt="blood-img" width={14} height={14} />
                                <p className='text-xs md:text-md lg:text-xs'>964+ 7714256565</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                {/* SMALL CARD */}
                <div className='flex-1 grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-4 justify-between flex-wrap '>
                    {/* CARD 1*/}
                    <div className='w-full flex gap-4 bg-white p-4 rounded-md'>
                        <Image src='/singleAttendance.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className='flex items-center justify-start gap-4 lg:flex-col lg:gap-0 lg:items-start'>
                            <h1 className='text-xl font-semibold'>94%</h1>
                            <span className='text-sm text-gray-400'>Attendance</span>
                        </div>
                    </div>
                    {/* CARD 2*/}
                    <div className='w-full flex gap-4 bg-white p-4 rounded-md'>
                        <Image src='/singleClass.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className='flex items-center justify-start gap-4 lg:flex-col lg:gap-0 lg:items-start'>
                            <h1 className='text-xl font-semibold'>6th</h1>
                            <span className='text-sm text-gray-400'>Grade</span>
                        </div>
                    </div>
                    {/* CARD 3*/}
                    <div className='w-full flex gap-4 bg-white p-4 rounded-md'>
                        <Image src='/singleLesson.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className='flex items-center justify-start gap-4 lg:flex-col lg:gap-0 lg:items-start'>
                            <h1 className='text-xl font-semibold'>18</h1>
                            <span className='text-sm text-gray-400'>Lessons</span>
                        </div>
                    </div>
                    {/* CARD 4*/}
                    <div className='w-full flex gap-4 bg-white p-4 rounded-md'>
                        <Image src='/singleBranch.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className='flex items-center justify-start gap-4 lg:flex-col lg:gap-0 lg:items-start'>
                            <h1 className='text-xl font-semibold'>4A</h1>
                            <span className='text-sm text-gray-400'>Class Name</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* BUTTOM */}
            <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
                <h1 className='text-xl font-semibold'>Student's Schedule</h1>

                <BigCalendar />
            </div>
        </div>


        {/* RIGHT */}
        <div className='w-full xl:w-1/3 flex flex-col gap-2'>
            <div className='bg-white p-3 rounded-md'>
                <h1 className='text-xl font-semibold'>Shortcuts</h1>            
                <div className='mt-4 flex flex-wrap gap-4 text-xs text-gray-500'>
                    <Link href='/' className='p-3 rounded-md bg-gray-200 text-black font-medium'>Student's Exams</Link>
                    <Link href='/' className='p-3 rounded-md bg-gray-200 text-black font-medium'>Student's Lessons</Link>
                    <Link href='/' className='p-3 rounded-md bg-gray-200 text-black font-medium'>Student's Teachers</Link>
                    <Link href='/' className='p-3 rounded-md bg-gray-200 text-black font-medium'>Student's Assignments</Link>
                    <Link href='/' className='p-3 rounded-md bg-gray-200 text-black font-medium'>Student's Result</Link>
                </div>
            </div>

            <Performance />

            <Announcements />
            
        </div>
    
    </div>
  )
}

export default SpecificStudentPage


