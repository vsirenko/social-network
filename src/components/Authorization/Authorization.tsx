import React, {useState} from 'react'
import { Avatar, Box, Flex, Stack, Checkbox, Button, Link, Switch, Text } from "@chakra-ui/react"
import MainInput from '../Inputs'
import { useEffect } from 'react'



const Authorization:React.FC = ({}) => {
    const [tab, setTab] = useState<number>(1)
    const [visiblePass, setVisiblePass] = useState<boolean>(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(false)
    const [errorMessage, seterrorMessage] = useState('Упс, что-то пошло не так')


    useEffect(()=> {
        setErrors(false)
        setVisiblePass(false)
    }, [tab])

    const emailHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
        const re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(!re.test(String(e.currentTarget.value).toLocaleUpperCase())) {
            seterrorMessage('Некоректный email')
            setErrors(true)
        } else {
            setErrors(false)
        }

    }
    const passwordHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
        if(e.currentTarget.value.length < 3 || e.currentTarget.value.length > 8) {
            seterrorMessage('Пароль не может быть меньше 3 или больше 8 символов')
            setErrors(true)
            if(!e.currentTarget.value) {
                seterrorMessage('Поле не может быть пустым!')
            } 
        } else {
            setErrors(false)
        }
    }

    const handlerOnSubmit = () => {

    }
    
    return (
        <div>
            <Flex w='100%' h='100vh' align='center' justify='center'>
                <Box w='500px' borderRadius="md" h='800px' bg='gray.600' p='10' color='white' position='relative'>
                    
                    <Box position='absolute' color='black' top='-85px' left='0' w='100%' h='50px' borderRadius='2xl' bg='gray.100' p='10px' transition='all 0.3s ease' opacity={`${errors ? '1' : '0'}`}>
                    <Flex justifyContent='center' alignItems='center' w='100%' h='100%'>
                        <Text fontWeight='semibold' color='red.500'> {errorMessage} </Text>
                    </Flex>
                    </Box>
                    
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
                    <Box w='100%'  marginTop='20px' >
                        {tab === 1 && 
                            <>
                            <form onSubmit={e => console.log(e)}>
                            <Stack spacing={5} position='relative'>
                                <MainInput value={email} onChange={emailHendler}  type='email' placeholder={'Введите ваш логин'} />
                                <MainInput value={password} onChange={passwordHendler}  type={`${visiblePass ? 'text' : 'password'}`} placeholder={'Введите ваш пароль'}/>
                                <Checkbox onChange={() => setVisiblePass(!visiblePass)}>Показать пароль</Checkbox>
                                <Flex justifyContent='center'>  
                                    <Button width='calc(100% / 2)' bg='gray.100' color='gray.600' variant="outline">Войти</Button> 
                                </Flex>
                            </Stack>
                            </form>
                            </>
                        }
                        {tab === 2 && 
                            <form>
                                <Stack spacing={5}>
                                    <MainInput placeholder='Введите ваш email:'/>
                                    <MainInput placeholder='Ваш логин:' />
                                    <MainInput type={`${visiblePass ? 'text' : 'password'}`} placeholder='Введите ваш пароль:'/>
                                    <MainInput type={`${visiblePass ? 'text' : 'password'}`} placeholder='Повторите ваш пароль:' />
                                    <Checkbox onChange={() => setVisiblePass(!visiblePass)}>Показать пароль</Checkbox>
                                    <Flex justifyContent='center'>  
                                        <Button width='calc(100% / 2)' bg='gray.100' color='gray.600' variant="outline">Регистрация</Button> 
                                    </Flex>
                                </Stack>
                            </form>
                        }
                        <Flex w='calc(100% - 20px)' position='absolute' left='0' bottom='10' justifyContent='space-around'>
                                <Link to='/123'>Забыли пароль?</Link>
                                <Link>Техническая поддержка</Link>
                            </Flex>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Authorization
