'use client'

import dynamic from "next/dynamic";
import { useState } from "react"
import FormSkeleton from "./FormSkeleton";

const TeacherForm = dynamic(() => import('./forms/TeacherForm'), {loading: () => <FormSkeleton />});
const StudentForm = dynamic(() => import('./forms/StudentForm'), {loading: () => <FormSkeleton />});
const ParentForm = dynamic(() => import('./forms/ParentForm'), {loading: () => <FormSkeleton />});


const FormModal = ({ table, type, data, id, children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const size = type === 'Create' ? "w-8 h-8" : "w-7 h-7";
  const bgColor = type === 'Create' ? "bg-ten" : type === 'Update' ? "bg-thirty" : "bg-red-600";
  

  const forms = {
    teacher: (type, data) => <TeacherForm type={type} data={data} handleClose={handleClose}/>,
    student: (type, data) => <StudentForm type={type} data={data} handleClose={handleClose}/>,
    parent: (type, data) => <ParentForm type={type} data={data} handleClose={handleClose}/>
  };
  
  const Form = ()=>{
    return type === 'delete' && id ? (
        <form action='' className="flex flex-col items-start justify-start gap-2">
            <span className="text-center font-medium">All data will be lost. are you sure you want to delete this {table}?</span>
            <div className='flex items-center justify-centere gap-2'>
                <button onClick={handleClose} className="p-2 px-3 text-xs font-medium flex items-center justify-center bg-gray-300 text-black rounded-md">Cancel</button>
                <button type="submit" className="p-2 px-3 text-xs font-medium flex items-center justify-center bg-red-600 text-white rounded-md">Delete</button>
            </div>
        </form>
        )
        :
        type === "Create" || type === "Update" ? (
          forms[table](type, data)
        ) : (
          "Form not found!"
        );
  }

  return (
    <>
      <button onClick={handleOpen} className={`rounded-full flex items-center justify-center ${size} ${bgColor}`}>
        {children}
      </button>

      {open && (
        <div onClick={handleClose} className="cursor-default w-screen h-screen absolute bg-black/60 left-0 top-0 z-50 flex items-center justify-center">
          <div className={`bg-white p-4 rounded-md relative ${type === "delete" ? '' : 'w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]' }`} onClick={(e) => e.stopPropagation()}>
             <Form />
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
