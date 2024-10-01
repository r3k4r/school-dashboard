import AttendenceChart from "@/components/AttendenceChart"
import CountChart from "@/components/CountChart"
import FinanceChart from "@/components/FinanceChart"
import EventClender from "@/components/EventClender"
import UserCard from "@/components/UserCard"
import Announcements from "@/components/Announcements"


const Admin = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">

        {/* USER CARD */}
        <div className='flex justify-between gap-4 flex-wrap'>
          <UserCard type="students" number="6371"/>
          <UserCard type="teachers" number="549"/>
          <UserCard type="parents" number="6283"/>
          <UserCard type="staffs" number="347"/>
        </div>

        {/* MIDDLE CHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'> 

          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>


          {/* ATTENDENCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendenceChart />
          </div>

        </div>


        {/* BOTTOM CHART */}
        <div className='w-full h-[500px]'>
          <FinanceChart />
        </div>

      </div>

      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventClender />

        <Announcements />
      </div>
      
    </div>
  )
}

export default Admin

