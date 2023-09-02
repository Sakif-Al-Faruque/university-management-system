"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import { Button, ChakraProvider, Flex, FormControl, FormLabel, Heading, Input, } from "@chakra-ui/react";

export default function Signin(){

    const router = useRouter();
    const [user, setUser] = useState({
        email : "",
        password : ""
    });

    const submission = async () => {

        const response = await axios.post('/api/applicant/auth/signin', {...user});

        console.log(response);
        const resUser = response.data.user;

        if(resUser){

            router.push('/applicant/dashboard');

        }
    }
    return (
        <div>

            <ChakraProvider>
            <Flex
            height={"100vh"} alignItems={"center"} justifyContent={"center"}>
                <Flex
                direction={"column"}
                background={"red.400"}
                p={12}
                rounded={6}
                position={"relative"}>
                    <Heading mb={6} > <span className="text-white"> Log In </span> </Heading>

                    
                        <FormControl isRequired mb={"40px"}>
                            <FormLabel mb={"10px"} className="text-white">
                                Email:
                            </FormLabel>
                            <Input
                            type="text"
                            placeholder="Enter your email"
                            name="email"
                            onChange={(e) => (setUser({...user, email: e.target.value}))}
                            value={user.email}
                            background={"white.100"}/>
                        </FormControl>

                        <FormControl isRequired mb={"40px"}>
                            <FormLabel mb={"10px"} className="text-white">
                                Password:
                            </FormLabel>
                            <Input
                            type="password"
                            placeholder="******"
                            name="password"
                            onChange={(e) => (setUser({...user, password: e.target.value}))}
                            value={user.password}
                            background={"white.100"}/>
                        </FormControl>

                        <Button 
                        type="submit"
                        onClick={submission}
                        p={"10px"}
                        rounded={6}> Login</Button>
  
                </Flex>
            </Flex>
        </ChakraProvider>
        </div>
    );
}