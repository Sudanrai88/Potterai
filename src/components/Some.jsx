import React from 'react'
import Image from 'next/image';
import Link from 'next/link';




const Some = () => {
    return (
    <div className='max-w-[1140px] mx-[50px] sm:mx-[100px] xl:mx-auto my-[100px]'>
            <div className='md:flex items-center'>
            <div className='md:w-[50%]'>
                    <Image src='https://i.imgur.com/hINwUg3.jpg' alt='//////' className='' width={700} height={700}/>  
                </div>
                <div className='align-middle md:w-[50%] px-[10px] xl:pl-[80px] py-[10px] xl:py-[40px] xl:ml-[50px] border'>
                <div className='text-gray-800'>
                    <h1 className='tracking-[0.5em] text-xl'> Local Pottery </h1>
                    <h2 className='tracking-[0.1em] font-bold text-4xl mb-8'> Potterai </h2>
                    <p className='tracking-[0.03em] leading-7 text-l mb-8'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis, mi sit amet sagittis luctus, lectus nisi commodo enim, a tincidunt magna turpis a massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
                    <Link href='/about' className='bg-gray-800/90 text-white border p-2 tracking-[0.03em] leading-7 text-l'> Click here for more </Link>
                </div>
                    
                </div>       
            </div>             
        </div>   
    )
}

export default Some;