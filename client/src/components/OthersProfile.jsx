import {
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  Spinner,
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
  commentToPost,
  disLikeThePost,
  followTheUser,
  getMyProfile,
  getProfile,
  likeThePost,
  unFollowTheUser,
} from "../redux/AppReducer/actions";
import Post from "./Post";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ReactTimeAgo from "react-time-ago";
import { FiMoreHorizontal } from "react-icons/fi";
const OthersProfile = () => {
  const [follow, setFollow] = useState(false);
  const [showPost, setShowPost] = useState(false);
  const [curr, setCurr] = useState(0);
  const [comment, setComment] = useState("");
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { profileLoading, isError, myProfile, profile } = useSelector(
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

  const handleLike = (postId) => {
    if (!like) {
      setLike(true);
      dispatch(likeThePost(postId)).then((res) => {
        dispatch(getProfile(id));
      });
    }
  };
  const handleDisLike = (postId) => {
    dispatch(disLikeThePost(postId)).then((res) => {
      dispatch(getProfile(id));
    });
    setLike(false);
  };

  const postComment = (postId) => {
    if (comment) {
      const payload = {
        comment,
        postId,
      };
      dispatch(commentToPost(payload)).then((res) => {
        dispatch(getProfile(id)).then((res) => {
          setComment("");
        });
      });
    }
  };

  const handleShowPost = (i) => {
    setCurr(i);
    setShowPost(true);
  };

  useEffect(() => {
    dispatch(getProfile(id));
  }, []);

  return (
    <Flex w="100%" position={"relative"}>
      <Sidebar />
      <Box
        w={{ md: "85%", lg: "70%" }}
        position={"absolute"}
        left={{ md: "10%", lg: "20%" }}
        zIndex="-1"
      >
        {profileLoading ? (
          <Flex
            w="70%"
            m={"auto"}
            h={"100vh"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        ) : (
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
                      isLoading={profileLoading}
                      bg={"#0095F6"}
                      color="#FFFF"
                      onClick={handleFollow}
                    >
                      Follow
                    </Button>
                  ) : (
                    <Button
                      fontSize={{ base: "sm", md: "md" }}
                      isLoading={profileLoading}
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
                  profile?.posts?.map((post, i) => {
                    return (
                      <Flex
                        w={{ base: "100px", md: "200px", lg: "293px" }}
                        h={{ base: "100px", md: "200px", lg: "293px" }}
                        alignItems={"center"}
                        key={post?._id}
                        onClick={() => handleShowPost(i)}
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
        )}
      </Box>
      {showPost && (
        <Flex
          bg={"rgba(0, 0, 0, 0.4)"}
          justifyContent={"center"}
          alignItems="center"
          position={"fixed"}
          margin={"auto"}
          zIndex={"10000"}
          top="0"
          bottom={"0"}
          left="0"
          right={"0"}
        >
          <Box
            position={"absolute"}
            top="5"
            right={"5"}
            onClick={() => setShowPost(false)}
          >
            <CloseButton size="lg" />
          </Box>
          <Flex w={{ base: "100%", md: "80%" }} m="auto" alignItems={"center"}>
            <Box w="10%">
              <Button
                bg="none"
                disabled={curr === 0}
                onClick={() => setCurr(curr - 1)}
              >
                <FaChevronCircleLeft />
              </Button>
            </Box>
            {profile?.posts?.map((post, i) => {
              return (
                curr == i && (
                  <Flex
                    w="90%"
                    flexDir={{ base: "column", md: "row" }}
                    bg="#FFF"
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                    key={post._id}
                  >
                    <Box w={{ base: "100%", md: "50%" }} bg="#000">
                      <Image
                        w="100%"
                        h={{ base: "200px", md: "600px" }}
                        objectFit="contain"
                        src={post.photo}
                      />
                    </Box>
                    <Flex
                      flexDir={"column"}
                      w={{ base: "100%", md: "50%" }}
                      bg="#FFF"
                    >
                      <Flex
                        h="50px"
                        p="10px 20px"
                        alignItems={"center"}
                        justifyContent="space-between"
                        borderBottom={"1px solid #cecaca"}
                      >
                        <HStack>
                          <Image
                            w="30px"
                            h="30px"
                            objectFit={"cover"}
                            borderRadius={"50%"}
                            src={profile?.user?.profilePhoto}
                          />
                          <Heading size={"sm"}>
                            {profile?.user?.username}
                          </Heading>
                        </HStack>
                        <Box>
                          <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={<FiMoreHorizontal />}
                              variant="outline"
                            />
                          </Menu>
                          {/* <FiMoreHorizontal /> */}
                        </Box>
                      </Flex>
                      <Box
                        borderBottom={"1px solid #cecaca"}
                        h={{ base: "100px", md: "400px" }}
                        overflowY={"scroll"}
                      >
                        {post?.caption != "" && (
                          <HStack p="10px 20px">
                            <Image
                              w="30px"
                              h="30px"
                              objectFit={"cover"}
                              borderRadius={"50%"}
                              src={profile?.user?.profilePhoto}
                            />
                            <Heading size={"sm"}>
                              {profile?.user?.username}
                            </Heading>
                            <Text>{post?.caption}</Text>
                          </HStack>
                        )}
                        {post?.comments.map((comment) => {
                          return (
                            <HStack p="10px 20px" key={comment._id}>
                              <Image
                                w="30px"
                                h="30px"
                                objectFit={"cover"}
                                borderRadius={"50%"}
                                src={comment?.postedBy?.profilePhoto}
                              />
                              <Heading size={"sm"}>
                                {comment?.postedBy?.username}
                              </Heading>
                              <Text>{comment?.comment}</Text>
                            </HStack>
                          );
                        })}
                      </Box>
                      <HStack justifyContent={"space-between"} p="5px 10px">
                        <HStack>
                          {post.likes.includes(myProfile?.user?._id) ===
                            false && (
                            <Box
                              onClick={() => handleLike(post._id)}
                              cursor="pointer"
                            >
                              <svg
                                aria-label="Like"
                                class="_ab6-"
                                color="#262626"
                                fill="#262626"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                              </svg>
                            </Box>
                          )}
                          {post.likes.includes(myProfile?.user?._id) ===
                            true && (
                            <Box
                              onClick={() => handleDisLike(post._id)}
                              cursor="pointer"
                            >
                              <svg
                                aria-label="Unlike"
                                class="_ab6-"
                                color="#ed4956"
                                fill="#ed4956"
                                height="24"
                                role="img"
                                viewBox="0 0 48 48"
                                width="24"
                              >
                                <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                              </svg>
                            </Box>
                          )}
                          <Box cursor="pointer">
                            <svg
                              aria-label="Comment"
                              class="_ab6-"
                              color="#262626"
                              fill="#262626"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path
                                d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></path>
                            </svg>
                          </Box>
                          <Box cursor="pointer">
                            <svg
                              aria-label="Share Post"
                              class="_ab6-"
                              color="#262626"
                              fill="#262626"
                              height="24"
                              role="img"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <line
                                fill="none"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                                x1="22"
                                x2="9.218"
                                y1="3"
                                y2="10.083"
                              ></line>
                              <polygon
                                fill="none"
                                points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                stroke="currentColor"
                                stroke-linejoin="round"
                                stroke-width="2"
                              ></polygon>
                            </svg>
                          </Box>
                        </HStack>
                        <Box>
                          <svg
                            aria-label="Save"
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
                      <Text p="5px 10px">
                        Liked by{" "}
                        <Text as={"span"} fontWeight="600" mr="3px">
                          {post?.likes?.length}
                        </Text>
                        People
                      </Text>
                      <Text p="10px" fontSize={"11px"} color="#d9d6d6">
                        <ReactTimeAgo date={post?.createdAt} locale="en-US" />
                      </Text>
                      <HStack borderTop={"1px solid #ebe8e8"} p="0 10px">
                        <Input
                          placeholder="Add a comment..."
                          border={"none"}
                          value={comment || ""}
                          borderBottom="1px solid #ebe8e8"
                          onChange={(e) => setComment(e.target.value)}
                        />
                        <Text
                          color={"#0095F6"}
                          onClick={() => postComment(post._id)}
                          cursor="pointer"
                        >
                          Post
                        </Text>
                      </HStack>
                    </Flex>
                  </Flex>
                )
              );
            })}
            <Box w="10%" textAlign={"end"}>
              <Button
                bg="none"
                disabled={curr == profile?.posts?.length - 1}
                onClick={() => setCurr(curr + 1)}
              >
                <FaChevronCircleRight />
              </Button>
            </Box>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default OthersProfile;
