import { Box, Flex, HStack, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FiHeart } from "react-icons/fi";
import { BsHeartFill } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
const Post = () => {
  return (
    <Flex
      w="470px"
      border={"1px solid #ebe8e8"}
      borderRadius="6px"
      flexDir={"column"}
    >
      <Flex justifyContent={"space-between"} p="10px" alignItems={"center"}>
        <HStack>
          <Image
            w="30px"
            h="30px"
            objectFit={"cover"}
            borderRadius={"50%"}
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Box>
            <Text fontWeight={"600"}>haresh_2309</Text>
          </Box>
        </HStack>
        <Box>
          <IoIosMore />
        </Box>
      </Flex>
      <Image src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
      <HStack justifyContent={"space-between"} p="5px 10px">
        <HStack>
          <Box>
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
          <Box>
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
          <Box>
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
          <Box>
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
      <Text>
        Liked by{" "}
        <Text as={"span"} fontWeight="600" mr="3px">
          20
        </Text>
        People
      </Text>
      <HStack>
        <Text fontWeight={"600"}>haresh_2309</Text>
        <Text>Nice Pic</Text>
      </HStack>
      <Text p="10px" fontSize={"11px"} color="#d9d6d6">
        1 HOUR AGO
      </Text>
      <HStack borderTop={"1px solid #ebe8e8"} p="0 10px">
        <Input
          placeholder="Add a comment..."
          border={"none"}
          borderBottom="1px solid #ebe8e8"
        />
        <Text color={"#0095F6"}>Post</Text>
      </HStack>
    </Flex>
  );
};

export default Post;
