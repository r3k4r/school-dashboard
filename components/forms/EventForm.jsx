'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";
 
  

const schema = z.object({
    title : z.string().min(5, {message: 'title must be atleast 5 characters!'}).max(20, {message: 'score must not be longer than 20 characters!'}),
    desc : z.string({message: 'description is required!'}),
    start : z.string({message : 'strat time is required!'}),
    end : z.string({message : 'end time is required!'}),
    class : z.string({message: 'class is required!'}),
    date : z.date({message: 'start time is required!'}),
})

const EventForm = ({type, data, handleClose}) => {

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
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} event</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 gap-y-6 ${errors?.title ? 'gap-y-10' : ''}`}>

            {/* title */}
             <InputField label="Title" type='text' name="title" defaultValue={data?.title} register={register} error={errors?.title} />

            {/* description */}
            <InputField label="Description" type='text' name="description" defaultValue={data?.description} register={register} error={errors?.description} />

            {/* start */}
            <InputField label="Start Time" type='text' name="start time" defaultValue={data?.start} register={register} error={errors?.start} />
                        
            {/* end */}
            <InputField label="End Time" type='text' name="end time" defaultValue={data?.end} register={register} error={errors?.end} />

            {/* date */}
            <InputField label="Date" type='date' name="date" defaultValue={data?.date} register={register} error={errors?.date} />

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

export default EventForm
