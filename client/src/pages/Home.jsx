import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { getAllposts } from "../redux/AppReducer/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, allPosts } = useSelector(
    (store) => store.AppReducer
  );
  useEffect(() => {
    dispatch(getAllposts());
  }, []);
  return (
    <Flex w="100%" pos={"relative"}>
      <Sidebar />
      <Flex
        flexDir={"column"}
        gridGap="10px"
        w={{ base: "100%", md: "80%", lg: "70%" }}
        position={"absolute"}
        left={{ base: "0", md: "20%", lg: "30%" }}
        pt="20px"
        zIndex={"-2"}
      >
        {allPosts?.length > 0 &&
          allPosts?.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
      </Flex>
      {/* <Box position={"sticky"} bottom="0" left={"0"} right="0">
        <Sidebar />
      </Box> */}
    </Flex>
  );
};

export default Home;
