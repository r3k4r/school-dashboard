'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";


const mockTeachers = [
  { id: 1, name: 'teacher A' },
  { id: 2, name: 'teacher B' },
  { id: 3, name: 'teacher C' },
  { id: 4, name: 'teacher A' },
  { id: 5, name: 'teacher B' },
  { id: 6, name: 'teacher C' },

];

const mockLessons = [
  { id: 1, name: 'lesson A' },
  { id: 2, name: 'lesson B' },
  { id: 3, name: 'lesson C' },
  { id: 4, name: 'lesson A' },
  { id: 5, name: 'lesson B' },
  { id: 6, name: 'lesson C' },

];

const schema = z.object({
    name : z.string().min(3, {message: 'name must be atleast 3 characters!'}).max(20, {message: 'name must not be longer than 20 characters!'}),
    teachers : z.array(z.object({
      id: z.number(),
      name: z.string()
    }), {message : 'teacher(s) is required!'}),
     lessons : z.array(z.object({
      id: z.number(),
      name: z.string()
    }), {message : 'lesson(s) is required!'})
})

const SubjectForm = ({type, data, handleClose}) => {
  const [TeachersearchTerm, setTeacherSearchTerm] = useState('');
  const [selectedteachers, setSelectedteachers] = useState([]);
  const [LessonsearchTerm, setLessonSearchTerm] = useState('');
  const [selectedLessons, setSelectedLesson] = useState([]);
  const [isOpen, setIsOpen] = useState({
    teacher: false,
    lesson: false
  });
  
  

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver : zodResolver(schema)
      });

      const onSubmit = handleSubmit((data) => {
          console.log(data);
          console.log("Selected teachers:", selectedteachers);
          console.log("Selected teachers:", selectedLessons);
      })

    //   FOR TEACHERS
      const filteredteachers = mockTeachers
        .filter(teacher => teacher.name.toLowerCase().includes(TeachersearchTerm.toLowerCase()))
        .filter(teacher => !selectedteachers.some(s => s.id === teacher.id)); 

    //   FOR LESSONS
      const filteredlessons = mockLessons
        .filter(lesson => lesson.name.toLowerCase().includes(LessonsearchTerm.toLowerCase()))
        .filter(lesson => !selectedLessons.some(s => s.id === lesson.id)); 

      const addteacher = (teacher) => {
        if (!selectedteachers.some(s => s.id === teacher.id)) {
          setSelectedteachers(prev => [...prev, teacher]);
        }
      };

      const addlesson = (lesson) => {
        if (!selectedLessons.some(s => s.id === lesson.id)) {
          setSelectedLesson(prev => [...prev, lesson]);
        }
      };
      

      const removeteacher = (id) => {
        setSelectedteachers(selectedteachers.filter(teacher => teacher.id !== id));
      };

      const removelesson = (id) => {
        setSelectedteachers(selectedLessons.filter(lesson => lesson.id !== id));
      };

      
      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} subject</h1>
      <form name="form" onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>
  

        {/* PERSONAL INFORMATION  */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3 ${errors?.name ? 'mt-6' : 'mt-4'}`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 ${errors?.name ? 'gap-y-10' : ''}`}>
              {/* NAME */}
              <InputField label="Name" type='text' name="name" defaultValue={data?.name} register={register} error={errors?.name} />

               {/* TEACHER(S) */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Teacher(s)</label>
                <div onClick={() => setIsOpen({teacher  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.teachers && 'border-red-600'}`}>
                <p>Select a teacher</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedteachers.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedteachers.map((teacher, index) => {
                      return(
                      <div  key={index} onClick={() => removeteacher(teacher.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {teacher.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.teachers && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.teachers.message}</span>}
              </div>

              {/* LESSONS */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">lesson(s)</label>
                <div onClick={() => setIsOpen({lesson  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.lessons && 'border-red-600'}`}>
                <p>Select a lesson</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedLessons.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedLessons.map((lesson, index) => {
                      return(
                      <div  key={index} onClick={() => removelesson(lesson.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {lesson.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.lessons && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.lessons.message}</span>}
              </div>
            </div>
        </div>  

        {isOpen.teacher && (
          <div id="teacher-list" className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a teacher</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for teacher..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={TeachersearchTerm}
                      onChange={(e) => setTeacherSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredteachers.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No teacher found</p>
                     :
                     <> 
                      <div id="teacher-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredteachers.map((teacher, index) => (
                          <div
                            onClick={() => addteacher(teacher)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{teacher.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({teacher : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}
        {isOpen.lesson && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a lesson</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for lesson..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={LessonsearchTerm}
                      onChange={(e) => setLessonSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredlessons.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No lesson found</p>
                     :
                     <> 
                      <div id="teacher-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredlessons.map((lesson, index) => (
                          <div
                            onClick={() => addlesson(lesson)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{lesson.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({lesson : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
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

export default SubjectForm
