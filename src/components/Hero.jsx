import React from 'react'
import Header from './Header'
import { IoMdHeart } from "react-icons/io";
import animImg from "../assets/animated.svg"
import animSvg from "../assets/animated-2.svg"

const Hero = () => {
  return (
    <>
      <Header></Header>
      <div className=' w-full bg-heroBg bg-no-repeat bg-cover bg-center '>
        <div className=" flex flex-col-reverse md:flex-row size-full justify-between md:gap-11">
          <div className=" md:w-2/4 w-full justify-end flex flex-col gap-10 relative">
           <div className='flex justify-end md:justify-start'>
           <img className=' animate-top custom-anim ' src={animImg} alt="" />
           <img src={animSvg} className='md:size-32 mr-14  size-20 md:ml-32 animate-rotates' alt="" />
           </div>
            <div className=" px-5 md:px-24 py-8 text-3xl md:text-5xl font-semibold relative text-opacity-90 text-blue-1 bg-blue-2 custom-before [&::before]:bg-waves [&::before]:-top-4 text-nowrap">What's new</div>
          </div>
          <div className='animate-left md:w-2/5 w-full  md:pb-10 md:pr-12 p-12 [&>*]:mb-8 relative md:mt-20 '>
            <h1 className='lg:w-96 md:text-6xl text-3xl  font-semibold text-white  '>Together, we Feed Ontario</h1>
            <p className='  font-roboto  text-white leading-7'>Feed Ontario is the province's largest collective of hunger-relief organizations. Together with food banks, industry partners, and local communities, we are relieving hunger in communities now, while driving change through research and advocacy to ensure a future where everyone is food secure. <br /> <br />
              Join us in our fight to end poverty in Ontario.</p>
            <button className='custom-donate-btn'> <span className='animate-heart'> <IoMdHeart /></span>GIVE TODAY</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero