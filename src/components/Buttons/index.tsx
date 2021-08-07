import React from 'react'
import { Button, Flex } from "@chakra-ui/react"

interface propsButton { 
    text: string,
    justify?: boolean,
    width?: string,
    height?: string,
    bg?:string,
    color?: string
}


const MainButton: React.FC<propsButton> = ({text, justify, width, height, bg, color}) => {
    return (
        justify ? 
        <Flex justifyContent='center'>  
            <Button width={width} colorScheme="Gray" bg={bg}  color={color} variant="outline">{text}</Button> 
        </Flex> :
        <Button width={width} colorScheme="Gray" bg={bg} color={color} variant="outline">{text}</Button>
    )
}

export default MainButton
