import React from 'react'
import { Input } from "@chakra-ui/react"

interface propsInput { 
    placeholder: string,
}

const MainInput: React.FC<propsInput> = ({placeholder}) => {
    
    return (
        <div>
            <Input type="tel" placeholder={placeholder} variant="filled"/>
        </div>
    )
}

export default MainInput
