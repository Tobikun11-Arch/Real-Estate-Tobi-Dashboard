import React, { useState } from 'react'
import ConsultationLogo from './ConsultationLogo'
import { Input, Button } from '../common'
import { useUserData } from '@/app/store/userData';
import { EyeOff, Eye } from 'lucide-react'
import { Select } from '../common/index'
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
    const inputClassName = 'w-full border rounded-md h-9 border-gray-900 outline-none pl-2 text-black text-xs font-medium'
    const { Fullname, setFullname, Country, setCountry, Email, setEmail, Password, setPassword } = useUserData()
    const [ isVisible, setVisible ] = useState<boolean>(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
    }

    const togglePasswordVisibility = () => {
        setVisible((prevState: boolean) => !prevState);
    };

    return (
        <div className='flex mt-7 md:pl-10 justify-center'>
            <div className='hidden md:block md:w-full lg:ml-16'>
                <ConsultationLogo/>
            </div>

            <div className='sm:w-[350px] md:w-[450px] lg:w-[500px] lg:mr-24 md:mr-16 xl:mr-48 md:pt-0 w-full'>
                <h1 className='text-gray-800 font-semibold mt-8 text-2xl'>Create your Free Account</h1>
                <h6 className='text-xs text-gray-500 font-semibold'>Submit your data for register</h6>

                <form onSubmit={handleSubmit} className='text-gray-400 mt-8'>
                    <label className='text-sm font-medium'>Full Name</label>
                    <Input className={`${inputClassName} mb-3`} placeholder='Input Full Name'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setFullname(e.target.value)} value={Fullname}/>

                    <label className='text-sm font-medium'>Country</label>
                    <Select
                        className="text-black border border-gray-900 rounded-lg h-9 w-full mb-2 text-sm bg-white p-2"
                        name="Philippines"
                        options={[
                            { value: 'out-of-stock', label: 'Select country' },
                            { value: 'date-added', label: 'use api for countries' }
                        ]}
                    />

                    <label className='text-sm font-medium'>Email</label>
                    <Input className={`${inputClassName} mb-3`} placeholder='Input Email'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setEmail(e.target.value)} value={Email}/>  
                    <label className='text-sm font-medium'>Password</label>
                    <div className="relative w-full">
                        <Input type={isVisible ? 'text' : 'password'} className={`${inputClassName} pr-8`} placeholder='Input Dashboard-Password'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)} value={Password}/>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                            <button type="button" onClick={togglePasswordVisibility}>
                                {isVisible ? <Eye size={18} color='gray' /> : <EyeOff size={18} color='gray'/>}
                            </button>
                        </div>     
                    </div> 

                    <div className="flex justify-between items-center mt-1">
                        <div className="flex gap-2 items-center">
                            <Input type="checkbox" defaultChecked className="checkbox border w-4 h-4 border-gray-400 rounded-none [--chkbg:theme(colors.indigo.600)] [--chkfg:white]"></Input>
                            <p className='text-xs text-gray-400 font-medium'>I agree to Sewo Security and Privacy Policy</p>
                        </div>
                    </div>

                    <Button className='bg-blue-600 font-bold w-full mt-5 text-white text-sm py-2 rounded-md'>Search</Button>
                    <h6 className='text-xs text-gray-500 font-medium w-full flex justify-center mt-16'>Already have an account?<span className='text-blue-800 pl-1' onClick={()=> router.push('/')}>Login</span></h6>
                </form>
            </div>
        </div>
    )
}

export default SignUpForm
