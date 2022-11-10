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
import { useEffect } from "react";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    username: "",
    password: "",
  });
  const images = [
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];
  // const showImage = (url) => {
  //   let timer;
  //   for (let i = 0; i < images.length; i++) {
  //     clearTimeout(timer);
  //     timer = setInterval(() => {
  //       return url;
  //     }, 1000);
  //   }
  // };
  let [count, setCount] = useState(0);
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const [img4, setImg4] = useState(false);
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
  useEffect(() => {
    let timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    if (count == images.length) setCount(0);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <Flex justify={"center"} p={"50px"} bg={"#FAFAFA"}>
      <Box>
        <Box>
          <Image src="https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png" />
        </Box>
        <Box>
          <Image id="src" src={images[count]} />
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
                  loadingText="Submitting"
                  size="sm"
                  bg={"blue.400"}
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
        <Box
          border={"1px solid #BDBDBD"}
          bg="#FAFAFA"
          textAlign={"center"}
          p="20px"
        >
          Don't haven an account?{" "}
          <Link to="/login" color={"#00A2F8"}>
            Sign up
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
