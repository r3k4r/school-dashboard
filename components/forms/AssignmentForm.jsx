'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";



const mockResult = [
    { id: 1, name: 'result A' },
    { id: 2, name: 'teacher B' },
    { id: 3, name: 'teacher C' },
    { id: 4, name: 'teacher A' },
    { id: 5, name: 'teacher B' },
    { id: 6, name: 'teacher C' },
  
  ];

 
  

const schema = z.object({
    title : z.string().min(3, {message: 'title must be atleast 3 characters!'}).max(20, {message: 'title must not be longer than 20 characters!'}),
    start : z.string().min(1, {message: 'start time is required!'}),
    end : z.string({message : 'end time is required!'}),
    subject : z.string({message: 'subject is required!'}),
    class : z.string({message: 'class is required!'}),
    teacher : z.string({message: 'teacher is required!'}),
    lesson : z.string({message : 'lessons is required!'}),
    result : z.string({message : 'result is required!'}),
})

const ClassForm = ({type, data, handleClose}) => {
    const [ResultsearchTerm, setResultSearchTerm] = useState('');
    const [selectedResult, setSelectedResult] = useState([]);


    const [isOpen, setIsOpen] = useState({result : false});

    
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

      //   FOR RESULT
      const filteredResults = mockResult
        .filter(result => result.name.toLowerCase().includes(ResultsearchTerm.toLowerCase()))
        .filter(result => !selectedResult.some(s => s.id === result.id)); 

   

    

      const addResult = (result) => {
        if (!selectedResult.some(s => s.id === result.id)) {
          setSelectedResult(prev => [...prev, result]);
        }
      };
      

      const removeResult = (id) => {
        setSelectedResult(selectedResult.filter(result => result.id !== id));
      };

      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} assignment</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 gap-y-6 ${errors?.title ? 'gap-y-10' : ''}`}>
              {/* title */}
              <InputField label="title" type='text' name="title" defaultValue={data?.title} register={register} error={errors?.title} />

               {/* start */}
               <InputField label="Start Time" type='date' name="start time" defaultValue={data?.start} register={register} error={errors?.start} />
              
              {/* end */}
              <InputField label="End Time" type='date' name="end time" defaultValue={data?.end} register={register} error={errors?.end} />

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


              {/* lesson */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="lesson">Lesson</label>
                <select  defaultValue={data?.lesson} name="teacher" id="teacher" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.lesson && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select a lesson</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.lesson && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.lesson.message}</span>}
              </div>


             {/* RESULT(S) */}
             <div className='flex flex-col items-start justify-start relative mt-2'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="result">Result(s)</label>
                <div onClick={() => setIsOpen({result  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.result && 'border-red-600'}`}>
                <p>Select a result</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedResult.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedResult.map((result, index) => {
                      return(
                      <div  key={index} onClick={() => removeResult(result.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {result.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.result && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.result.message}</span>}
              </div>


            </div>
        </div>  

        {isOpen.result && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a result</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for results..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={ResultsearchTerm}
                      onChange={(e) => setResultSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredResults.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No result found</p>
                     :
                     <> 
                      <div id="result-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredResults.map((result, index) => (
                          <div
                            onClick={() => addResult(result)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{result.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({result : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}


        <div className={`flex items-start justify-start gap-3 mt-12`}>
            <button type="button" onClick={handleClose} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md" >Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Submit</button>
        </div>    
      </form>
    </div>
  )
}

export default ClassForm
