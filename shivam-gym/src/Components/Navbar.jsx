import React from 'react'
import "./Navbar.css"
import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <Flex className='Main-container' minWidth='max-content' alignItems='center' gap='2'>
                <Link to="/">
                    <Box p='2'>
                        <Heading className='logo-heading' fontSize="21px">myfitnesspal</Heading>
                    </Box>


                        <img style={{height:"50px" ,width:"20%" ,margin:"auto",marginTop:"-50px",marginLeft:"500px"}} src="https://cdn.dribbble.com/users/977639/screenshots/2510794/media/a038649016c2728ce78a574b761fc9f1.jpg?compress=1&resize=400x300" alt="" />
                </Link>
                <Spacer />

                <Link to="/login">
                    <Text className='Login-btn'>
                        LOG IN
                    </Text>
                </Link>


            </Flex>

        </>
    )
}

export default Navbar