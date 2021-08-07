import React from 'react'
import { Input } from "@chakra-ui/react"

interface propsInput { 
    placeholder: string,
    type?: string,
}

const MainInput: React.FC<propsInput> = ({placeholder, type}) => {
    
    return (
        <div>
            <Input color='gray.500' type={type} placeholder={placeholder} variant="filled"/>
        </div>
    )
}

export default MainInput
