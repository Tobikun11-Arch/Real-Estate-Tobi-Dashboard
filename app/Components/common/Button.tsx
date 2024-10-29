import React from 'react'

interface ButtonProps {
    className?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    children?: React.ReactNode
    type?: "button" | "submit" | "reset" | undefined
}

const Button = ({ className, onClick, children, type }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type={type}>{children}</button>
    )
}

export default Button
