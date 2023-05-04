import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='bg-gray-100'>
            <div className='max-w-[1300px] m-auto p-[40px]'>

                <div className='grid grid-cols-4'>
                    <div className='col1'>
                        <div>
                            <Link href='/'>
                                Sus.Ceramics
                            </Link>
                        </div>
                    </div>
                    <div className='col2'>
                        <p>
                            Customer Care
                        </p>
                        <ul>
                            <li>
                            
                            </li>
                            <li>Contact Us</li>
                            <li>Return Policy</li>
                            <li>Shipping Rates</li>
                            <li>Covid-19 Update</li>
                        </ul>
                    </div>
                    <div className='col3'>
                        Sign up for more!
                    </div>
                    <div className='col4'>
                        @2023 Sus.ceramics
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer