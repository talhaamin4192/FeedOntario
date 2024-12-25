import React from 'react'
import report from "../assets/HR24_Cover-1-400x400.jpg"
import { Link } from "react-router-dom"
import squiggle from "../assets/squiggle_yellow.svg"
const Report = () => {
    return (
        <>
            <div className='grid md:grid-cols-2 w-full  bg-white-1 text-blue-1'>
                <div className='bg-blue-2 flex gap-8 flex-col justify-center  object-cover px-16  '>
                    <div>
                        <img  className='rounded-md w-full ' src={report} alt="" />
                    </div>
                    <div className='flex items-start py-5'>
                        <p className='hover:underline  font-roboto '>The affordability crisis is forcing more people to turn to food banks for help, and food banks do not have the resources to adequately meet the level of need in Ontario.
                        </p>
                        <div className=' mt-3 custom-squiggle'>
                          <img className='w-20' src={squiggle} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className='lg:p-24 md:p-12 p-6 text-22 md:text-2xl font-roboto  '>
                    <p className='lg:leading-9'>Earlier this year, Feed Ontario revealed that more than 1 million Ontarians had to turn to a food bank. The
                        <Link to="/" className='text-blue-2 hover:underline mx-1 ' >2024 Hunger Report</Link> explores the drivers of this record high demand, why how we measure poverty needs to change, and dispels common misconceptions about food bank use.</p>
                    <br />
                    <p className='lg:leading-9'>Food banks in every corner of Ontario are experiencing double digit increases as fewer people are able to donate, resulting in food banks cutting services as the demand outpaces the resources available.</p >
                    <button className='px-7 py-4 bg-blue-2 text-sm font-semibold rounded-md hover:bg-blue-3 hover:scale-110 mt-16'>READ THE REPORT</button>
                </div>
            </div>
        </>
    )
}

export default Report