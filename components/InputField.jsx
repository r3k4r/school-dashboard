



const InputField = ({label, type, register, name, defaultValue, error}) => {
  return (
    <div className='flex flex-col items-start justify-start relative'>
        <label className={` text-gray-600 text-sm left-3 px-1 select-none top-[11.5px] bg-transparent`} htmlFor="username">{label}</label>
        <input defaultValue={defaultValue}  id="username" type={type} className={`text-xs md:text-md w-[180px] md:w-auto bg-white border-2 border-gray-300 p-2 rounded-lg  ${error?.message && 'border-red-600'} `} {...register(name)} />
        {error?.message && <span className="absolute top-16 left-0 text-xs text-red-600 font-medium">{error?.message.toString()}</span>}
    </div>
  )
}

export default InputField