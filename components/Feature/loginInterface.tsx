"use client"
import { Button, ChakraProvider, Flex, FormControl, FormLabel, Heading, Input, } from "@chakra-ui/react";
export default function LoginInterface()
{
    return(
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
                            background={"white.100"}/>
                        </FormControl>

                        <Button type="submit"
                        p={"10px"}
                        rounded={6}> Login</Button>
  
                </Flex>
            </Flex>
        </ChakraProvider>
    )
}