import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  VStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import instagramLogo from "../images/instagram_logo.png";
import { AiFillFacebook } from "react-icons/ai";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={"100vh"}
      justify={"center"}
      p={3}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={3}
        mx={"auto"}
        maxW={"sm"}
        py={6}
        px={6}
        bg={useColorModeValue("white", "gray.700")}
        border="1px sold #4c4747"
      >
        <Stack align={"center"} gridGap="10px">
          <Box w={"200px"} h={"80px"}>
            <Image w={"100%"} h={"100%"} src={instagramLogo} />
          </Box>
          <Text
            px={7}
            textAlign="center"
            fontSize={"lg"}
            fontWeight="medium"
            color={"grey"}
          >
            Sign up to see photos and videos from your friends.
          </Text>
          <HStack
            align={"center"}
            justifyContent="center"
            bg={"#0195F9"}
            px={5}
            py={1}
            w={"80%"}
            borderRadius={"8px"}
            color="#FFF"
            fontSize={"16px"}
          >
            <AiFillFacebook />
            <Text>Log in with Facebook</Text>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Box w="110px" h="1px" bg="#C2C2C2"></Box>
            <Text color={"#C2C2C2"}>OR</Text>
            <Box w="110px" h="1px" bg="#C2C2C2"></Box>
          </HStack>
        </Stack>
        <Box rounded={"lg"} px={8}>
          <Stack spacing={1}>
            <FormControl id="email" isRequired>
              <Input
                type="email"
                placeholder="Email"
                bg="#FAFAFA"
                borderRadius={0}
                fontSize="sm"
              />
            </FormControl>
            <FormControl id="fullName">
              <Input
                type="text"
                placeholder="Full Name"
                bg="#FAFAFA"
                borderRadius={0}
                fontSize="sm"
              />
            </FormControl>
            <FormControl id="username" isRequired>
              <Input
                type="text"
                placeholder="Username"
                bg="#FAFAFA"
                borderRadius={0}
                fontSize="sm"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  bg="#FAFAFA"
                  borderRadius={0}
                  fontSize="sm"
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={8} pt={2}>
              <Button
                loadingText="Submitting"
                size="sm"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <Link color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
