import { create } from 'zustand'

interface usersProps{
    Fullname: string
    Country: string
    Email: string
    Password: string

    setFullname: (Fullname: string) => void
    setCountry: (Country: string) => void
    setEmail: (Email: string) => void
    setPassword: (Password: string) => void
}

export const useUserData = create<usersProps>((set)=> ({
    Fullname: 'John Doe',
    Country: '',
    Email: '',
    Password: '',

    setFullname: (Fullname: string) => set(()=> ({ Fullname })),
    setCountry: (Country: string) => set(()=> ({ Country })),
    setEmail: (Email: string) => set(()=> ({ Email })),
    setPassword: (Password: string) => set(()=> ({ Password })),
}))