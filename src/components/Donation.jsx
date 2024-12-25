import React from 'react'
import { IoMdHeart } from "react-icons/io";

const Donation = () => {
    return (
        <>
            <div  className='h-[89vh] w-full bg-donateBg bg-cover bg-center '>
                <div className='w-full h-full flex justify-center items-center '>
                    <div className='animate-fadein text-white text-center flex flex-col justify-center items-center gap-10'>
                        <h1 className='lg:text-5xl text-3xl lg:w-2/3 font-semibold '>We've got a seat waiting for you!
                        </h1>
                        <p className='lg:text-p-18 font-roboto '>Will you join us at the table to help Feed Ontario?</p>
                        <button className='custom-donate-btn'><span className='animate-heart'> <IoMdHeart /></span>DONATE NOW</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Donation