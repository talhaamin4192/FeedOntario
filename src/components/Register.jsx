import React from 'react'
import { IoMdHeart } from "react-icons/io";
import squiggle from "../assets/squiggle_yellow.svg"
import icon_bread from "../assets/icon_bread.svg"
import icon_broccoli from "../assets/icon_broccoli.svg"
import icon_fork from "../assets/icon_fork.svg"
import icon_hearts from "../assets/icon_hearts.svg"
const Register = () => {
    return (
        <>
            <div className= ' flex flex-col md:flex-row bg-blue-1 py-6 px-4  w-full xl:py-20 xl:px-24 lg:py-16 lg:px-14 md:py-10 md:px-4 justify-between  '>
                <div className=' animate-Right [&>*]:mb-8 lg:pr-16 md:pr-6'>
                    <h1 className='lg:text-5xl text-3xl font-semibold text-white '>You can help end hunger</h1>
                    <p className='font-roboto lg:text-p-18 lg:pr-20  text-white lg:leading-8'>Feed Ontario makes it easy to strengthen our provincial food system. With your support, we help food banks become more effective and help them reach the people who need them the most. <br /> <br />
                    By taking action for Feed Ontario, you can apply pressure to ensure the government prioritizes making access to nutritious food a right for all Ontarians.
                    </p>
                    <button className='px-6 py-4 flex items-center gap-3 bg-yellow-1 rounded-md font-bold text-blue-1 hover:scale-110 hover:text-white hover:bg-blue-1 transition-all duration-500 border-2 border-yellow-1 hover:border-white'> <span className='animate-heart'> <IoMdHeart /></span>GIVE TODAY</button>
                </div>
                <div className=' animate-left bg-blue-dark xl:w-5/6 md:w-11/12 w-full py-16  pl-10 md:pl-16 pr-24 relative custom-before custom-after [&::before]:bg-waves_top [&::before]:-top-4  [&::after]:right-0 [&::after]:-bottom-full [&::after]:bg-waves_bottom   text-white '>
                    <h2 className='font-bold text-xl md:py-4'>GET STARTED</h2>
                    <div>
                        <div className='custom-div '>
                            <img src={icon_bread} alt="" />
                            <p className='custom-underline '>Find a food bank near you</p>
                            <span className='custom-squiggle'>
                            <img src={squiggle} alt="" />
                            </span>
                        </div>
                        <div className='custom-div'>
                            <img src={icon_hearts} alt="" />
                            <p className='custom-underline '>Start a fundraiser</p>
                            <span className='custom-squiggle'>
                            <img src={squiggle} alt="" />
                            </span>
                        </div>
                        <div className='custom-div'>
                            <img src={icon_fork} alt="" />
                            <p className='custom-underline '>Take action to end hunger</p>
                            <span className='custom-squiggle'>
                            <img src={squiggle} alt="" />
                            </span>
                        </div>
                        <div className='custom-div'>
                            <img src={icon_broccoli} alt="" />
                            <p className='custom-underline '>Join us as a corporate partner</p>
                            <span className='custom-squiggle'>
                            <img src={squiggle} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default Register