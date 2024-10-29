import React from 'react'

interface InputProps {
    className?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    type?: string
    id?: string
    value?: string
    defaultChecked?: boolean
}

const Input = ({ className, onChange, type, id, value, defaultChecked }: InputProps) => {
    return <input type={type} className={className} onChange={onChange} id={id} value={value} defaultChecked={defaultChecked}/>

}

export default Input
