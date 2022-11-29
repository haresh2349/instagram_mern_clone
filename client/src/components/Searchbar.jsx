import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, searchUsers } from "../redux/AppReducer/actions";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();
  const { searchLoading, myProfile } = useSelector((store) => store.AppReducer);
  const debounced = useDebouncedCallback((value) => {
    if (value) {
      dispatch(searchUsers(value)).then((res) => {
        if (res.length > 0) {
          setNotFound(false);
          setSearchResults(res);
        } else {
          setNotFound(true);
        }
      });
    } else {
      setSearchResults([]);
      setNotFound(false);
    }
  }, 1000);
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);
  console.log(notFound);
  return (
    <Flex
      display={{ base: "none", md: "flex" }}
      w="350px"
      position={"absolute"}
      top="0"
      left="80px"
      bottom={"0"}
      zIndex="9999"
      bg="#FFFF"
      flexDir={"column"}
    >
      <Box w="100%" borderBottom={"1px solid #cbc9c9"} p="20px">
        <Heading size={"md"} mb="30px">
          Search
        </Heading>
        <HStack bg="#EFEFEF" p="5px 10px" borderRadius={"8px"}>
          {!searchText && (
            <Box>
              <BsSearch />
            </Box>
          )}
          <Input
            placeholder="Search"
            border={"none"}
            // value={searchText}
            onChange={(e) => debounced(e.target.value)}
          />
          {searchText && (
            <Box cursor={"pointer"} onClick={() => setSearchText("")}>
              <IoMdCloseCircle />
            </Box>
          )}
        </HStack>
      </Box>
      {searchLoading ? (
        <Box pt="20px" textAlign={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="md"
          />
        </Box>
      ) : (
        <Box>
          {searchResults.length > 0 &&
            searchResults?.map((user) => {
              return (
                <Link
                  to={
                    user?._id !== myProfile?.user?._id
                      ? `/profile/${user?._id}`
                      : "/profile"
                  }
                  key={user?._id}
                >
                  <HStack p="10px">
                    <Image
                      w="50px"
                      h="50px"
                      borderRadius={"50%"}
                      src={user?.profilePhoto}
                    />
                    <Box fontSize={"14px"}>
                      <Text fontWeight={"600"}>{user?.username}</Text>
                      <Text color={"#808080"}>{user?.full_name}</Text>
                    </Box>
                  </HStack>
                </Link>
              );
            })}
          {notFound && (
            <Flex
              justifyContent={"center"}
              alignItems="center"
              height={"200px"}
            >
              <Text>No Results found!</Text>
            </Flex>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default Searchbar;
