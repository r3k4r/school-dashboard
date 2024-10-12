'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";


  

const schema = z.object({
    score : z.string().min(2, {message: 'score must be atleast 2 characters!'}).max(3, {message: 'score must not be longer than 3 characters!'}),
    exam : z.string({message: 'exam is required!'}),
    assignment : z.string({message : 'assignment is required!'}),
    student : z.string({message: 'student is required!'}),
    teacher : z.string({message: 'teacher is required!'}),
    class : z.string({message: 'class is required!'}),
    date : z.date({message: 'start time is required!'}),
    subject : z.string({message: 'subject is required!'}),
})

const ResultForm = ({type, data, handleClose}) => {
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver : zodResolver(schema)
      });

      const onSubmit = handleSubmit((data) => {
          console.log(data);
      })

      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} result</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 gap-y-6 ${errors?.title ? 'gap-y-10' : ''}`}>
              {/* SUBJECT */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="subject">Subject</label>
                <select  defaultValue={data?.subject} name="subject" id="subject" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.subject && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a subject</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.subject && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.subject.message}</span>}
              </div>

              {/* student */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="student">Student</label>
                <select  defaultValue={data?.student} name="teacher" id="teacher" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.student && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a student</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.student && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.student.message}</span>}
              </div>

               {/* score */}
               <InputField label="Score" type='text' name="score" defaultValue={data?.score} register={register} error={errors?.score} />


               {/* TEACHER */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="teacher">Teacher</label>
                <select  defaultValue={data?.teacher} name="teacher" id="teacher" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.teacher && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a teacher</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.teacher && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.teacher.message}</span>}
              </div>

              {/* CLASS */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="CLASS">Class</label>
                <select  defaultValue={data?.class} name="class" id="class" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.class && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a class</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.class && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.class.message}</span>}
              </div>

              {/* date */}
              <InputField label="Date" type='date' name="date" defaultValue={data?.date} register={register} error={errors?.date} />



              {/* EXAM */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="exam">Exam</label>
                <select  defaultValue={data?.exam} name="exam" id="exam" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.exam && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a exam</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.exam && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.exam.message}</span>}
              </div>


              {/* ASSIGNMNET */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="assignment">Assignment</label>
                <select  defaultValue={data?.assignment} name="assignment" id="assignment" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.assignment && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a assignment</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.assignment && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.assignment.message}</span>}
              </div>


              {/* ATUDENT */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="astudent">Student</label>
                <select  defaultValue={data?.student} name="student" id="student" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.student && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a student</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.student && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.student.message}</span>}
              </div>


            </div>
        </div>  



        <div className={`flex items-start justify-start gap-3 mt-12`}>
            <button type="button" onClick={handleClose} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md" >Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Submit</button>
        </div>    
      </form>
    </div>
  )
}

export default ResultForm
