import React from 'react'
import bggymer from './assets/dumbbell_8.jpg'
import '../Stylesheet/Slider.css'
const Slider = () => {
  return (
    <div>


   
    <section class=" grid  grid-cols-2 gap-4  items-center px-[5rem]" >
        <div class="text-center lg:text-start">
            <h1 class="font">A COMPLETE<br></br>INVESTMENT<br></br>PLATFORM</h1>
            <p class="text-white py-2">We have considered our solutions to support every stage of your<br></br>
                growth and get the potential service.</p>
            <button className='bg-gray-400 p-2 px-3 text-white drop-shadow-xl'>MAKE
                INVESTMENT</button>
        </div>

        <img src={bggymer} alt="Money Image" className='w-[]' /> 
    </section>

    </div>
  )
}

export default Slider