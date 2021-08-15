import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import MainButton from '../components/Buttons'
import MainInput from '../components/Inputs'

function RestPass() {
    return (
        <Flex w='100%' h='100vh' align='center' justify='center'>
            <Box w='500px' borderRadius="md" h='500px' bg='gray.600' p='10' color='white' position='relative'>
                <Text mb='20px'>
                Если вы забыли пароль, то можете востановить его. 
                </Text>
                <form>
                    <Stack>
                        <MainInput placeholder='Введите свой email'/>
                        <MainButton text='Востановить'/> 
                    </Stack>
                </form>
            </Box>
        </Flex>
    )
}

export default RestPass
