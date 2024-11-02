import React from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    className?: string;
    options: SelectOption[];
    name: string;
}

const Select = ({ onChange, value, className, options, name }: SelectProps) => {
    return (
        <select className={className} name={name} value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value} className="text-black font-abc font-light">
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;
