import React, { useState } from 'react'
import VirtualTour from '../VirtualTour'
import { Input, Button } from '../../common'

const ForgotPassword = () => {
    const [ Email, setEmail ] = useState<string>('')

    return (
        <div className='flex mt-48 sm:mt-0 sm:items-center md:pl-10 justify-center'>
            <div className='hidden md:block md:w-full lg:ml-16'>
                <VirtualTour/>
            </div>
            <div className='sm:w-[350px] md:w-[450px] lg:w-[500px] lg:mr-24 md:mr-16 xl:mr-48 md:pt-0 w-full'>
                <div className=" p-6 w-80 mx-auto rounded-md shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
                    <h1 className='text-2xl text-black font-bold'>Forgot Password</h1>
                    <h6 className='text-xs mb-10 text-gray-500'>Enter your email account to reset your password</h6>

                    <label className='text-sm font-medium'>Email</label>
                    <Input className={`w-full border rounded-md h-9 border-gray-900 outline-none pl-2 text-black text-xs font-medium mb-3`} placeholder='Input Email'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} value={Email}/> 
                    <Button className='bg-blue-600 font-bold w-full mt-1 text-white text-sm py-2 rounded-md'>Reset Password</Button>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
