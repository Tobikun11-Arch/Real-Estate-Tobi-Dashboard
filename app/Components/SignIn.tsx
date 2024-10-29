"use client"
import React from 'react'
import NavBar from './ui/NavBar'
import SignInForm from './ui/SignInForm'

const SignIn = () => {
    return (
        <div className='h-screen bg-white cursor-default px-7'>
            <NavBar/>
            <SignInForm/>
        </div>
    )
}

export default SignIn