import Button from '@/components/atoms/Button'
import Container from '@/components/layout/Container'
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import Image from 'next/image'
import React from 'react'

const PICAboutpage = () => {
    return (
        <div className='pt-[120px] md:px-[200px]'>
            <Container>
                <p className='text-[#FF7043] font-bold text-5xl text-center mb-5'>Facutly In-Chagre</p>
                <div className="flex md:mx-10 mx-4 flex-col md:flex-row gap-6 items-center my-16">
                    <div className="max-w-[400px] md:w-1/2">
                        <Image
                            src="/images/pic.png"
                            alt="About ICCHE"
                            width={500}
                            height={300}
                            className="rounded-xl md:h-[450px] w-[400px] shadow-md"
                        />
                    </div>
                   <div className="max-w-[400px] md:w-1/2">
                        <p className="text-3xl font-semibold mb-2">Dr. Vineeta Srivastava</p>
                        <hr className='text-gray-400 mb-5' />
                        <p className="text-gray-700 ">
                            <strong className='md:text-lg'>Email: </strong>vineeta@hss.iiests.ac.in
                        </p>
                        <p className="text-gray-700 ">
                            <strong className='md:text-lg'>Department: </strong> Humanities and Social Science
                        </p>
                        <p className="text-gray-700">
                            <strong className='md:text-lg'>Bio: </strong> Assistant Professor at IIEST Shibpur, teaching Economics to both UG and PG students
                        </p>
                        <ul className='flex mt-3 md:text-xl gap-5'>
                            <li>
                                <a href="https://www.instagram.com/icche.iiests/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="hover:text-pink-500 transition-colors duration-200" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/icche-iiest/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="hover:text-blue-600 transition-colors duration-200" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/icchesistac" target="_blank" rel="noopener noreferrer">
                                    <FaSquareFacebook className="hover:text-blue-500 transition-colors duration-200" />
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default PICAboutpage
