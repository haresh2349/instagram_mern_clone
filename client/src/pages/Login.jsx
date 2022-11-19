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
import { useEffect } from "react";
import image1 from "../images/instaImg1.png";
import image2 from "../images/instaImg2.png";
import image3 from "../images/instaImg3.png";
import image4 from "../images/instaImg4.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/AuthReducer/actions";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading, isError, token, type, message } = useSelector(
    (store) => store.AuthReducer
  );
  const images = [image1, image2, image3, image4];
  let [count, setCount] = useState(0);
  const toast = useToast();
  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    console.log(formData);
    dispatch(loginUser(formData));
  };
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1500);
    if (count == images.length) setCount(0);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  useEffect(() => {
    if (token) {
      toast({
        title: message,
        status: type,
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }
  }, [token]);
  return (
    <Flex justify={"center"} p={"50px"} bg={"#FAFAFA"}>
      <Box>
        <Box position={"relative"}>
          <Image src="https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png" />
          <Box position={"absolute"} top="25px" right="60px">
            <Image animation={"ease-in-out 1s"} id="src" src={images[count]} />
          </Box>
        </Box>
      </Box>
      <Flex flexDirection={"column"} gridGap="1em" w={"350px"}>
        <Box spacing={3} border="1px solid #DBDBDB" p="40px" bg={"#FFFF"}>
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
            <Stack w="100%">
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
              <Stack spacing={8} pt={2}>
                <Button
                  isLoading={isLoading}
                  size="sm"
                  bg={"#0195F9"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </Stack>
            </Stack>
            <Box rounded={"lg"} w="100%">
              <Flex
                mt="0"
                mb="10px"
                gridGap={"10px"}
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Box w="100px" h="1px" bg="#C2C2C2"></Box>
                <Text color={"#C2C2C2"}>OR</Text>
                <Box w="100px" h="1px" bg="#C2C2C2"></Box>
              </Flex>
              <HStack
                alignItems={"center"}
                justifyContent="center"
                px={5}
                py={1}
                // w={"80%"}
                color="#385185"
                fontSize={"20px"}
              >
                <AiFillFacebook />
                <Text fontWeight="600" fontSize={"16px"}>
                  Log in with Facebook
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Box>
        <Flex
          border={"1px solid #BDBDBD"}
          bg="#FAFAFA"
          textAlign={"center"}
          justifyContent="center"
          p="20px"
        >
          Don't haven an account ?{" "}
          <Link to="/signup">
            <Text color={"#00A2F8"} ml="2px">
              {" "}
              Sign up
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
