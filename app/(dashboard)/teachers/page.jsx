

import EventClender from "@/components/EventClender"
import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalender"


const Teachers = () => {
  return (
    <div className="p-4 gap-4 flex flex-col flex-1 xl:flex-row">

       {/* LEFT */}
       <div className="w-full xl:w-2/3 flex flex-col gap-8">
          <div className='h-full bg-white p-4 rounded-md'>
            <h1 className='text-xl font-semibold'> Schedule </h1>

            <BigCalendar />  
          </div>     
       </div>


       {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
      
    </div>
  )
}

export default Teachers