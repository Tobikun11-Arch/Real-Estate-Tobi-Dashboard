import React from 'react'
import { Bell } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
    return (
        <div className='p-5 flex justify-between'>
            <h1 className='font-bold text-blue-700 z-50'>SEWO</h1>
            <div className='flex gap-1 items-center'>
                <Bell strokeWidth={3} size={20} fill='black'/>
                <Image
                    width={10}
                    height={10}
                    src={'/profile.png'}
                    alt={`image 1`}
                    className=""
                    placeholder = 'blur' // "empty" | "blur" | "data:image/..."
                    blurDataURL='add new url later'
                />
            </div>
        </div>
    )
}

export default Header