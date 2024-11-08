import { useRouter } from 'next/navigation'
import React from 'react'

const NavBar = () => {
    const router = useRouter()

    return (
        <nav className='h-12 flex items-center justify-between px-4'>
            <h1 className='font-bold text-blue-700 z-50' onClick={()=> router.push('/')}>SEWO</h1>
            <p className='text-black text-sm font-semibold'>Login</p>
        </nav>
    )
}

export default NavBar
