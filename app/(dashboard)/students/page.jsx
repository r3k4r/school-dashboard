

import EventClender from "@/components/EventClender"
import Announcements from "@/components/Announcements"


const Students = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">

       {/* LEFT */}
       <div className="w-full xl:w-2/3 flex flex-col gap-8">
          <div className='h-full bg-white p-4 rounded-md'>
            <h1 className='text-xl font-semibold'>Schedule (A)</h1>
          </div>       
       </div>


       {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <EventClender />

        <Announcements />
      </div>
      
    </div>
  )
}

export default Students