import React from 'react'
import { Input } from "@chakra-ui/react"

interface propsInput { 
    placeholder: string,
    type?: string,
    value?: string,
    onBlur?: (e: React.SyntheticEvent<HTMLInputElement>) => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const MainInput: React.FC<propsInput> = ({placeholder, type, value, onBlur, onChange, onKeyPress}) => {
  
    
    return (
        <div>
            <Input
            value={value}
            onBlur={e => onBlur && onBlur(e)}
            onChange={e => onChange && onChange(e)}
            onKeyPress={e => onKeyPress && onKeyPress(e)}
            name={type} color='gray.500' 
            type={type} 
            placeholder={placeholder} 
            variant="filled"
            />
        </div>
    )
}

export default MainInput
