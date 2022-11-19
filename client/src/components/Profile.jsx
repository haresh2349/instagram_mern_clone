import {
  Box,
  Button,
  Flex,
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
import { getMyProfile } from "../redux/AppReducer/actions";
const Profile = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, myProfile } = useSelector(
    (store) => store.AppReducer
  );
  //   dispatch(getMyProfile())
  const token = JSON.parse(localStorage.getItem("token"));
  fetch("https://insta-moc-server1.herokuapp.com/feed/myProfile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res, "res");
    });
  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);
  console.log(myProfile);
  return (
    <Flex w="100%">
      <Sidebar />
      <Box w="70%">
        <Box w="80%" p="30px">
          <Flex gridGap={"30px"}>
            <Flex w="30%">
              <Image
                w="150px"
                h="150px"
                objectFit={"cover"}
                borderRadius={"50%"}
                src={myProfile?.user.profilePhoto}
              />
            </Flex>
            <Flex flexDir={"column"} w="70%" gridGap={"20px"}>
              <HStack gridGap={"20px"}>
                <Heading size={"md"} fontWeight="normal">
                  {myProfile?.user.username}
                </Heading>
                <Button variant={"outline"}>Edit Profile</Button>
                <Box fontSize={"2xl"}>
                  <IoIosSettings />
                </Box>
              </HStack>
              <HStack gridGap={"30px"}>
                <Text as={"p"}>
                  <Text as={"span"} fontWeight="600" mr="5px">
                    {myProfile?.posts.length}
                  </Text>
                  post
                </Text>
                <Text as={"p"}>
                  <Text as={"span"} fontWeight="600" mr="5px">
                    {myProfile?.user.followers.length}
                  </Text>
                  followers
                </Text>
                <Text as={"p"}>
                  <Text as={"span"} fontWeight="600" mr="5px">
                    {myProfile?.user.following.length}
                  </Text>
                  following
                </Text>
              </HStack>
              <Heading size={"sm"}>{myProfile?.user.full_name}</Heading>
            </Flex>
          </Flex>
          <Flex p="20px" mb="20px">
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
                color="#808080"
                justifyContent={"center"}
                alignItems="center"
                borderTop={"1px solid #0f0f0f"}
                p="10px 0"
              >
                <Box fontSize={"sm"}>
                  <IoMdGrid />
                </Box>
                <Text fontWeight={"600"} fontSize="12px">
                  POSTS
                </Text>
              </HStack>
              <HStack
                justifyContent={"center"}
                alignItems="center"
                borderTop={"1px solid #0f0f0f"}
                p="10px 0"
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
              </HStack>
              <HStack borderTop={"1px solid #0f0f0f"} p="15px 0">
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
              <HStack borderTop={"1px solid #0f0f0f"} p="10px 0">
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
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Profile;
