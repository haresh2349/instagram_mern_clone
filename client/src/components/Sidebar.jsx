import { Avatar, Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import instagramLogo from "../images/instagram_logo.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsPlusSquare, BsSearch } from "react-icons/bs";
import { FaCompass, FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <Box>
      <Flex flexDirection={"column"}>
        <Box>
          <Image w="200px" src={instagramLogo} />
        </Box>
        <Flex flexDirection={"column"}>
          <HStack>
            <Box>
              <GrHomeRounded />
            </Box>
            <Text>Home</Text>
          </HStack>
          <HStack>
            <Box>
              <BsSearch />
            </Box>
            <Text>Search</Text>
          </HStack>
          <HStack>
            <Box>
              <FaCompass />
            </Box>
            <Text>Explore</Text>
          </HStack>
          <HStack>
            <Box>
              <RiMessengerLine />
            </Box>
            <Text>Messages</Text>
          </HStack>
          <HStack>
            <Box>
              <FaRegHeart />
            </Box>
            <Text>Notifications</Text>
          </HStack>
          <HStack>
            <Box>
              <BsPlusSquare />
            </Box>
            <Text>Create</Text>
          </HStack>
          <HStack>
            <Box>
              <Avatar src="https://bit.ly/dan-abramov" />
            </Box>
            <Text>Profile</Text>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
