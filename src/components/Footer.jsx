import Link from 'next/link'
import React from 'react'
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='sb_footer section_padding p-[4rem] bg-[#f0f1f3] flex flex-col items-center mt-[100px]'>
                <div className='sb_footer-links'>
                    <div className='sb_footer-links-div ml-[200px]'>
                        <div className='Customercare'>
                            <h4 > CUSTOMER CARE </h4>
                            <div>
                                <a>
                                    <p> FAQ</p>
                                </a>
                                <a>
                                    <p>Contact Us</p>
                                </a>
                                <a>
                                    <p>Return Policy</p>
                                </a>
                                <a>
                                    <p>Shipping Rates</p>
                                </a>
                                <a>
                                    <p>GDPR Compliance</p>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className='sb_footer-links-div'>
                        <h4> SIGN UP AND SAVE </h4>
                        <p>Subscribe to find out the latest work, release dates and more. No junk emails, we promise!</p>
                        <input className='border p-2 mt-[5px]' placeholder='Enter your email' />
                    </div>

                    <div className='sb_footer-links-div'>
                        <h4 id='logo'> sus|मा </h4>
                        <div className='socialMedia'>
                            <p><FaInstagram size={30} /> </p>
                            <p><FaInstagram size={30} /> </p>
                            <p><FaInstagram size={30} /> </p>
                            <p><FaInstagram size={30} /> </p>
                        </div>
                    </div>
                </div>
                <hr className='hr1'></hr>

                <div className='sb_footer-below'>
                    <div className='sb_footer-copyright text-[13px] leading-[15px] font-[600]'>
                        <p>
                            @{new Date().getFullYear()} Sudan Rai. All rights reserved.
                        </p>
                    </div>
                    <div className='sb_footer-below-links'>
                        <a><div><p>Terms & Conditions</p></div></a>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer