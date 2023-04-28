import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';


function Navbar() {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textcolor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setColor('white')
                setTextColor('black')
            } else {
                setColor('transparent')
                setTextColor('white')
            }
        } 
        window.addEventListener('scroll', changeColor)
    }, [])

//Change anchor tags to Link as the whole point of next is to have single page aplpications, meaning that the entirity of the website/application is loaded first. Therefore no wait times.

//This means no smooth scrolling however move 'Gallery' Link to the images of the about page where we can implement the slider into the about section. We can implement that slider function (Library) in the MODAL of the about section. 

  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
            <a href='/'>
                <h1 style={{color: `${textcolor}`}}className='font-bold text-4xl ml-4' >Cera'</h1>
            </a>
            <ul style={{color: `${textcolor}`}} className='hidden sm:flex font-bold'>
                <li className='p-4'>
                    <a href='/#homeee'>
                <h1>Home</h1>
            </a>
            </li>
                <li className='p-4'>
                    <a href='/#gallery'>
                <h1>Gallery</h1>
            </a>
            </li>
                <li className='p-4'>
                    <a href='/about'>
                <h1>About</h1>
            </a>
            </li>
                <li className='p-4'>
                    <a href='/contact'>
                <h1>Contact</h1>
            </a>
            </li>
            </ul>

            {/*Mobile Buttons*/}
            <div onClick={handleNav} className='block sm:hidden z-10'> 
                {nav ? <AiOutlineClose className='mr-2' size={20} /> : <AiOutlineMenu id='menuIcon' size={20} style={{color: `${textcolor}`}}/>}
            </div>
            {/*Moblie Menu*/}
            <div className= {`absolute top-0 ${nav?'left-0 transform-gpu scale-95': 'left-[-100%]'}
             right-0 bottom-0 flex justify-center items-center w-full h-screen sm:hidden  text-center ease-in duration-300 bg-black/90 `}>
                <ul >
                <li className = 'p-4 text-4xl hover:text-red-200'>
                        <a href='/#homeee'>
                    <h1>Home</h1>
                </a>
                </li>
                    <li className = 'p-4 text-4xl hover:text-red-200'>
                        <a href='/#gallery'>
                    <h1>Gallery</h1>
                </a>
                </li>
                <li className = 'p-4 text-4xl hover:text-gray-200'>
                        <Link href='/about'>
                    <h1>About</h1>
                </Link>
                </li>
                <li className = 'p-4 text-4xl hover:text-red-200'>
                        <Link href='/contact'>
                    <h1>Contact</h1>
                </Link>
                </li>
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Navbar;