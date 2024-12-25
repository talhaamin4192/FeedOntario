import React from 'react'
import Story from "../assets/Screenshot-2024-12-16-115802-400x400.webp"
import News_img from "../assets/news-img.jpg"
const Latest = () => {
    return (
        <>
            <div className='w-full md:py-24 md:px-20 p-8 bg-white-1 '>
                <h1 className='md:text-5xl text-3xl font-semibold text-blue-1 lg:w-1/3'>The latest from our table</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2  py-14 gap-16'>
                    <div className='rounded-md group  custom-hover' >
                        <div className='relative overflow-hidden '>
                            <img className="custom-img  " src={Story} alt="" />
                            <button className='absolute bottom-4 left-6 custom-btn-3'>Story</button>
                        </div>
                        <div className='pt-8 pb-4 px-3'>
                            <p className='custom-p'>
                                Ontario food banks can’t keep up with record-breaking need for their services
                            </p>
                            <h6 className='opacity-60 py-3'>December 17, 2024</h6>
                        </div>

                    </div>
                    <div className='rounded-md group custom-hover' >
                        <div className='relative overflow-hidden '>
                            <img className="custom-img " src={News_img} alt="" />
                            <button className='absolute bottom-4 left-6 custom-btn-3'>Research</button>
                        </div>
                        <div className='pt-8 pb-4 px-3 '>
                            <p className='custom-p'>
                                Hunger Report 2024: Unravelling at the Seams
                            </p>
                            <h6 className='opacity-60 py-3'>December 02, 2024</h6>
                        </div>
                    </div>
                    <div className='rounded-md group custom-hover' >
                        <div className='relative overflow-hidden '>
                            <img className="custom-img " src={News_img} alt="" />
                            <button className='absolute bottom-4 left-6 custom-btn-3'>News</button>
                        </div>
                        <div className='pt-8 pb-4 px-3'>
                            <p className='custom-p'>
                                Food banks are cutting services as surging demand outpaces resources
                            </p>
                            <h6 className='opacity-60 py-3'>December 02, 2024</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Latest