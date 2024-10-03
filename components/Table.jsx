


const Table = ({columns, renderRow, data}) => {
// console.log({
//     columns,
//     renderRow,
//     data
// })

    return (
     <table className='w-full mt-4'>
        <thead>
            <tr className='text-left text-gray-500 text-sm'>
                {columns.map((col)=>{
                    return(
                        <th key={col.accessor} className={col.className}>{col.header}</th>
                    )
                })}
            </tr>    
        </thead>
        <tbody className="">
            {data.map((item)=>{
                return(
                    renderRow(item)
                )
            }
            )}
        </tbody>
     </table>   
    )
  }
  
  export default Table