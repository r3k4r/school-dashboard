

const Pagination = () => {
  return (
    <div className='p-4 flex items-center justify-between text-gray-500 mt-4'>
        <button className='py-2 px-4 rounded-md text-xs font-semibold bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed'>
            Prev
        </button>  

        <div className='flex items-center justify-cnter gap-2 text-sm'>
            <button className='px-2 rounded-sm bg-sky-200'>1</button>
            <button className='px-2 rounded-sm'>2</button>
            <button className='px-2 rounded-sm'>3</button>
            ...
            <button className='px-2 rounded-sm'>10</button>
        </div>

        <button className='py-2 px-4 rounded-md text-xs font-semibold bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed'>
            Next
        </button>        
    </div>
  )
}

export default Pagination