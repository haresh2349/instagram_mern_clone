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
import { useToast } from "@chakra-ui/react";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    username: "",
    password: "",
  });
  const toast = useToast();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //
  const handleSubmit = async () => {
    console.log(formData);
    let res = await fetch(
      "https://insta-moc-server1.herokuapp.com/auth/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    let data = await res.json();
    toast({
      title: "Sign up successfully.",
      description: data.message,
      status: data.type,
      duration: 2000,
      isClosable: true,
    });
  };
  return (
    <Flex minH={"100vh"} justify={"center"} p={3} bg={"#FAFAFA"}>
      <Flex flexDirection={"column"} gridGap="1em" maxW={"350px"}>
        <Box
          spacing={3}
          border="1px solid #DBDBDB"
          mx={"auto"}
          py={6}
          px={6}
          bg={"#FFFF"}
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
            <HStack mt="0" mb="10px" justifyContent={"space-between"}>
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
                  name="email"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="fullName">
                <Input
                  type="text"
                  placeholder="Full Name"
                  bg="#FAFAFA"
                  borderRadius={0}
                  fontSize="sm"
                  name="full_name"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="username" isRequired>
                <Input
                  type="text"
                  placeholder="Username"
                  bg="#FAFAFA"
                  borderRadius={0}
                  fontSize="sm"
                  name="username"
                  onChange={handleChange}
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
                    name="password"
                    onChange={handleChange}
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
              <Text
                fontSize={"xs"}
                p="5px 3px"
                textAlign={"center"}
                color="#8E8E8E"
              >
                People who use our service may have uploaded your contact
                information to Instagram. <b>Learn More</b>
              </Text>
              <Text
                fontSize={"xs"}
                p="5px 3px"
                textAlign={"center"}
                color="#8E8E8E"
              >
                By signing up, you agree to our{" "}
                <b style={{ cursor: "pointer" }}>Terms</b> ,{" "}
                <b style={{ cursor: "pointer" }}>Privacy</b>{" "}
                <b style={{ cursor: "pointer" }}>Policy</b> and{" "}
                <b style={{ cursor: "pointer" }}>Cookies</b>
                <b style={{ cursor: "pointer" }}> Policy</b> .
              </Text>
              <Stack spacing={8} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="sm"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          border={"1px solid #BDBDBD"}
          bg="#FAFAFA"
          textAlign={"center"}
          p="20px"
        >
          Have an account?{" "}
          <Link to="/login" color={"#00A2F8"}>
            Log in
          </Link>
        </Box>
        <Box>
          <Text mb="15px" textAlign="center">
            Get the app.
          </Text>
          <HStack justifyContent={"center"}>
            <Image
              maxW={"110px"}
              h="40px"
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="play store"
            />
            <Image
              maxW={"110px"}
              h="40px"
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="microsoft store"
            />
          </HStack>
        </Box>
      </Flex>
    </Flex>
  );
}
