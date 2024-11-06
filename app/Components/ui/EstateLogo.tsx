import React from 'react'
import HomeSearch from './HomeSearch'

const EstateLogo = () => {
    return (
            <>
                <div className='flex items-end'>
                    <div className="lg:w-96 w-80 h-[500px] bg-[url('/EstateLogo.png')] bg-cover bg-no-repeat"></div>
                    <HomeSearch/>
                </div> 
                <div className='ml-7'>
                    <h1 className='mt-3 font-bold text-3xl text-gray-900 w-full'>Find your sweet home</h1>
                    <p className='text-gray-500 w-2/4 text-xs font-bold '>Schedule visit in just a few clicks visits in just a few clicks</p>
                </div>
            </>
    )
}

export default EstateLogo
