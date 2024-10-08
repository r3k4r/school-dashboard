'use client'

import { z } from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import InputField from "../InputField";


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
      <h1 className="text-lg font-semibold">Create a new teacher</h1>
      <form onSubmit={onSubmit} className='mt-4 flex flex-col items-start justify-start gap-4'>

        {/* AUTHENTICATION INFORMATIOM */}
        <div className={`flex flex-col items-start justify-start gap-3 mt-3`}>
          <h3 className="text-md font-semibold text-gray-700">Authentication information</h3>

            <div className='flex items-center justify-between gap-3'>
              {/* USERNAME */}
              <InputField label="Username" type='text' name="username" defaultValue={data?.username} register={register} error={errors?.username} />

              {/* EMAIL */}
              <InputField label="Email" type='text' name="email" defaultValue={data?.email} register={register} error={errors?.email} />


              {/* PASSWORD */}
              <InputField label="Password" type='password' name="password" defaultValue={data?.password} register={register} error={errors?.password} />
            </div>
        </div>   

        {/* PERSONAL INFORMATION  */}
        <div className={`flex flex-col items-start justify-start gap-3  ${errors?.username || errors?.email || errors?.password ? 'mt-6' : 'mt-4'}`}>
          <h3 className="text-md font-semibold text-gray-700">Personal information</h3>

            <div className='flex items-center justify-between gap-3'>
              {/* FIRST NAME */}
              <InputField label="First Name" type='text' name="firstName" defaultValue={data?.firstName} register={register} error={errors?.firstName} />

              {/* LAST NAME */}
              <InputField label="Last Name" type='text' name="lastName" defaultValue={data?.lastName} register={register} error={errors?.lastName} />


              {/* PHONE */}
              <InputField label="Phone" type='phone' name="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />

            </div>
        </div>  
        
        <div className={`flex flex-col items-start justify-start gap-3  ${errors?.firstName || errors?.lastName || errors?.phone ? 'mt-6' : 'mt-4'}`}>
            <div className='flex items-center justify-between gap-3'>
              {/* ADDRESS */}
              <InputField label="Address" type='text' name="address" defaultValue={data?.address} register={register} error={errors?.address} />

              {/* BLOOD TYPE */}
              <InputField label="Blood type" type='text' name="bloodType" defaultValue={data?.bloodType} register={register} error={errors?.bloodType} />

              {/* DATE OF BIRTH */}
              <InputField label="Birthday" type='date' name="birthday" defaultValue={data?.birthday} register={register} error={errors?.birthday} />
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
