
import Image from 'next/image'

const SpecificTeacherPage = () => {
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
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200"
                        alt=""
                        width={144}
                        height={144}
                        className="w-36 h-36 rounded-full object-cover"
                        />
                    </div>
                    {/* TEACHER'SINFORMATION */}
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
                <div className='flex-1 flex gap-4 justify-between flex-wrap '>
                    {/* CARD */}
                    <div className=''>
                        <Image src='/singleAttendance.png' alt='' width={24} height={24} className='w-6 h-6' />
                        <div className=''>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/* BUTTOM */}
            <div className=''>
            
            </div>
        </div>


        {/* RIGHT */}
        <div className='w-full xl:w-1/3'>
            
        </div>
    
    </div>
  )
}

export default SpecificTeacherPage


