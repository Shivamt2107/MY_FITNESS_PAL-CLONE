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