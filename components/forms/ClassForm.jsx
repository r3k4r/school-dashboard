'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import { useState } from "react";



const mockEvent = [
    { id: 1, name: 'event A' },
    { id: 2, name: 'teacher B' },
    { id: 3, name: 'teacher C' },
    { id: 4, name: 'teacher A' },
    { id: 5, name: 'teacher B' },
    { id: 6, name: 'teacher C' },
  
  ];

  const mockStudents = [
    { id: 1, name: 'Student A' },
    { id: 2, name: 'Student B' },
    { id: 3, name: 'Student C' },
    { id: 4, name: 'Student A' },
    { id: 5, name: 'Student B' },
    { id: 6, name: 'Student C' },
  
  ];
  
  const mockLessons = [
    { id: 1, name: 'lesson A' },
    { id: 2, name: 'lesson B' },
    { id: 3, name: 'lesson C' },
    { id: 4, name: 'lesson A' },
    { id: 5, name: 'lesson B' },
    { id: 6, name: 'lesson C' },
  
  ];

  const mockAnnouncements = [
    { id: 1, name: 'an A' },
    { id: 2, name: 'lesson B' },
    { id: 3, name: 'lesson C' },
    { id: 4, name: 'lesson A' },
    { id: 5, name: 'lesson B' },
    { id: 6, name: 'lesson C' },
  
  ];
  

const schema = z.object({
    name : z.string().min(3, {message: 'name must be atleast 3 characters!'}).max(20, {message: 'name must not be longer than 20 characters!'}),
    capacity : z.string().min(1, {message: 'Capacity is required!'}),
    supervisor : z.string({message : 'supervisor is required!'}),
    lesson : z.string({message : 'lessons is required!'}),
    students : z.string({message: 'Student is required!'}),
    grade : z.string({message: 'Grade is required!'}),
    event : z.string({message: 'event is required!'}),
    announcement : z.string({message: 'Announecemet is required!'}),
})

const ClassForm = ({type, data, handleClose}) => {
    const [EventsearchTerm, setEventSearchTerm] = useState('');
    const [selectedevents, setSelectedevents] = useState([]);

    const [LessonsearchTerm, setLessonSearchTerm] = useState('');
    const [selectedLessons, setSelectedLesson] = useState([]);
    
    const [StudentsearchTerm, setStudentSearchTerm] = useState('');
    const [selectedStudents, setSelectedStudents] = useState([]);

    const [AnnouncementsearchTerm, setAnnouncementSearchTerm] = useState('');
    const [selectedAnnouncement, setSelectedAnnouncement] = useState([]);


    const [isOpen, setIsOpen] = useState({
      student: false,
      lesson: false,
      event: false,
      announcement: false,
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

      //   FOR EVENT
      const filteredevents = mockEvent
        .filter(event => event.name.toLowerCase().includes(EventsearchTerm.toLowerCase()))
        .filter(event => !selectedevents.some(s => s.id === event.id)); 

    //   FOR LESSONS
      const filteredlessons = mockLessons
        .filter(lesson => lesson.name.toLowerCase().includes(LessonsearchTerm.toLowerCase()))
        .filter(lesson => !selectedLessons.some(s => s.id === lesson.id)); 

    //   FOR Students
        const filteredStudents = mockStudents
        .filter(student => student.name.toLowerCase().includes(StudentsearchTerm.toLowerCase()))
        .filter(student => !selectedStudents.some(s => s.id === student.id));

    //   FOR announcement
        const filteredAnnouncements = mockAnnouncements
        .filter(announcement => announcement.name.toLowerCase().includes(AnnouncementsearchTerm.toLowerCase()))
        .filter(announcement => !selectedAnnouncement.some(s => s.id === announcement.id));

    const addStudent = (student) => {
        if (!selectedStudents.some(s => s.id === student.id)) {
          setSelectedStudents(prev => [...prev, student]);
        }
      };

      const removeStudent = (id) => {
        setSelectedStudents(selectedStudents.filter(student => student.id !== id));
      };


    const addAnnouncement = (announcement) => {
        if (!selectedAnnouncement.some(s => s.id === announcement.id)) {
          setSelectedAnnouncement(prev => [...prev, announcement]);
        }
      };

      const removeAnnounement = (id) => {
        setSelectedAnnouncement(selectedAnnouncement.filter(announcement => announcement.id !== id));
      };


      const addevent = (event) => {
        if (!selectedevents.some(s => s.id === event.id)) {
          setSelectedevents(prev => [...prev, event]);
        }
      };

      const addlesson = (lesson) => {
        if (!selectedLessons.some(s => s.id === lesson.id)) {
          setSelectedLesson(prev => [...prev, lesson]);
        }
      };
      

      const removeevent = (id) => {
        setSelectedevents(selectedevents.filter(event => event.id !== id));
      };

      const removelesson = (id) => {
        setSelectedLesson(selectedLessons.filter(lesson => lesson.id !== id));
      };
      

  return (
    <div>
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} class</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between  gap-3 gap-y-10 ${errors?.name || errors?.email || errors?.password ? 'gap-y-10' : ''}`}>
              {/* name */}
              <InputField label="name" type='text' name="name" defaultValue={data?.name} register={register} error={errors?.name} />

              {/* CAPACITY */}
              <InputField label="Capacity" type='number' name="capacity" defaultValue={data?.capacity} register={register} error={errors?.capacity} />

            {/* supervisor */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="supervisor">Supervisor</label>
                <select  defaultValue={data?.supervisor} name="supervisor" id="supervisor" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.supervisor && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select supervisor</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.supervisor && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.supervisor.message}</span>}
              </div>


            {/* GRADE */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="grade">Grade</label>
                <select  defaultValue={data?.grade} name="grade" id="grade" className={`cursor-pointer text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 p-2 rounded-lg  text-gray-800 appearance-none font-medium  ${errors?.grade && 'border-red-600'}`}>
                  <option className="text-sm text-gray-300 font-medium" value="none" disabled selected>Select grade</option>
                  <option className="text-sm text-black font-medium" value="male">Male</option>
                  <option className="text-sm text-black font-medium" value="female">Female</option>
                </select>
                <div className="absolute inset-y-10 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                  </svg>
                </div>
                {errors.grade && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.grade.message}</span>}
              </div>

             {/* STUDENT(S) */}
             <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Student(s)</label>
                <div onClick={() => setIsOpen({student  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.students && 'border-red-600'}`}>
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

             {/* EVENT(S) */}
             <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Event(s)</label>
                <div onClick={() => setIsOpen({event  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.event && 'border-red-600'}`}>
                <p>Select a event</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedevents.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedevents.map((event, index) => {
                      return(
                      <div  key={index} onClick={() => removeevent(event.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {event.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.events && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.events.message}</span>}
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


               {/* ANNOUNCEMENT */}
               <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Announecemet(s)</label>
                <div onClick={() => setIsOpen({announcement  : true})} className={`cursor-pointer flex items-center justify-between text-gray-600 select-none p-2 text-xs md:text-md w-[180px] md:w-[165px] lg:w-[190px] bg-white border-2 border-gray-300 rounded-lg font-medium ${errors?.announcement && 'border-red-600'}`}>
                <p>Select a announcement</p>
                <div className="absolute inset-y-9.5 right-0 flex items-center px-2 pointer-events-none rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                </div>
                {selectedAnnouncement.length > 0 && (
                  <div className='flex items-center justify-start flex-wrap gap-2 absolute top-16 left-0'>
                    {selectedAnnouncement.map((announcement, index) => {
                      return(
                      <div  key={index} onClick={() => removeAnnounement(announcement.id)}  className='cursor-pointer flex items-center justify-between gap-3 text-xs text-gray-600 font-medium p-1 bg-gray-200 rounded-md'>
                          {announcement.name}

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                      </div>
                      )
                    })}
                  </div>
              )}
                {errors.announcements && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.announcements.message}</span>}
              </div>

            </div>
        </div>  

        {isOpen.announcement && (
          <div id="announcement-list" className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a announcement</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for announcement..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={AnnouncementsearchTerm}
                      onChange={(e) => setAnnouncementSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredAnnouncements.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No announcement found</p>
                     :
                     <> 
                      <div id="announcement-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredAnnouncements.map((announcement, index) => (
                          <div
                            onClick={() => addAnnouncement(announcement)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{announcement.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({announcement : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
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
                      <div id="announcement-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
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
        {isOpen.student && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a student</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for lesson..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={StudentsearchTerm}
                      onChange={(e) => setStudentSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredStudents.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No student found</p>
                     :
                     <> 
                      <div id="announcement-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
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

                    <div>
                        <button onClick={() => setIsOpen({student : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
                    </div>
                </div>
            </div>
          </div>
        )}
        {isOpen.event && (
          <div className="cursor-default w-full h-full absolute backdrop-blur-sm left-0 top-0 z-50 flex items-center justify-center" onClick={() => setIsOpen(prev => !prev)}>
            <div  className='bg-white p-4 rounded-md relative w-full' onClick={(e) => e.stopPropagation()}>
              <h1 className="text-lg font-semibold">Select a event</h1>

              <div className='mt-4' onClick={(e) => e.stopPropagation()}>
                <input
                      type="text"
                      placeholder="Search for lesson..."
                      className={`flex items-center justify-between text-gray-600 select-none p-2 text-sm w-[280px] bg-white border-2 border-gray-300 rounded-lg font-medium `}
                      value={EventsearchTerm}
                      onChange={(e) => setEventSearchTerm(e.target.value)}
                    />
              </div>
                <div className='flex flex-col justify-between h-[84%] sm:h-[77%] gap-10' onClick={(e) => e.stopPropagation()}>
                  {
                    filteredevents.length < 1 ? 
                    <p className='text-md font-medium text-gray-700 mt-5'>No event found</p>
                     :
                     <> 
                      <div id="event-list" className="bg-gray-100 rounded-md border-2 max-h-[340px] sm:max-h-[220px] overflow-y-scroll mt-4">
                        {filteredevents.map((event, index) => (
                          <div
                            onClick={() => addevent(event)}
                            key={index}
                            className="cursor-pointer flex items-center justify-between p-2 border-b border-gray-200 odd:bg-gray-50 even:bg-gray-250"
                          >
                            <p>{event.name}</p>
                          </div>
                        ))}

                      </div>
                  </>
                  }

                    <div>
                        <button onClick={() => setIsOpen({event : false})} className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Close</button>
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

export default ClassForm
