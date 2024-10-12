'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";



  const mockExams = [
    { id: 1, name: 'exam A' },
    { id: 2, name: 'Student B' },
    { id: 3, name: 'Student C' },
    { id: 4, name: 'Student A' },
    { id: 5, name: 'Student B' },
    { id: 6, name: 'Student C' },
  
  ];
  
  const mockAssignment = [
    { id: 1, name: 'assignment A' },
    { id: 2, name: 'lesson B' },
    { id: 3, name: 'lesson C' },
    { id: 4, name: 'lesson A' },
    { id: 5, name: 'lesson B' },
    { id: 6, name: 'lesson C' },
  
  ];

  const mockAttendance = [
    { id: 1, name: 'an A' },
    { id: 2, name: 'lesson B' },
    { id: 3, name: 'lesson C' },
    { id: 4, name: 'lesson A' },
    { id: 5, name: 'lesson B' },
    { id: 6, name: 'lesson C' },
  
  ];
  

const schema = z.object({
    name : z.string().min(3, {message: 'name must be atleast 3 characters!'}).max(20, {message: 'name must not be longer than 20 characters!'}),
    day : z.string().min(1, {message: 'Day is required!'}),
    start : z.date({message : 'strat time is required!'}),
    end : z.date({message : 'end time is required!'}),
    subject : z.string({message: 'subject is required!'}),
    class : z.string({message: 'class is required!'}),
    teacher : z.string({message: 'teacher is required!'}),
    exam : z.string({message: 'exam is required!'}),
    assignment : z.string({message: 'assignment is required!'}),
    attendance : z.string({message: 'attendance is required!'}),
})

const LessonForm = ({type, data, handleClose}) => {
    const [AssingnmentSearchTerm, setAssignmentSearchTerm] = useState('');
    const [selectedAssignments, setSelectedAssignment] = useState([]);
    
    const [ExamsearchTerm, setExamsearchTerm] = useState('');
    const [selectedExams, setSelectedExams] = useState([]);

    const [AttendancesearchTerm, setAttendanceSearchTerm] = useState('');
    const [selectedAttendance, setSelectedAttendance] = useState([]);


    const [isOpen, setIsOpen] = useState({
      exam: false,
      assignment: false,
      attendance: false,
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
      })



    //   FOR LESSONS
      const filteredAssignment = mockAssignment
        .filter(assignment => assignment.name.toLowerCase().includes(AssingnmentSearchTerm.toLowerCase()))
        .filter(assignment => !selectedAssignments.some(s => s.id === assignment.id)); 

    //   FOR Students
        const filteredExams = mockExams
        .filter(exam => exam.name.toLowerCase().includes(ExamsearchTerm.toLowerCase()))
        .filter(exam => !selectedExams.some(s => s.id === exam.id));

    //   FOR Attendance
        const filteredAttendances = mockAttendance
        .filter(Attendance => Attendance.name.toLowerCase().includes(AttendancesearchTerm.toLowerCase()))
        .filter(Attendance => !selectedAttendance.some(s => s.id === Attendance.id));

    const addExam = (exam) => {
        if (!selectedExams.some(s => s.id === exam.id)) {
          setSelectedExams(prev => [...prev, exam]);
        }
      };

      const removeExam = (id) => {
        setSelectedExams(selectedExams.filter(exam => exam.id !== id));
      };


    const addAttendance = (Attendance) => {
        if (!selectedAttendance.some(s => s.id === Attendance.id)) {
          setSelectedAttendance(prev => [...prev, Attendance]);
        }
      };

      const removeAttendance = (id) => {
        setSelectedAttendance(selectedAttendance.filter(Attendance => Attendance.id !== id));
      };



      const addAssignment = (assignment) => {
        if (!selectedAssignments.some(s => s.id === assignment.id)) {
          setSelectedAssignment(prev => [...prev, assignment]);
        }
      };
      

      const removeAssignment = (id) => {
        setSelectedAssignment(selectedAssignments.filter(assignment => assignment.id !== id));
      };
      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} lesson</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 gap-y-10 ${errors?.name || errors?.email || errors?.password ? 'gap-y-10' : ''}`}>
              {/* name */}
              <InputField label="name" type='text' name="name" defaultValue={data?.name} register={register} error={errors?.name} />

              {/* DAY */}
              <InputField label="Day" type='text' name="day" defaultValue={data?.day} register={register} error={errors?.day} />
             
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

             {/* exam(S) */}
             <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Exam(s)</label>
                <div onClick={() => setIsOpen({exam  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.exam && 'border-red-600'}`}>
                <p>Select a exam</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedExams.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedExams.map((exam, index) => {
                      return(
                      <div  key={index} onClick={() => removeExam(exam.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {exam.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.exam && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.exam.message}</span>}
              </div>


               {/* ASSIGNMENT */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">assignment(s)</label>
                <div onClick={() => setIsOpen({assignment  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.assignment && 'border-red-600'}`}>
                <p>Select a assignment</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedAssignments.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedAssignments.map((assignment, index) => {
                      return(
                      <div  key={index} onClick={() => removeAssignment(assignment.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {assignment.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.assignment && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.assignment.message}</span>}
              </div>


               {/* Attendance */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Attendance(s)</label>
                <div onClick={() => setIsOpen({attendance  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.attendance && 'border-red-600'}`}>
                <p>Select a attendance</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedAttendance.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedAttendance.map((attendance, index) => {
                      return(
                      <div  key={index} onClick={() => removeAttendance(attendance.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {attendance.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.attendance && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.attendance.message}</span>}
              </div>

            </div>
        </div>  

        {isOpen.attendance && (
          <div id="attendance-list" className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a attendance</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for attendance..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={AttendancesearchTerm}
                      onChange={(e) => setAttendanceSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredAttendances.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No Attendance found</p>
                     :
                     <> 
                      <div id="attendance-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredAttendances.map((attendance, index) => (
                          <div
                            onClick={() => addAttendance(attendance)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{attendance.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({attendance : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}
        {isOpen.assignment && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a assignment</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for assignment..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={AssingnmentSearchTerm}
                      onChange={(e) => setAssignmentSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredAssignment.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No assignment found</p>
                     :
                     <> 
                      <div id="assignment-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredAssignment.map((assignment, index) => (
                          <div
                            onClick={() => addAssignment(assignment)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{assignment.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({assignment : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}
        {isOpen.exam && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a exam</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for exam..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={ExamsearchTerm}
                      onChange={(e) => setExamsearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredExams.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No exam found</p>
                     :
                     <> 
                      <div id="exam-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredExams.map((exam, index) => (
                          <div
                            onClick={() => addExam(exam)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{exam.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({exam : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
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

export default LessonForm
