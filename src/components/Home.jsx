import React from 'react'
import image from '../../public/image.jpg'


const Home = () => {
  return (
    <div id='Home' className='flex min-h-screen w-full items-center justify-center'>

      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        
        <img src={image} alt="" className='w-[250px] sm:w-[300px] rounded-full'/>
        
        <div className="space-y-1 sm:space-y-3">
          <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl lg:text-6xl">
            Mohamed Bounjimi
          </h1>
          <h3 className='bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl'>
            Full Stack Developer
          </h3>
          <p className='max-w-[500px] text-sm text-gray-500'>
          I am a Full Stack Developer with solid experience in web programming and a strong understanding of web technologies and frameworks. Additionally, I have a basic knowledge of project management.
          </p>
        </div>


      </div>

    </div>
  )
}

export default Home