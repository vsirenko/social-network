import React, {useState} from 'react'
import { Avatar, Box, Flex, Stack } from "@chakra-ui/react"
import MainInput from '../Inputs'
import MainButton from '../Buttons'
import MainCheckbox from '../CheckBox'



const Authorization:React.FC = ({}) => {
    const [tab, setTab] = useState<number>(1)
    const [visiblePass, setVisiblePass] = useState<boolean>(false)
    
    return (
        <div>
            <Flex w='100%' h='100vh' align='center' justify='center'>
                <Box w='500px' borderRadius="md" h='800px' bg='gray.600' p='10' color='white'>
                    <Flex w='100%' h='220px' justify='center' >
                        <Avatar bg='gray.100' w='190px' h='190px' borderColor='gray.500' borderWidth='5px' size='2xl' src='https://i.pinimg.com/originals/9f/00/af/9f00af501d2d324ac7f8ebb559fc25dd.png' />
                    </Flex>
                    <Box borderRadius="md" w='100%'  bg='gray.700' overflow='hidden'> 
                        <Flex>
                            <Box 
                            w='50%' 
                            textAlign='center' 
                            p='7px'  
                            bg={`${tab === 1 &&  'gray.100'}`} 
                            color={`${tab === 1 &&  'gray.600'}`}
                            cursor='pointer'
                            onClick={()=> setTab(1)}>
                                Вход
                            </Box>
                            <Box 
                            w='50%' 
                            textAlign='center' 
                            p='7px'  
                            bg={`${tab === 2 &&  'gray.100'}`} 
                            color={`${tab === 2 &&  'gray.600'}`}
                            cursor='pointer'
                            onClick={()=> setTab(2)}
                            >
                                Регистрация
                            </Box>
                        </Flex>
                    </Box>
                    <Box w='100%' h='100%' marginTop='20px'>
                        {tab === 1 && 
                            <>
                            <Stack spacing={5}>
                                <MainInput type='email' placeholder={'Введите ваш логин'}/>
                                <MainInput type={`${visiblePass ? 'text' : 'password'}`} placeholder={'Введите ваш пароль'}/>
                                <MainCheckbox visible={visiblePass} onChangeStatus={setVisiblePass} text='Показать пароль'/>
                                <MainButton width='calc(100% / 2)' bg='gray.100' color='gray.600' justify={true} text='Войти'/>
                            </Stack>
                            </>
                        }
                        {tab === 2 && '2'}
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Authorization
