import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { BiCopyright } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
const Footer = () => {
  return (
    <Box w="50%" m="auto" textAlign={"center"} pb="20px">
      <Flex
        flexWrap={"wrap"}
        gridGap="10px"
        fontSize={"12px"}
        color="#808080"
        justifyContent={"center"}
      >
        <Text>Meta</Text>
        <Text>About</Text>
        <Text>Blog</Text>
        <Text>Jobs</Text>
        <Text>Help</Text>
        <Text>API</Text>
        <Text>Privacy</Text>
        <Text>Terms</Text>
        <Text>Top Accounts</Text>
        <Text>Hashtags</Text>
        <Text>Location</Text>
        <Text>Instagram Lite</Text>
        <Text>Contact Uploading & Non-Users</Text>
        <Flex alignItems={"center"}>
          English <BsChevronDown />
        </Flex>
        <Flex alignItems={"center"}>
          <BiCopyright /> 2022 Instagram from Meta
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
