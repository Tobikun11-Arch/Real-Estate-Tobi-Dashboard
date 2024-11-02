import React, { useEffect, useState } from 'react'
import { Building, CalendarDays, MapPin } from 'lucide-react';
import { Button, Select } from './common/index';

const HomeSearch = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 905);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            {isVisible && (
                <div className='rounded-lg bg-white border z-50 fixed ml-52 mb-20 p-3 flex flex-col gap-2'>
                    <div className='flex gap-3'>
                        <div className="p-2 border rounded-lg"><Building strokeWidth={3} color="#0f0f0f" size={15}/></div>
                        <Select
                            className="text-black border rounded-lg w-44 text-sm bg-white p-2"
                            name="Buy a Building"
                            options={[
                                { value: 'out-of-stock', label: 'Buy a Building' },
                                { value: 'date-added', label: 'Option 2' },
                                { value: 'restock-date', label: 'Option 3' }
                            ]}
                        />
                    </div>

                    <div className='flex gap-3'>
                        <div className="p-2 border rounded-lg"><CalendarDays strokeWidth={3} color="#0f0f0f" size={15}/></div>
                        <Select
                            className="text-gray-500 border rounded-lg w-44 text-sm bg-white p-2"
                            name="Date"
                            options={[
                                { value: 'out-of-stock', label: 'Date' },
                                { value: 'date-added', label: 'Option 2' },
                                { value: 'restock-date', label: 'Option 3' }
                            ]}
                        />
                    </div>

                    <div className='flex gap-3'>
                        <div className="p-2 border rounded-lg"><MapPin strokeWidth={3} color="#0f0f0f" size={15}/></div>
                        <Select
                            className="text-gray-500 border rounded-lg w-44 text-sm bg-white p-2"
                            name="Location"
                            options={[
                                { value: 'out-of-stock', label: 'Location' },
                                { value: 'date-added', label: 'Option 2' },
                                { value: 'restock-date', label: 'Option 3' }
                            ]}
                        />
                    </div>

                    <Button className='bg-blue-600 font-bold text-white text-sm py-2 rounded-md'>Search</Button>
                </div>
            )}
        </>
    )
}

export default HomeSearch
