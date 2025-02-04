import React from 'react'
import { Link } from 'react-router-dom';

const AllQuestionForm = ({data}) => {

    //console.log(data)
  return (
   
    <tr>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <div className='flex items-center'>
          <div className='ml-3'>
          <Link to={`/oneQuestion/${data?._id}`} >
            <p className='text-white whitespace-no-wrap px-3 py-2 bg-black'>{data?.title}</p>
            </Link>
          </div>
        </div>
      </td>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <p className='text-white whitespace-no-wrap'>$ {data?.budget}</p>
      </td>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <p className='text-white whitespace-no-wrap'>{data?.subject}</p>
      </td>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <p className='text-white whitespace-no-wrap'>{data?.answer}</p>
      </td>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <p className='text-white whitespace-no-wrap'>{data?.urgent==true? "Urgent" : "Not Urgent" }</p>
      </td>
      <td className={data.urgent? "px-5 py-5 border-b border-gray-200 bg-green-500 text-sm":"px-5 py-5 border-b border-gray-200 bg-red-500 text-sm"}>
        <p className='text-white whitespace-no-wrap'>{data?.ddate}</p>
      </td>
     
    </tr>
   
  )
}

export default AllQuestionForm
