import React from 'react'

const VirtualTour = () => {
    return (
        <>
            <div className='flex items-end'>
                <div className="lg:w-96 w-80 h-[500px] bg-[url('/EstateLogo.png')] bg-cover bg-no-repeat"></div>
            </div> 
            <div className='ml-7'>
                <h1 className='mt-3 font-bold text-3xl text-gray-900 w-full'>View Details with AR</h1>
                <p className='text-gray-500 w-2/5 text-xs font-bold '>You an view interior details with our built-in AR system</p>
            </div>
        </>
    )
}

export default VirtualTour
