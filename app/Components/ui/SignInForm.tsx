import React from 'react'
import Input from '../common/Input'

const SignInForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents page reload
        // Handle form data here
    };

    return (
        <div>
            <h2 className='text-gray-800 font-semibold'>Welcome back to SEWO!</h2>
            <p className='text-gray-500 text-xs font-bold mt-1'>Sign in your account</p>

                {/* <form onSubmit={handleSubmit}> Fix this later
                    <div>
                    <label>Email</label>
                <Input
                />
                    </div>
                </form> */}

        </div>
    )
}

export default SignInForm
