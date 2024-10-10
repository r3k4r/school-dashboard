'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";
import Image from "next/image";


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
      <h1 className="text-lg font-semibold">{type} a {type === "Update" ? '' : 'new'} teacher</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

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

            <div className={`grid grid-flow-row grid-cols-2 sm:grid-cols-3 items-center justify-between flex-wrap gap-3 ${errors?.firstName || errors?.lastName || errors?.phone ? 'gap-y-10' : ''}`}>
              {/* FIRST NAME */}
              <InputField label="First Name" type='text' name="firstName" defaultValue={data?.firstName} register={register} error={errors?.firstName} />

              {/* LAST NAME */}
              <InputField label="Last Name" type='text' name="lastName" defaultValue={data?.lastName} register={register} error={errors?.lastName} />


              {/* PHONE */}
              <InputField label="Phone" type='phone' name="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />  
        
              {/* ADDRESS */}
              <InputField label="Address" type='text' name="address" defaultValue={data?.address} register={register} error={errors?.address} />

              {/* BLOOD TYPE */}
              <InputField label="Blood type" type='text' name="bloodType" defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />

              {/* DATE OF BIRTH */}
              <InputField label="Birthday" type='date' name="birthday" defaultValue={data?.birthday} register={register} error={errors?.birthday} />
            
            </div>
        </div>  

        <div className={`flex flex-col items-start justify-start gap-3 ${errors?.firstName || errors?.lastName || errors?.phone ? 'mt-4' : ''} `}>
            <div className={`flex items-center justify-between flex-wrap gap-3 ${errors?.gender || errors?.img ? 'gap-y-8' : ''}`}>
              {/* GENDER */}
              <div className='flex flex-col items-start justify-start relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="gender">Gender</label>
                <select  defaultValue={data?.gender} name="gender" id="gender" className={`cursor-pointer w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg text-sm text-gray-400/90 appearance-none font-medium  ${errors?.gender && 'border-red-600'}`}>
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

              {/* IMAGE */}
              <div className='w-ful flex flex-col items-start justify-center gap-0.5 relative'>
                <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="img">Image</label>
                <label className={`cursor-pointer flex items-center justify-between text-gray-600 select-none w-[230px] bg-white border-2 border-gray-300 p-1.5 rounded-lg text-xs font-medium ${errors?.img && 'border-red-600'}`} htmlFor="img">
                  <div className="flex items-center justify-star gap-2">
                    <Image src="/upload.png" width={20} height={20} alt="upload" />
                    <span>Upload an image</span>
                  </div>
                  <div className="p-1 bg-black text-white text-[10px] rounded-md">Upload</div>
                </label>
                <input  id="img" type="file" className={`hidden w-[230px] bg-white border-2 border-gray-300 p-2 rounded-lg text-xs font-medium `} {...register('img')} />
                {errors.img && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{errors?.img.message}</span>}
              </div>

            </div>
        </div>

        <div className={`flex items-start justify-start gap-3  ${errors?.birthday || errors?.img ? 'mt-6' : 'mt-4'}`}>
            <button type="button" onClick={handleClose} className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md" >Cancel</button>
            <button type="submit" className="px-4 py-2 bg-black text-white text-sm font-semibold rounded-md" >Submit</button>
        </div>    
      </form>
    </div>
  )
}

export default TeacherForm
