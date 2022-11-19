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
  Image,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import instagramLogo from "../images/instagram_logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/AuthReducer/actions";
import { useEffect } from "react";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    username: "",
    password: "",
  });
  const toast = useToast();
  const dispatch = useDispatch();
  const { isLoading, isError, type, message } = useSelector(
    (store) => store.AuthReducer
  );
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //
  const handleSubmit = async () => {
    if (
      formData.email &&
      formData.username &&
      formData.full_name &&
      formData.password
    ) {
      dispatch(signupUser(formData));
    } else {
      toast({
        title: "Please Enter valid details",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  useEffect(() => {
    if (type) {
      toast({
        title: message,
        status: type,
        duration: 2000,
        isClosable: true,
      });
      if (type == "success") {
        navigate("/login");
      }
    }
  }, [type]);
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
          <Flex
            align={"center"}
            gridGap="10px"
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
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
            <Flex
              mt="0"
              mb="10px"
              gridGap={"10px"}
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Box w="90px" h="1px" bg="#C2C2C2"></Box>
              <Text color={"#C2C2C2"}>OR</Text>
              <Box w="90px" h="1px" bg="#C2C2C2"></Box>
            </Flex>
          </Flex>
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
                  isLoading={isLoading}
                  size="sm"
                  bg={"#0195F9"}
                  color={"white"}
                  _hover={{
                    bg: "blue",
                  }}
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Flex
          border={"1px solid #BDBDBD"}
          bg="#FAFAFA"
          textAlign={"center"}
          justifyContent="center"
          p="20px"
        >
          Have an account?{" "}
          <Link to="/login">
            <Text color={"#00A2F8"} ml="2px">
              Log in
            </Text>
          </Link>
        </Flex>
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
