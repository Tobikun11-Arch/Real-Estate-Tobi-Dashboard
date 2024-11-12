import React from 'react'
import { Search } from 'lucide-react'
import Header from './Header'
interface SidebarProps {
    isOpen: boolean
    onClose: ()=> void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return (
        <div className={`h-screen  bg-white z-50 fixed top-0 left-0 w-full transition-transform transform text-black p-4 flex flex-col gap-2 dark:bg-white dark:text-black ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="relative w-full">
                <input type='search' className='bg-transparent border w-full rounded-md h-12 text-base pl-7 pr-2 text-gray-800 outline-none' placeholder='Search for products...'/>
                <div className="absolute inset-y-0 left-2 flex items-center">
                    <Search strokeWidth={1.4} color='gray' size={15}/>
                </div>
            </div>
            <h1 className='text-black'>Test</h1>
        </div>
    )
}

export default Sidebar
