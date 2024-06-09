import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

const CancelPage = () => {
    const Navigate=useNavigate()
    const homefun=()=>{
      Navigate("/")
    }
  return (
    <div className='text-center mt-24'>
        <p className='text-red-600 font-semibold text-center'>Your Process has been Faild!</p>
        <p className='text-orange-400 mb-4 font-semibold text-center'>Try Again!</p>
            <button onClick={homefun} className='px-2 rounded-sm bg-blue-500 text-white'>Home</button>
    </div>
  )
}

export default CancelPage