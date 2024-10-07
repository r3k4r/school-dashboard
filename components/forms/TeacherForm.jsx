'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
    username : z.string().min(3, {message: 'username must be atleast 3 characters!'}).max(20, {message: 'username must not be longer tahn 20 characters!'}),
    email : z.string().email({message : 'Invalid email address'}),
    password : z.string().min(8, {message : 'password must be atleast 8 characters!'}),
    firstName : z.string().min(4, {message: 'First name is required!'}),
    lastName : z.string().min(4, {message: 'Last name is required!'}),
    phone : z.string().min(11, {message: 'Phone number is required!'}),
    bloodType : z.string().min(2, {message: 'Blood type is required!'}),
    address : z.string().min(5, {message: 'Address is required!'}),
    birthday : z.date({message: 'Birthday is required!'}),
    gender : z.enum(["male", "female"], {message : 'Gender is required!'}),
    img : z.instanceof(File, {message : 'Image is required!'})
})

const TeacherForm = ({type, data, handleClose}) => {

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
      <h1 className="text-lg font-medium">Create a new teacher</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>
          <h3 className="text-md font-semibold text-gray-700">Authentication information</h3>

            <div className='flex items-center justify-between gap-3'>
              {/* USERNAME */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="username">Username</label>
                <input  id="username" type="text" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('username')} />
                {errors.username && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.username.message}</span>}
              </div>

              {/* EMAIL */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="email">Email</label>
                <input  id="email" type="email" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('email')} />
                {errors.email && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.email.message}</span>}
              </div>

              {/* PASSWORD */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="password">Password</label>
                <input  id="password" type="password" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('password')} />
                {errors.password && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.password.message}</span>}
              </div>
            </div>
        </div>   

        {/* PERSONAL INFORMATION  */}
        <div className={`flex flex-col items-start justify-start gap-3  ${errors?.username || errors?.email || errors?.password ? 'mt-6' : 'mt-4'}`}>
          <h3 className="text-md font-semibold text-gray-700">Personal information</h3>

            <div className='flex items-center justify-between gap-3'>
              {/* FIRST NAME */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="firstName">First Name</label>
                <input  id="firstName" type="text" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('firstName')} />
                {errors.firstName && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.firstName.message}</span>}
              </div>

              {/* LAST NAME */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="lastName">Last Name</label>
                <input  id="lastName" type="text" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('lastName')} />
                {errors.lastName && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.lastName.message}</span>}
              </div>

              {/* PHONE */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="phone">Phone</label>
                <input  id="phone" type="phone" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('phone')} />
                {errors.phone && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.phone.message}</span>}
              </div>
            </div>
        </div>  
        
        <div className={`flex flex-col items-start justify-start gap-3  ${errors?.firstName || errors?.lastName || errors?.phone ? 'mt-6' : 'mt-4'}`}>
            <div className='flex items-center justify-between gap-3'>
              {/* ADDRESS */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="address">Address</label>
                <input  id="address" type="text" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('address')} />
                {errors.address && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.address.message}</span>}
              </div>

              {/* BLOOD TYPE */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="bloodType">Blood Type</label>
                <input  id="bloodType" type="text" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('bloodType')} />
                {errors.bloodType && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.bloodType.message}</span>}
              </div>

              {/* DATE OF BIRTH */}
              <div className='flex flex-col items-start justify-start relative'>
              <label className="text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent " htmlFor="firstName">Date of birth</label>
                <input  id="birthday" type="date" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('birthday')} />
                {errors.birthday && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors.birthday.message}</span>}
              </div>
            </div>
        </div>  

        <div className={`flex flex-col items-start justify-start gap-3  ${errors?.address || errors?.bloodType || errors?.birthday ? 'mt-6' : 'mt-4'}`}>
            <div className='flex items-center justify-between gap-3'>
              {/* SEX */}
              <div className='flex flex-col items-start justify-start relative'>
                <select name="sex" id="sex" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `}>
                  <option value="Choose a Gender">Gender</option>
                  <option value="male">male</option>
                  <option value="female">Female</option>
                </select>
                {errors.birthday && <span className="absolute top-12 left-0 text-xs text-red-600 font-medium">{errors.birthday.message}</span>}
              </div>

              {/* IMAGE */}
              <div className='flex flex-col items-start justify-start relative'>
                <input  id="img" type="file" className={` w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg  ${errors?.username && 'border-red-600'} `} {...register('img')} />
                {errors.img && <span className="absolute top-12 left-0 text-xs text-red-600 font-medium">{errors.img.message}</span>}
              </div>

            </div>
        </div>

        <div className={`flex items-start justify-start gap-3  ${errors?.birthday || errors?.img ? 'mt-6' : 'mt-4'}`}>
            <button onClick={handleClose} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md" >Cancel</button>
            <button className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Submit</button>
        </div>    
      </form>
    </div>
  )
}

export default TeacherForm
