import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeart } from "react-icons/io";
import foImg from "../assets/fo_footer_logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Footer = () => {
    
    const scrolltoTop=()=>{
        
        window.scrollTo(
            {
                top:0,
                behavior:"smooth",
            }
        )
    }
    
    return (
        <>
            <div className='flex md:flex-row flex-col-reverse  w-full '>
                <div className='bg-white-1 md:w-1/2 md:pl-16 pl-8 md:pt-24 text-blue-1 font-semibold '>
                    <div className='grid grid-rows-3 grid-cols-2'>
                        <div className=''>
                            <h2 className='font-bold py-8 tracking-wide'>TAKE ACTION</h2>
                            <ul className='[&>*]:text-sm '>
                                <li className='hover:underline'><Link>Become a Partner</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Start a Fundraiser</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Support a Campaign</Link></li>
                                <br />
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold py-8 tracking-wide'>CONNECT</h2>
                            <ul className='[&>*]:text-sm'>
                                <li className='hover:underline' ><Link>Contact Us</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>416-656-4100</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Find a Food Bank</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Members Warehouse</Link></li>
                                <br />
                            </ul>
                        </div>
                        <div>
                            <h2 className='font-bold py-8 tracking-wide'>THE LATEST</h2>
                            <ul className='[&>*]:text-sm'>
                                <li className='hover:underline' ><Link>News</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Stories</Link></li>
                                <br />
                                <li className='hover:underline' ><Link>Privacy Policy</Link></li>
                                <br />
                            </ul>
                        </div>
                        <div className='pt-10'>
                            <button className='custom-donate-btn md:text-nowrap'><span className='animate-heart'> <IoMdHeart /></span>DONATE NOW</button>
                        </div>
                        <div>
                            <p className='text-sm'>
                                Copyright © <br />
                                Feed Ontario 2021
                            </p>
                        </div>
                        <div>
                            <p className='text-sm'>Charitable No. <br />
                                885260968RR0001</p>
                        </div>
                    </div>
                </div>
                <div className='bg-blue-2 md:w-1/2 text-blue-1 '>
                    <div className=" px-14 pt-8 text-5xl font-semibold relative  bg-blue-2 custom-before [&::before]:bg-waves [&::before]:-top-4 -top-14"><img src={foImg} alt="" /></div>
                    <div className='px-14  '>
                        <h1 className='text-p-40 font-semibold tracking-wide mb-5'>Get the dish</h1>
                        <p className='font-roboto lg:max-w-96 text-p-18'>Your support makes a difference. Get stories of impact delivered to your inbox.</p>
                        <form action="" className='py-5'>
                            <input placeholder='E-mail address' className='custom-placeholder' type="email" required />
                            <br />
                            <input placeholder='First Name' className='custom-placeholder' type="text" />
                            <br />
                            <input placeholder='Last Name' className='custom-placeholder' type="text" />
                            <br />
                            <button className='px-4 py-3 bg-blue-1 text-white rounded-md font-semibold ' >SIGN ME UP</button>
                        </form>
                        <div className='flex gap-5 text-4xl py-4'>
                            <FaFacebook />
                            <FaXTwitter />
                            <IoLogoInstagram />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
                <button onClick={scrolltoTop} className=' p-4  right-4 bottom-4 bg-blue-1 bg-opacity-35 fixed text-white rounded-md'><FaChevronUp /></button>
            </div>
        </>
    )
}

export default Footer