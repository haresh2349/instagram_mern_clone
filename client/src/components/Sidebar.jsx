import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  Text,
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
import { NavLink, useNavigate } from "react-router-dom";
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
const Sidebar = () => {
  const [file, setFile] = useState("");
  const [isHome, setIsHome] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const [isExplore, setIsExplore] = useState(false);
  const [isMassage, setIsMessage] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();
  const handleClick = (value, updateFunc) => {
    updateFunc(!value);
    if (hideSidebar) {
      setHideSidebar(false);
    }
    // nav(`{/${path}}`);
  };
  console.log(file);
  return (
    <Box w={hideSidebar ? "70px" : "30%"} h="100vh">
      <Flex
        w={hideSidebar ? "auto" : "220px"}
        bg="#FFFF"
        borderRight={"1px solid #DBDBDB"}
        flexDirection={"column"}
        justifyContent="space-between"
        h="100vh"
        p={hideSidebar ? "25px 5px" : "30px"}
      >
        <Flex flexDirection={"column"} gridGap="10px">
          <HStack
            justifyContent={hideSidebar ? "center" : {}}
            fontSize={"2xl"}
            p="10px"
          >
            {!hideSidebar ? (
              <Image w="100px" src={instagramLogo} />
            ) : (
              <BsInstagram />
            )}
          </HStack>
          <Flex flexDirection={"column"} gridGap={hideSidebar ? "5px" : "20px"}>
            <NavLink to="/">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                borderRadius={hideSidebar ? "50%" : "25px"}
                _hover={{ bg: "#DBDBDB" }}
                onClick={() => handleClick(isHome, setIsHome)}
              >
                <Box fontSize={"25px"} fontWeight="600">
                  {isHome ? <MdHomeFilled /> : <GrHomeRounded />}
                </Box>
                {!hideSidebar && (
                  <Text fontSize={"md"} fontWeight={isHome ? "600" : "normal"}>
                    Home
                  </Text>
                )}
              </HStack>
            </NavLink>
            <NavLink to="/search">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                borderRadius={hideSidebar ? "50%" : "25px"}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                _hover={{ bg: "#DBDBDB" }}
                onClick={() => setHideSidebar(true)}
              >
                <Box fontSize={"25px"}>
                  <BsSearch />
                </Box>
                {!hideSidebar && <Text fontSize={"md"}>Search</Text>}
              </HStack>
            </NavLink>
            <NavLink to="/explore">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                borderRadius={hideSidebar ? "50%" : "25px"}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                _hover={{ bg: "#DBDBDB" }}
              >
                <Box fontSize={"30px"}>
                  {isExplore ? <FaCompass /> : <MdOutlineExplore />}
                </Box>
                {!hideSidebar && <Text fontSize={"md"}>Explore</Text>}
              </HStack>
            </NavLink>
            <NavLink to="/messages">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                borderRadius={hideSidebar ? "50%" : "25px"}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                _hover={{ bg: "#DBDBDB" }}
              >
                <Box fontSize={"30px"}>
                  <RiMessengerLine />
                </Box>
                {!hideSidebar && <Text fontSize={"md"}>Messages</Text>}
              </HStack>
            </NavLink>
            <NavLink to="/notifications">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                borderRadius={hideSidebar ? "50%" : "25px"}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                _hover={{ bg: "#DBDBDB" }}
              >
                <Box fontSize={"25px"}>
                  <FaRegHeart />
                </Box>
                {!hideSidebar && <Text fontSize={"md"}>Notifications</Text>}
              </HStack>
            </NavLink>
            <HStack
              h={hideSidebar ? "60px" : "auto"}
              justifyContent={hideSidebar ? "center" : {}}
              borderRadius={hideSidebar ? "50%" : "25px"}
              p={"10px 10px"}
              alignItems={"center"}
              gridGap="5px"
              _hover={{ bg: "#DBDBDB" }}
              onClick={onOpen}
            >
              <Box fontSize={"25px"}>
                <BsPlusSquare />
              </Box>
              {!hideSidebar && <Text fontSize={"md"}>Create</Text>}
            </HStack>
            <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
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
                      <Text fontSize={"22px"} fontWeight="100">
                        Drag photos and videos here
                      </Text>
                      {/* <Input
                        type={"file"}
                        p="4px"
                        onChange={(e) => setFile(e.target.value)}
                      /> */}
                    </Flex>
                  </Flex>
                </ModalBody>

                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
            <NavLink to="/profile">
              <HStack
                h={hideSidebar ? "60px" : "auto"}
                justifyContent={hideSidebar ? "center" : {}}
                borderRadius={hideSidebar ? "50%" : "25px"}
                p={"10px 10px"}
                alignItems={"center"}
                gridGap="5px"
                _hover={{ bg: "#DBDBDB" }}
              >
                <Box>
                  <Avatar size={"sm"} src="https://bit.ly/dan-abramov" />
                </Box>
                {!hideSidebar && <Text fontSize={"md"}>Profile</Text>}
              </HStack>
            </NavLink>
          </Flex>
        </Flex>
        <Box>
          <HStack
            h={hideSidebar ? "60px" : "auto"}
            justifyContent={hideSidebar ? "center" : {}}
            borderRadius={hideSidebar ? "50%" : "25px"}
            p={"10px 10px"}
            alignItems={"center"}
            gridGap="5px"
            _hover={{ bg: "#DBDBDB" }}
          >
            <Box fontSize={"25px"}>
              <SlMenu />
            </Box>
            {!hideSidebar && <Text fontSize={"md"}>More</Text>}
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sidebar;
