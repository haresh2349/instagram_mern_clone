import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import instagramLogo from "../images/instagram_logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsInstagram, BsPlusSquare, BsSearch } from "react-icons/bs";
import { FaCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { MdHomeFilled, MdOutlineExplore } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { uploadPost } from "../redux/AppReducer/actions";
import axios from "axios";
import Searchbar from "./Searchbar";
import { IoIosSettings } from "react-icons/io";
const Sidebar = () => {
  const [file, setFile] = useState("");
  const [loading, setLoding] = useState(false);
  const [url, setUrl] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [caption, setCaption] = useState("");
  const [count, setCount] = useState(0);
  const [hideSidebar, setHideSidebar] = useState(false);
  let { isOpen, onOpen, onClose } = useDisclosure();
  const [isHome, setIsHome] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const handleClick = (value, updateFunc) => {
    updateFunc(!value);
    if (hideSidebar) {
      setHideSidebar(false);
    }
  };
  const postDetails = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "insta-clone");
    data.append("cloud_name", "dcjwvuwso");
    setLoding(true);
    fetch("https://api.cloudinary.com/v1_1/dcjwvuwso/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setLoding(false);
        setUrl(res.url);
      });
  };
  const handlePostData = () => {
    if (url) {
      let payload = {
        photo: url,
        caption: caption,
      };
      dispatch(uploadPost(payload));
      setCaption("");
      nav("/");
      onClose();
    }
  };
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login");
  };
  return (
    <Box
      w={{ base: "100%", md: "80px", lg: hideSidebar ? "80px" : "15%" }}
      h={{ base: "70px", md: "100vh" }}
      position={"fixed"}
      top={{ md: "0" }}
      bottom={{ base: "-15px", md: "0" }}
      left={{ base: "0" }}
      right={{ base: "0", md: {} }}
      bg="#FFF"
    >
      <Flex
        w={{ base: "100%", lg: hideSidebar ? "auto" : "225px" }}
        bg="#FFFF"
        borderRight={"1px solid #DBDBDB"}
        flexDirection={{ base: "row", md: "column" }}
        justifyContent="space-between"
        alignItems={"center"}
        h={{ md: "100vh" }}
        p={{ base: "0", md: "20px 10px" }}
      >
        <Flex
          w={{ base: "100%", lg: !hideSidebar ? "220px" : "auto" }}
          flexDirection={"column"}
          pl={{ lg: "15px" }}
          gridGap="10px"
          alignItems={{
            base: "center",
            md: "start",
          }}
          justifyContent={{ base: "space-between", md: {} }}
        >
          <Flex
            display={{ base: "none", md: "flex" }}
            justifyContent={{
              base: "space-between",
              md: "center",
              lg: "start",
            }}
            fontSize={"25px"}
            alignItems={hideSidebar ? "center" : "start"}
            p="10px"
            onClick={() => {
              setIsSearch(false);
              setHideSidebar(false);
            }}
            cursor="pointer"
          >
            {/* {!hideSidebar ? ( */}
            <Link to="/">
              <Image
                display={{ base: "none", lg: hideSidebar ? "none" : "block" }}
                w="100px"
                src={instagramLogo}
              />
            </Link>
            {/* ) : ( */}
            <Box
              display={{
                base: "none",
                md: "block",
                lg: !hideSidebar ? "none" : "block",
              }}
            >
              <BsInstagram />
            </Box>
            {/* )} */}
          </Flex>
          <Flex
            flexDirection={{ base: "row", md: "column" }}
            gridGap={{ base: "31px", md: "20px" }}
            alignItems={{
              base: "center",
              md: hideSidebar ? "center" : "start",
            }}
            w={{ base: "auto", lg: !hideSidebar && "220px" }}
          >
            {/* <NavLink to="/"> */}
            <HStack
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              // alignItems={hideSidebar && "center"}
              p={"10px 10px"}
              gridGap="5px"
              borderRadius={{ md: "50%", lg: !hideSidebar && "25px" }}
              onClick={() => {
                setHideSidebar(false);
                setIsSearch(false);
                nav("/");
              }}
              _hover={{ bg: "#EFEFEF" }}
            >
              <Box
                fontSize={
                  window.location.pathname == "/" && isSearch === false
                    ? "35px"
                    : "25px"
                }
              >
                {window.location.pathname == "/" && isSearch === false ? (
                  <MdHomeFilled />
                ) : (
                  <GrHomeRounded />
                )}
              </Box>
              {!hideSidebar && (
                <Text
                  display={{ base: "none", lg: "block" }}
                  fontSize={"md"}
                  fontWeight={
                    window.location.pathname == "/" ? "600" : "normal"
                  }
                >
                  Home
                </Text>
              )}
            </HStack>
            {/* </NavLink> */}
            <HStack
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              alignItems={hideSidebar && "center"}
              borderRadius={{ md: "50%", lg: "25px" }}
              p={"10px 10px"}
              gridGap="5px"
              _hover={{ bg: "#EFEFEF" }}
              border={isSearch && "1px solid #9f9f9f"}
              onClick={() => {
                setHideSidebar(!hideSidebar);
                setIsSearch(!isSearch);
              }}
              cursor="pointer"
            >
              <Box fontSize={"25px"}>
                <BsSearch />
              </Box>
              {!hideSidebar && (
                <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                  Search
                </Text>
              )}
            </HStack>
            <HStack
              display={{ base: "none", md: "flex" }}
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              // alignItems={"center"}
              borderRadius={{ md: "50%", lg: "25px" }}
              p={"10px 10px"}
              gridGap="5px"
              _hover={{ bg: "#EFEFEF" }}
            >
              <Box fontSize={"30px"}>
                <FaCompass />
                {/* : <MdOutlineExplore />} */}
              </Box>
              {!hideSidebar && (
                <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                  Explore
                </Text>
              )}
            </HStack>
            <HStack
              display={{ base: "none", md: "flex" }}
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              // alignItems={"center"}
              borderRadius={{ md: "50%", lg: "25px" }}
              p={"10px 10px"}
              gridGap="5px"
              _hover={{ bg: "#EFEFEF" }}
            >
              <Box fontSize={"30px"}>
                <RiMessengerLine />
              </Box>
              {!hideSidebar && (
                <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                  Messages
                </Text>
              )}
            </HStack>
            <HStack
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              // justifyContent="center"
              borderRadius={{ md: "50%", lg: "25px" }}
              p={"10px 10px"}
              gridGap="5px"
              _hover={{ bg: "#EFEFEF" }}
            >
              <Box fontSize={"25px"}>
                <FaRegHeart />
              </Box>
              {!hideSidebar && (
                <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                  Notifications
                </Text>
              )}
            </HStack>
            <HStack
              w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
              h={{ md: "60px", lg: "auto" }}
              justifyContent={{ md: "center", lg: "start" }}
              // alignItems={"center"}
              borderRadius={{ md: "50%", lg: "25px" }}
              p={"10px 10px"}
              gridGap="5px"
              _hover={{ bg: "#EFEFEF" }}
              onClick={onOpen}
              cursor="pointer"
            >
              <Box fontSize={"25px"}>
                <BsPlusSquare />
              </Box>
              {!hideSidebar && (
                <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                  Create
                </Text>
              )}
            </HStack>
            <Modal
              size={{ base: "md", md: "xl" }}
              isOpen={isOpen}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  py="10px"
                  textAlign={"center"}
                  border={"1px solid #808080"}
                >
                  Create new post
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {!showImage ? (
                    <Flex
                      h={"400px"}
                      justifyContent="center"
                      alignItems={"center"}
                    >
                      <Flex flexDirection={"column"} gridGap={"20px"}>
                        <Center textAlign={"center"}>
                          <svg
                            aria-label="Icon to represent media such as images or videos"
                            class="_ab6-"
                            color="#262626"
                            fill="#262626"
                            height="77"
                            role="img"
                            viewBox="0 0 97.6 77.3"
                            width="96"
                          >
                            <path
                              d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
                              fill="currentColor"
                            ></path>
                            <path
                              d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </Center>
                        <Input
                          type={"file"}
                          p="4px"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                        <Button
                          onClick={() => {
                            setShowImage(true);
                            postDetails();
                          }}
                        >
                          UPLOAD
                        </Button>
                      </Flex>
                    </Flex>
                  ) : (
                    <Flex w="100%" justifyContent={"space-between"}>
                      <Flex
                        w="50%"
                        justifyContent={loading && "center"}
                        alignItems={loading && "center"}
                        m={loading && "auto"}
                      >
                        {!loading ? (
                          <Image w="100%" src={url} />
                        ) : (
                          <Spinner size="xl" />
                        )}
                      </Flex>
                      <Flex flexDir={"column"} gridGap="10px" w="40%">
                        <HStack>
                          <Image
                            w="30px"
                            h="30px"
                            borderRadius={"50%"}
                            src={user.profilePhoto}
                            objectFit="cover"
                          />
                          <Heading size={"sm"}>{user.username}</Heading>
                        </HStack>
                        <Textarea
                          size={"lg"}
                          rows="10"
                          placeholder="Write a caption..."
                          onKeyUp={(e) => {
                            setCount(e.target.value.length);
                            setCaption(e.target.value);
                          }}
                          maxLength="2200"
                        ></Textarea>
                        <Text textAlign={"end"}>{count}/2,200</Text>
                        <Button onClick={() => handlePostData()}>Share</Button>
                      </Flex>
                    </Flex>
                  )}
                </ModalBody>

                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
            <NavLink to="/profile">
              <HStack
                w={{ md: "60px", lg: hideSidebar ? "auto" : "200px" }}
                h={{ md: "60px", lg: "auto" }}
                justifyContent={{ md: "center", lg: "start" }}
                // alignItems={"center"}
                borderRadius={{ md: "50%", lg: "25px" }}
                p={"10px 10px"}
                gridGap="5px"
                _hover={{ bg: "#EFEFEF" }}
              >
                <Box>
                  <Avatar size={"sm"} src={user.profilePhoto} />
                </Box>
                {!hideSidebar && (
                  <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                    Profile
                  </Text>
                )}
              </HStack>
            </NavLink>
          </Flex>
        </Flex>
        <Box w="100%" display={{ base: "none", md: "block" }}>
          <Menu>
            <MenuButton
              w="100%"
              p="10px"
              transition="all 0.2s"
              // _hover={{ bg: "gray.400" }}
              // _expanded={{ bg: "blue.400" }}
              // _focus={{ boxShadow: "outline" }}
            >
              <HStack
                w={{ md: "60px", lg: "auto" }}
                h={{ md: "60px", lg: "auto" }}
                justifyContent={{ md: "center", lg: "start" }}
                // alignItems={"center"}
                borderRadius={{ md: "50%", lg: "25px" }}
                p={"10px 10px"}
                gridGap="10px"
                _hover={{ bg: "#EFEFEF" }}
              >
                <Box fontSize={"25px"}>
                  <SlMenu />
                </Box>
                {!hideSidebar && (
                  <Text display={{ base: "none", lg: "block" }} fontSize={"md"}>
                    More
                  </Text>
                )}
              </HStack>
            </MenuButton>
            <MenuList>
              {/* <MenuItem> */}
              <HStack p="0 10px" justifyContent={"space-between"}>
                <Text>Settings</Text>
                <Box fontSize={"2xl"}>
                  <IoIosSettings />
                </Box>
              </HStack>
              {/* </MenuItem> */}
              <MenuDivider />
              <HStack p="0 10px" justifyContent={"space-between"}>
                <Text>Saved</Text>
                <Box fontSize={"2xl"}>
                  <svg
                    aria-label="Saved"
                    class="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </Box>
              </HStack>
              <MenuDivider />
              <HStack p="0 10px" justifyContent={"space-between"}>
                <Text>Report a problem</Text>
                <Box fontSize={"2xl"}>
                  <svg
                    aria-label="Report a problem"
                    class="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M18.001 1h-12a5.006 5.006 0 0 0-5 5v9.005a5.006 5.006 0 0 0 5 5h2.514l2.789 2.712a1 1 0 0 0 1.394 0l2.787-2.712h2.516a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5Zm3 14.005a3.003 3.003 0 0 1-3 3h-2.936a1 1 0 0 0-.79.387l-2.274 2.212-2.276-2.212a1 1 0 0 0-.79-.387H6a3.003 3.003 0 0 1-3-3V6a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3Zm-9-1.66a1.229 1.229 0 1 0 1.228 1.228A1.23 1.23 0 0 0 12 13.344Zm0-8.117a1.274 1.274 0 0 0-.933.396 1.108 1.108 0 0 0-.3.838l.347 4.861a.892.892 0 0 0 1.77 0l.348-4.86a1.106 1.106 0 0 0-.3-.838A1.272 1.272 0 0 0 12 5.228Z"></path>
                  </svg>
                </Box>
              </HStack>
              <MenuDivider />
              <MenuItem onClick={() => logOut()}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      {isSearch && <Searchbar />}
    </Box>
  );
};

export default Sidebar;
