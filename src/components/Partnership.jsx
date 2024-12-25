import React from 'react'
import squiggle from "../assets/squiggle_yellow.svg"
const Partnership = () => {
    return (
        <>
            <div className='flex justify-center items-center px-4 py-7 xl:py-40 xl:px-36 lg:py-20 lg:px-28 md:py-16 md:px-12 w-full  '>
                <div className='bg-white-1 flex md:flex-row flex-col p-6 lg:py-10 md:py-5 rounded-md'>
                    <div className='flex md:justify-center md:items-center  lg:pl-20  md:pl-16'>
                        <div >
                            <iframe className='lg:h-[300px] lg:w-[300px] xl:w-[388px] xl:h-[288px] h-[150px] w-[250px]' src="https://www.youtube.com/embed/XZrckLYqdys?si=N7IFNf0YUVPqaVUr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div className='xl:px-24 xl:py-14 lg:px-24 p-4 md:px-6 md:py-8 lg:py-4 '>
                        <h2 className='font-bold text-3xl font-roboto  '>FeedON</h2>
                        <img className='py-6' src={squiggle} alt="" />
                        <p className='font-bold'>We are distributing food to food banks across Ontario.</p>
                        <p className='py-6 font-roboto '>Feed Ontario's food programs work in partnership with Ontario's agricultural, food, and grocery sectors to ensure food banks are stocked with the fresh, healthy food they need to support their communities. Last year, we distributed over 10 million pounds of food to help 1,200 hunger-relief organizations provide food to more than 1 million Ontarians.</p>
                        <button className='px-7 py-4 bg-blue-2 text-sm font-bold text-blue-1 rounded-md hover:bg-blue-3 hover:scale-110 '>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partnership