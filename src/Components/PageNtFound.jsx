import { Box, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PageNtFound = () => {
 return (
  <Box w="80%" m={"auto"} p={5} h="65vh">
   <VStack align={"center"} justify={"center"}>
    <Heading color={"brown"} fontSize={"250px"}>
     404
    </Heading>
    <Heading>Not Found</Heading>
    <Text>The resource requested could not be found on this server!</Text>
   </VStack>
  </Box>
 );
};

export default PageNtFound;
