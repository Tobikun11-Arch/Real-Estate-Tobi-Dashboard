import React from 'react'

interface InputProps {
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    id?: string
    value?: string
    defaultChecked?: boolean
    placeholder?: string
}

const Input = ({ className, onChange, type, id, value, defaultChecked, placeholder }: InputProps) => {
    return <input type={type} className={className} onChange={onChange} id={id} value={value} placeholder={placeholder} defaultChecked={defaultChecked}/>

}

export default Input
