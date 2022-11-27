import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import { IoIosSettings, IoMdGrid } from "react-icons/io";
import { HiOutlinePlus } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  followTheUser,
  getMyProfile,
  getProfile,
  unFollowTheUser,
} from "../redux/AppReducer/actions";
import Post from "./Post";
import { useState } from "react";
import { useParams } from "react-router-dom";
const OthersProfile = () => {
  const [follow, setFollow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, isError, myProfile, profile } = useSelector(
    (store) => store.AppReducer
  );

  useEffect(() => {
    dispatch(getMyProfile());
  }, []);

  const handleFollow = () => {
    dispatch(followTheUser(id)).then((res) => {
      dispatch(getProfile(id));
    });
    setFollow(true);
  };
  const handleUnFollow = () => {
    dispatch(unFollowTheUser(id)).then((res) => {
      dispatch(getProfile(id));
    });
    setFollow(false);
  };
  useEffect(() => {
    dispatch(getProfile(id));
  }, []);
  console.log("profile");
  return (
    <Flex w="100%" position={"relative"}>
      <Sidebar />
      <Box
        w={{ md: "85%", lg: "70%" }}
        position={"absolute"}
        left={{ md: "10%", lg: "20%" }}
        zIndex="-1"
      >
        <Box w="100%" p={{ base: "10px", md: "30px" }}>
          <Flex
            gridGap={{ base: "20px", md: "50px" }}
            px={{ base: "10px", md: "30px" }}
            mb="60px"
          >
            <Flex
              w={{ base: "40%", md: "30%" }}
              justifyContent={{ base: "space-between", lg: "center" }}
              alignItems="center"
            >
              <Image
                w={{ base: "100px", md: "150px" }}
                h={{ base: "100px", md: "150px" }}
                objectFit={"cover"}
                borderRadius={"50%"}
                src={profile?.user?.profilePhoto}
              />
            </Flex>
            <Flex
              flexDir={"column"}
              w={{ base: "60%", md: "70%" }}
              gridGap={"20px"}
            >
              <HStack gridGap={"20px"}>
                <Heading size={"md"} fontWeight="normal">
                  {profile?.user?.username}
                </Heading>
                {myProfile?.user?.following.includes(id) === false &&
                follow === false ? (
                  <Button
                    isLoading={isLoading}
                    bg={"#0095F6"}
                    color="#FFFF"
                    onClick={handleFollow}
                  >
                    Follow
                  </Button>
                ) : (
                  <Button
                    fontSize={{ base: "sm", md: "md" }}
                    isLoading={isLoading}
                    bg={"#0095F6"}
                    color="#FFFF"
                    p={{ base: "0 10px" }}
                    onClick={handleUnFollow}
                  >
                    UnFollow
                  </Button>
                )}
                <Box display={{ base: "none", md: "block" }} fontSize={"2xl"}>
                  <IoIosSettings />
                </Box>
              </HStack>
              <HStack gridGap={{ base: "5px", md: "30px" }}>
                <Flex flexDir={{ base: "column", md: "row" }}>
                  <Text
                    as={"span"}
                    fontWeight="600"
                    mr="5px"
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {profile?.posts?.length}
                  </Text>
                  <Text>post</Text>
                </Flex>
                <Flex flexDir={{ base: "column", md: "row" }}>
                  <Text
                    as={"span"}
                    fontWeight="600"
                    mr="5px"
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {profile?.user?.followers?.length}
                  </Text>
                  <Text>followers</Text>
                </Flex>
                <Flex flexDir={{ base: "column", md: "row" }}>
                  <Text
                    as={"span"}
                    fontWeight="600"
                    mr="5px"
                    textAlign={{ base: "center", md: "start" }}
                  >
                    {profile?.user?.following?.length}
                  </Text>
                  <Text>following</Text>
                </Flex>
              </HStack>
              <Heading size={"sm"}>{profile?.user?.full_name}</Heading>
            </Flex>
          </Flex>
          <Flex mb="20px" px="30px" pb="50px">
            <VStack>
              <Box
                fontSize={"6xl"}
                fontWeight="100"
                color={"#ebe8e8"}
                borderRadius="50%"
                p="10px"
                border={"1px solid #ebe8e8"}
              >
                <HiOutlinePlus />
              </Box>
              <Text color={"#0f0f0f"} fontWeight="600">
                New
              </Text>
            </VStack>
          </Flex>
          <Box borderTop={"1px solid #ebe8e8"}>
            <Flex justifyContent={"center"} gridGap={"50px"}>
              <HStack
                // color="#808080"
                color="black"
                justifyContent={"center"}
                alignItems="center"
                borderTop={"1px solid #0f0f0f"}
                p="20px 0"
              >
                <Box fontSize={"sm"}>
                  <IoMdGrid />
                </Box>
                <Text fontWeight={"600"} fontSize="12px">
                  POSTS
                </Text>
              </HStack>
              {/* <HStack
                justifyContent={"center"}
                color="#808080"
                alignItems="center"
                // borderTop={"1px solid #0f0f0f"}
                p="20px 0"
              >
                <Box>
                  <svg
                    aria-label=""
                    className="_ab6-"
                    color="#262626"
                    fill="#262626"
                    height="12"
                    role="img"
                    viewBox="0 0 24 24"
                    width="12"
                  >
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="2.049"
                      x2="21.95"
                      y1="7.002"
                      y2="7.002"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="13.504"
                      x2="16.362"
                      y1="2.001"
                      y2="7.002"
                    ></line>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="7.207"
                      x2="10.002"
                      y1="2.11"
                      y2="7.002"
                    ></line>
                    <path
                      d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Box>
                <Text fontWeight={"600"} fontSize="12px">
                  REELS
                </Text>
              </HStack> */}
              <HStack
                // borderTop={"1px solid #0f0f0f"}
                p="20px 0"
                color="#808080"
              >
                <Box>
                  <svg
                    aria-label=""
                    class="_ab6-"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height="12"
                    role="img"
                    viewBox="0 0 24 24"
                    width="12"
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
                <Text fontWeight={"600"} fontSize="12px">
                  SAVED
                </Text>
              </HStack>
              <HStack
                // borderTop={"1px solid #0f0f0f"}
                p="10px 0"
                color="#808080"
              >
                <Box>
                  <svg
                    aria-label=""
                    class="_ab6-"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    height="12"
                    role="img"
                    viewBox="0 0 24 24"
                    width="12"
                  >
                    <path
                      d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <path
                      d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                    <circle
                      cx="12.072"
                      cy="11.075"
                      fill="none"
                      r="3.556"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></circle>
                  </svg>
                </Box>
                <Text fontWeight={"600"} fontSize="12px">
                  TAGGED
                </Text>
              </HStack>
            </Flex>
            <Grid
              gridTemplateColumns={"repeat(3,1fr)"}
              gap="30px 30px"
              pb="70px"
            >
              {profile?.posts?.length > 0 &&
                profile?.posts?.map((post) => {
                  return (
                    <Flex
                      w={{ base: "100px", md: "200px", ld: "293px" }}
                      h={{ base: "100px", md: "200px", ld: "293px" }}
                      alignItems={"center"}
                      key={post?._id}
                    >
                      <Image
                        w="100%"
                        h="100%"
                        objectFit={"cover"}
                        src={post?.photo}
                      />
                    </Flex>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default OthersProfile;