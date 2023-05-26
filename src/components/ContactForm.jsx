import React from 'react'
import Image from 'next/image';


function ContactForm() {
    return (
        <div id='homeee' className='flex items-start justify-center h-[110vh] bg-fixed bg-center bg-cover ' style={{ 'background-image': `url(${"/assets/IMG_5948.JPG"})` }}>
            <div className='flex flex-col w-[610px] text-white tracking-[0.05em]'>
                <div className='Top z-[1]'>
                    <div className=' text-center mb-[30px]'>
                        <div className='mb-[40px] mt-[200px]'>
                            <h2 className='text-4xl sm:text-5xl font-bold '>Contact Us</h2>
                        </div>
                        <div>
                            <p className='py-2 text-base'> Please get in touch if you have any enquiries!  </p>
                        </div>
                        <div>
                            <p className='py-2 text-base '> Just fill in the contact form below and we will get back to your email asap. </p>
                        </div>
                    </div>

                    <form className='Forms z-[1] mt-4' >
                    <div className='flex flex-col items-center font-bold mb-[30px]'>
                            <div className='w-[90%] sm:w-[100%]'>
                                <h1 className=''> Contact Form</h1>
                            </div>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center mb-[30px]'>
                            <div className='w-[90%] sm:w-[50%] '>
                                <h1 className='mb-[10px] text-[12px]'> NAME </h1>
                                <input className=' w-[100%] sm:w-[97%] p-[6px] border-[1px] border-solid border-[#d1d0d0] bg-white/20' />
                            </div>
                            <div className='w-[90%] sm:w-[50%] '>
                                <h1 className='mb-[10px] text-[12px]'> EMAIL </h1>
                                <input className=' w-[100%] sm:w-[100%] p-[6px] border-[1px] border-solid border-[#d1d0d0] bg-white/20' />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center mb-[20px]'>
                            <div className='w-[90%] sm:w-[100%]'>
                                <h1 className='mb-[10px] text-[12px]'> MESSAGE </h1>
                                <textarea rows="6" className=' p-[6px] w-[100%] sm:w-[100%] border-[1px] border-solid border-[#d1d0d0] bg-white/20' />
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row items-center'>
                            <div className='w-[90%] sm:w-[100%]'>
                            <button className='px-[24px] py-[6px] border' > Send </button>
                                
                            </div>
                        </div>
                    </form>
                </div>

                <div className='Overlay'>
                    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/50 h-[110vh]' />
                </div>
            </div>

        </div>
    )
}

export default ContactForm