import React from 'react'

const Education = () => {
  return (
    <div id='Education' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>
        Education
      </h1>

      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className="flex">
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>International Baccalaureate</h3>
            <p className='font-light text-lg text-gray-600'>2019 - 2020</p>
            <p className='text-sm text-gray-600'>International Baccalaureate in Physical Sciences (French), Grade: 'Good'</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Specialized Technician Diploma</h3>
            <p className='font-light text-lg text-gray-600'>2021 - 2023</p>
            <p className='text-sm text-gray-600'>Specialized Technician Diploma in Digital Development, Specialization: Web Full Stack (ISGI)</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>University Professional License</h3>
            <p className='font-light text-lg text-gray-600'>2023 - 2024</p>
            <p className='text-sm text-gray-600'>University Professional License in Software Development and Systems Security (ENSAM)</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-teal-500'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education