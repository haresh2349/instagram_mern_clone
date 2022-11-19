import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Flex>
      <Sidebar />
      <Box w="70%"></Box>
    </Flex>
  );
};

export default Home;
