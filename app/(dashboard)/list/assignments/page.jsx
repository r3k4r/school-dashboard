
import Pagination from '@/components/Pagination';
import TableSearch from '@/components/TableSearch'
import Table from '@/components/Table'
import Link from 'next/link'
import Image from 'next/image';
import { role, assignmentsData } from "@/app/lib/data"
import FormModal from '@/components/FormModal';



const columns = [
  {
    header: "Subject",
    accessor: "subjects",
  },
  {
    header: "Class",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Due Date",
    accessor: "dueDates",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AssignmentsListPage = () => {

  
const renderRow = (item) => (
  <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-sky-100'>
      <td className='flex items-center gap-4 p-4'>
          <div className='flex flex-col'>
              <h3 className='font-semibold'>{item?.subject}</h3> 
          </div>    
      </td>

      <td className='hidden md:table-cell'>{item?.class}</td>
      <td className='hidden md:table-cell'>{item?.teacher}</td>
      <td className='hidden md:table-cell'>{item?.dueDate}</td>
      <td>
          <div className='flex items-center gap-2'>
          {
                role === "admin" && <>
                    <FormModal table="assignment" type={"Update"} data={item}> 
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-white">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                              </svg>
                    </FormModal>  

                    <FormModal table="assignment" type={"delete"} id={item?.id}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </FormModal>
                    </>
                }
          </div>    
      </td>
  </tr>

)

    return (
      <div className='bg-white p-4 m-4 mt-0 rounded-md flex-1'>
        {/* TOP */}
        <div className='w-full flex items-center justify-between'>
          <h1 className={`hidden md:block text-lg font-semibold`} >All Assignments</h1>

          <div className='w-full md:w-auto flex flex-col md:flex-row items-end md:items-center gap-4'>
            <TableSearch />

            <div className='flex items-center gap-4 '>
              <button className='w-8 h-8 flex items-center justify-center p-2 rounded-full bg-ten'> <Image src="/filter.png" alt="filter image" width={14} height={14} /> </button>
              <button className='w-8 h-8 flex items-center justify-center p-2 rounded-full bg-ten'> <Image src="/sort.png" alt="filter image" width={14} height={14} /> </button>
              {role === 'admin' &&
                <FormModal table="assignment" type={"Create"} > 
                  <button className='w-8 h-8 flex items-center justify-center p-2 rounded-full bg-ten'>
                    <Image src="/Create.png" alt="filter image" width={14} height={14} />
                  </button>
                </FormModal>
                 }
            </div>
          </div>
        </div>


        {/* LIST || MIDDLE */}
        <div className=''>
          <Table 
          columns={columns}
          renderRow={renderRow}
          data={assignmentsData}
          />
        </div>

        {/* PAGGINATION */}
          <Pagination />
        
      </div>
    )
  }
  
  export default AssignmentsListPage
  