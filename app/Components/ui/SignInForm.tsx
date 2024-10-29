import React from 'react'
import { Input, Button } from '../common/index'
import SocialLoginButtons from './SocialLognButton';

const SignInForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit")
    };
    const inputClassName = 'w-full border rounded-md h-9 border-gray-900 outline-none pl-2 text-black text-xs font-medium';

    return (
        <div>
            <h1 className='text-gray-800 font-semibold mt-8'>Welcome back to Sewo!</h1>
            <p className='text-gray-400 text-xs font-bold mt-1'>Sign in your account</p>

            <form onSubmit={handleSubmit} className='text-gray-400 mt-8'>
                <label className='text-sm font-medium'>Email</label>
                <Input className={`${inputClassName} mb-3`} />

                <label className='text-sm font-medium'>Password</label>
                <Input className={inputClassName}/>

                <div className="flex justify-between items-center mt-3">
                    <div className="flex gap-1 items-center">
                        <Input type="checkbox" defaultChecked className="checkbox border w-4 h-4 border-gray-400 rounded-none [--chkbg:theme(colors.indigo.600)] [--chkfg:white]"></Input>
                        <p className='text-xs text-gray-900 font-medium'>Remember me</p>
                    </div>
                    <p className='text-gray-400 text-xs font-semibold'>Forgot Password?</p>
                </div>
                <Button type='submit' className='w-full bg-purple-800 py-2 rounded-md text-white text-sm font-bold mt-5'>Login</Button>
                <div className="flex items-center mt-12">
                    <hr className="flex-grow border-gray-500" />
                    <span className="px-2 text-gray-600 text-xs">Login with</span>
                    <hr className="flex-grow border-gray-500" />
                </div>
                <SocialLoginButtons/>
                <h6 className='text-xs text-gray-500 font-medium w-full flex justify-center mt-16'>Don't have any account?<span className='text-blue-800 pl-1'>Register</span></h6>
            </form>
        </div>
    )
}

export default SignInForm
