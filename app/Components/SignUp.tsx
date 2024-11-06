"use client"
import React, { useEffect, useState } from 'react'
import NavBar from './ui/NavBar'
import SignUpForm from './ui/SignUpForm'

const SignUp = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 905);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {isVisible && (
                <div className="md:w-1/2 h-full bg-gray-700 opacity-5 fixed top-0 left-0 z-10"></div>
            )}
            <div className='h-screen bg-white cursor-default px-7 '>
                <NavBar/>
                <SignUpForm/>
            </div>
        </>
    )
}

export default SignUp