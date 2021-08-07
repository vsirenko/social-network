import React from 'react'
import { Checkbox  } from "@chakra-ui/react"

interface propsCheckbox {
    text: string,
    visible?: boolean,
    onChangeStatus: (x:boolean) => void
}

const MainCheckbox: React.FC<propsCheckbox> = ({text,visible, onChangeStatus}) => {
    console.log(visible);
    
    return (

        <Checkbox onChange={() => onChangeStatus(!visible)}>{text}</Checkbox>
    )
}

export default  MainCheckbox
