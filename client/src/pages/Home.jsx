import { Box, Flex, Heading, Progress, Spinner } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import { getAllposts } from "../redux/AppReducer/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { postsLoading, isError, allPosts } = useSelector(
    (store) => store.AppReducer
  );
  useEffect(() => {
    dispatch(getAllposts());
  }, [allPosts.length]);

  return (
    <Flex w="100%" pos={"relative"}>
      <Sidebar />

      <Flex
        flexDir={"column"}
        gridGap="10px"
        w={{ base: "100%", md: "80%", lg: "70%" }}
        position={"absolute"}
        left={{ base: "0", md: "20%", lg: "30%" }}
        pt={{ base: "0", md: "20px" }}
        zIndex={"-2"}
        top={{ base: "60px", md: "10px" }}
      >
        <MobileNavbar />
        {postsLoading ? (
          <Flex
            w={{ base: "100%", md: "70%" }}
            h="100vh"
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
          allPosts?.length > 0 &&
          allPosts?.map((post) => {
            return <Post key={post._id} post={post} />;
          })
        )}
      </Flex>
    </Flex>
  );
};

export default Home;
