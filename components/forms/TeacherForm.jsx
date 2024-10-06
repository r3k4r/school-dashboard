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
    address : z.string({message: 'Address is required!'}),
    birthday : z.date({message: 'Last name is required!'}),
    gender : z.enum(["male", "female"], {message : 'Gender is required!'}),
    img : z.instanceof(File, {message : 'Image is required!'})
})

const TeacherForm = ({type, data}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver : zodResolver(schema)
      });

  return (
    <form className=''>TeacherForm</form>
  )
}

export default TeacherForm