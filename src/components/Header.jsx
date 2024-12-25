import React from 'react'
import logo from "../assets/Group-3321.svg"
import hamb from "../assets/menu_mobile_hamb.svg"
import { Link } from "react-router-dom"
import { IoChevronDownOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";

const Header = () => {
    return (
        <>
        {/*Laptop View Header*/}
            <nav  className='fixed top-0  h-24 w-full lg:flex items-center  justify-between text-blue-1 bg-white z-50  hidden'>
                <div className='flex gap-4 ps-3'>
                    <img className='h-16 w-24' src={logo} alt="logo" />
                    <ul className='flex [&>*]:px-2 [&>*]:py-2 '>
                        <li>
                            <button className='custom-btn'>Our Programs<IoChevronDownOutline /></button>
                        </li>
                        <li>
                            <button className='custom-btn'>Advocacy & Change<IoChevronDownOutline /></button>
                        </li>
                        <li className='flex items-center'>
                            <Link className='hover:underline' to="/stories" >Stories</Link>
                        </li>
                        <li>
                            <button className='custom-btn'>About Us<IoChevronDownOutline /></button>
                        </li>
                        <li>
                            <button className='custom-btn'>Ways to Give<IoChevronDownOutline /></button>
                        </li>
                    </ul>
                </div>
                <div className='flex'>
                    <div className='flex items-center gap-3 me-3'>
                        <button className='custom-btn-2 text-white bg-blue-1'>EN</button>
                        <button className='custom-btn-2  bg-white-1 hover:border-blue-1 border-2'>FR</button>
                        <button className='custom-btn-2 flex text-2xl justify-center items-center bg-white-1 hover:bg-blue-1 hover:text-white'><IoSearchSharp /></button>
                    </div>
                    <Link className=' h-24 w-40 flex gap-1 justify-center text-sm items-center font-bold  bg-yellow-1 hover:bg-blue-1 transition-all hover:text-white ' to="/donateNow"><span className='animate-heart'> <IoMdHeart /></span>DONATE NOW</Link>
                </div>
            </nav>
            {/*Smaller Screens Header*/}
            <nav className='h-14 w-full lg:hidden items-center  justify-between text-blue-1  bg-white z-50  flex'>
            <img className='h-12 w-24 ps-3' src={logo} alt="logo" />
            <div className='pt-2' >
                <img src={hamb} alt="" />
                <h2 className='text-[9px] mt-1 text-center'>MENU</h2>
            </div>
            <button className='h-full px-3 bg-yellow-1 text-12 font-bold'>DONATE NOW</button>

       
            </nav>
        </>
    )
}

export default Header