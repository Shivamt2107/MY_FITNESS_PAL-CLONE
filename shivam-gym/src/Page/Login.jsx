import React from "react"
import SecoundNavbar from "../Components/SecoundNavbar";
import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    Switch,
    useColorMode,
    useColorModeValue,
    HStack,
    Text,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import style from "../Page/Login.module.css"
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";



function Login() {


    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');


    return (
        <>

            <SecoundNavbar />

            <div>

                <Flex h="600px" marginBottom="80px" alignItems="center" justifyContent="center">
                    <Flex h="525px"
                        w="500px"
                        flexDirection="column"
                        bg={formBackground}
                        p={100}
                        borderRadius={8}
                        boxShadow="xl"
                        border="0px solid black"

                    >
                        <Heading mb={10} mt="-60px" textAlign="center">Member Login</Heading>
                        <Input
                            placeholder="Shivamgote@hotmail.com"
                            type="email"
                            variant="filled"
                            mb={3}
                            bg="white"
                            w="100%"
                            p="20px"
                        />
                        <Input
                            placeholder="**********"
                            type="password"
                            variant="filled"
                            mb={6}
                            bg="white"
                            p="20px"
                        />
                        <Button p="20px" colorScheme="teal" mb={8}>
                            Log In
                        </Button>
                        <FormControl display="flex" alignItems="center">
                            <FormLabel htmlFor="dark_mode" mb="0">
                                Enable Dark Mode?
                            </FormLabel>
                            <Switch
                                id="dark_mode"
                                colorScheme="teal"
                                size="lg"
                                onChange={toggleColorMode}
                            />
                        </FormControl>


                        <Button className={style.FTButton} colorScheme='facebook' leftIcon={<FaFacebook />}>
                            Facebook
                        </Button>
                        <Button className={style.FTButton} colorScheme='twitter' leftIcon={<FaTwitter />}>
                            Twitter
                        </Button>

                        <Text mt="15px" textAlign="center">Not a member yet?  <Link to="/"> <span style={{ color:"blue" }}>Sign up now!</span></Link></Text>
                    </Flex>
                </Flex>
            
            </div>

            <Footer />

        </>
    )
}


export default Login;



