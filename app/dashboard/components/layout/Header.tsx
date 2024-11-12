"use client"
import React from 'react'
import { Bell, Menu } from 'lucide-react';
import Image from 'next/image';
import { useToggle } from '@/app/store/Toggle';
import Sidebar from './Sidebar';

const Header = () => {
    const { setToggle, isCart, isToggle, setCart } = useToggle()

    return (
        <>
            <Sidebar isOpen={isToggle} onClose={() => setToggle(false)}/>
            <div className='p-4 flex justify-between items-center'>
                <h1 className='font-bold text-blue-700 z-50 text-2xl hidden md:block'>SEWO</h1>
                <Menu className='md:hidden' color='black' onClick={()=> setToggle(true)}/>
                <div className='flex gap-2 items-center'>
                    <Bell strokeWidth={3} size={23} fill='black' color='black'/>
                    <Image
                        priority
                        width={35}
                        height={35}
                        src='/profile.png'
                        alt={`profile user`}
                    />
                </div>
            </div>
        </>
    )
}

export default Header