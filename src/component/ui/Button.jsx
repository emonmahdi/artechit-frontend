import React from 'react'

const Button = ({children}) => {
  return (
    <> 
    <div className='flex gap-4'>
    <button className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#ED2024] text-white shadow-2xl transition-all rounded-lg cursor-pointer before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#2E50A0] before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
    <span className="relative z-10">{children}</span>
  </button>
    </div>
  </>
  )
}

export default Button