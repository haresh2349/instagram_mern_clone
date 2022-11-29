import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoIosSettings } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import instagramLogo from "../images/instagram_logo.png";
const MobileNavbar = () => {
  const nav = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    nav("/login");
  };
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      w="100%"
      h="60px"
      px="10px"
      justifyContent={"space-between"}
      alignItems="center"
      position="fixed"
      top={"0"}
      left="0"
      right="0"
      zIndex={3}
      bg="#FFF"
    >
      <Image w="100px" src={instagramLogo} />
      <Box>
        <Menu>
          <MenuButton
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
  );
};

export default MobileNavbar;
