import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../redux/AppReducer/actions";
import { useDebouncedCallback } from "use-debounce";
import { Link } from "react-router-dom";
const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const dispatch = useDispatch();
  // const { searchResults } = useSelector((store) => store.AppReducer);
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
  console.log(notFound);
  return (
    <Flex
      w="350px"
      position={"absolute"}
      top="0"
      left="105px"
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
      <Box>
        {searchResults.length > 0 &&
          searchResults?.map((user) => {
            return (
              <Link to={`/profile/${user?._id}`} key={user?._id}>
                <HStack my="5px">
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
          <Flex justifyContent={"center"} alignItems="center" height={"200px"}>
            <Text>No Results found!</Text>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Searchbar;
