import React from 'react'
import squiggle from "../assets/squiggle_yellow.svg"
const Motive = () => {
    return (
        <>
            <div>
                <div className="container text-center md:px-5 py-8 [&>*]:py-4 text-blue-1">
                    <h2 className='font-roboto text-xl '>WHAT WE DO</h2>
                    <h1 className='text-3xl md:text-5xl font-semibold '>How We Feed <br /> Ontario</h1>
                    <div className='flex justify-center'>
                    <img src={squiggle} alt="" />

                    </div>
                    <p className='font-roboto md:text-p-18 md:leading-relaxed md:px-20'>Feed Ontario represents a network of more than 1,200 food banks and hunger-relief organizations across Ontario. Through our network, we deliver millions of pounds of food across Ontario, serving more than 1 million people each year. While we work to strengthen and grow the capacity of the provincial food bank network, to realize our vision of an Ontario where everyone is food secure, Feed Ontario continues to advocate for evidence-based programs and solutions to make ending hunger and poverty a priority in our province.</p>
                    <p className='font-roboto md:text-p-18'>Learn more about our pillars:</p>
                    <div className=' flex md:flex-row flex-col justify-center md:gap-10 px-4'>
                        <button className='px-4 py-3 text-sm font-bold rounded-md bg-blue-2'>FEEDON</button>
                        <button className='px-4 py-3 text-sm font-bold rounded-md border-1 border-blue-2'>FEED CHANGE</button>
                        <button className='px-4 py-3 text-sm font-bold rounded-md border-1 border-blue-2'>FEED POSSIBILITY</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Motive