import React from 'react'

interface InputProps {
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    id?: string
    value?: string
}

const Input = ({ className, onChange, type, id, value }: InputProps) => {
    return <input type={type} className={className} onChange={onChange} id={id} value={value}/>

}

export default Input
