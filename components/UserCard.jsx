import Image from "next/image"


const UserCard = ({type, number}) => {
  const currentYear = new Date().getFullYear()

  return (
    <div className='rounded-2xl odd:bg-thirty even:bg-ten p-4 flex-1 min-w-[130px]'> 
      <div className='text-white flex items-center justify-between'>
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-black"> {currentYear}/{currentYear + 1} </span>
        <Image src="/more.png" alt="more-icon" width={20} quality={100} height={20} className="cursor-pointer"/>
      </div>

      <h1 className="text-white text-2xl font-semibold my-4">{number} </h1>
      <h2 className="capitalize text-sm font-medium text-gray-100"> {type} </h2>
    </div>
  )
}

export default UserCard

