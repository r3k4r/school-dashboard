'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import Image from "next/image";
import { useState } from "react";


const mockStudents = [
  { id: 1, name: 'Student A' },
  { id: 2, name: 'Student B' },
  { id: 3, name: 'Student C' },
  { id: 4, name: 'Student A' },
  { id: 5, name: 'Student B' },
  { id: 6, name: 'Student C' },

];

const schema = z.object({
    username : z.string().min(3, {message: 'username must be atleast 3 characters!'}).max(20, {message: 'username must not be longer tahn 20 characters!'}),
    email : z.string().email({message : 'Invalid email address'}),
    password : z.string().min(8, {message : 'password must be atleast 8 characters!'}),
    firstName : z.string().min(4, {message: 'First name is required!'}),
    lastName : z.string().min(4, {message: 'Last name is required!'}),
    phone : z.string().min(11, {message: 'Phone number is required!'}),
    address : z.string().min(5, {message: 'Address is required!'}),
    gender : z.enum(["male", "female"], {message : 'Gender is required!'}),
    students : z.array(z.object({
      id: z.number(),
      name: z.string()
    }), {message : 'Student(s) is required!'})
})

const ParentForm = ({type, data, handleClose}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver : zodResolver(schema)
      });

      const onSubmit = handleSubmit((data) => {
          console.log(data);
          console.log("Selected Students:", selectedStudents);
      })

      const filteredStudents = mockStudents
        .filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(student => !selectedStudents.some(s => s.id === student.id)); // Exclude already selected students

      const addStudent = (student) => {
        if (!selectedStudents.some(s => s.id === student.id)) {
          setSelectedStudents(prev => [...prev, student]);
        }
      };
      

      const removeStudent = (id) => {
        setSelectedStudents(selectedStudents.filter(student => student.id !== id));
      };

      
      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} parent</h1>
      <form name="form" onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>
          <h3 className="text-md font-semibold text-gray-700">Authentication information</h3>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between flex-wrap gap-3 ${errors?.username || errors?.email || errors?.password ? 'gap-y-10' : ''}`}>
              {/* USERNAME */}
              <InputField label="Username" type='text' name="username" defaultValue={data?.username} register={register} error={errors?.username} />

              {/* EMAIL */}
              <InputField label="Email" type='text' name="email" defaultValue={data?.email} register={register} error={errors?.email} />


              {/* PASSWORD */}
              <InputField label="Password" type='password' name="password" defaultValue={data?.password} register={register} error={errors?.password} />
            </div>
        </div>   

        {/* PERSONAL INFORMATION  */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3 ${errors?.username || errors?.email || errors?.password ? 'mt-6' : 'mt-4'}`}>
          <h3 className="text-md font-semibold text-gray-700">Personal information</h3>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 ${errors?.firstName || errors?.lastName || errors?.phone ? 'gap-y-10' : ''}`}>
              {/* FIRST NAME */}
              <InputField label="First Name" type='text' name="firstName" defaultValue={data?.firstName} register={register} error={errors?.firstName} />

              {/* LAST NAME */}
              <InputField label="Last Name" type='text' name="lastName" defaultValue={data?.lastName} register={register} error={errors?.lastName} />


              {/* PHONE */}
              <InputField label="Phone" type='phone' name="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />  
        
              {/* ADDRESS */}
              <InputField label="Address" type='text' name="address" defaultValue={data?.address} register={register} error={errors?.address} />

               {/* GENDER */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Gender</label>
                <select  defaultValue={data?.gender} name="gender" id="gender" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg text-gray-400/90 appearance-none font-medium  ${errors?.gender && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select Gender</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.gender && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.gender.message}</span>}
              </div>

               {/* STUDENT(S) */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Student(s)</label>
                <div onClick={() => setIsOpen(prev => !prev)} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.students && 'border-red-600'}`}>
                <p>Select a student</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedStudents.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedStudents.map((student, index) => {
                      return(
                      <div  key={index} onClick={() => removeStudent(student.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {student.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.students && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.students.message}</span>}
              </div>
            </div>
        </div>  

        {isOpen && (
          <div id="student-list" className="cursor-default w-full h-full absolute bg-black/60 backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-[90%] h-[90%]' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a student</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for student..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%]' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredStudents.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No student found</p>
                     :
                     <> 
                      <div id="student-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredStudents.map((student, index) => (
                          <div
                            onClick={() => addStudent(student)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{student.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div className=''>
                        <button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}


        <div className={`flex items-start justify-start gap-3 mt-10`}>
            <button type="button" onClick={handleClose} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md" >Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Submit</button>
        </div>    
      </form>
    </div>
  )
}

export default ParentForm
