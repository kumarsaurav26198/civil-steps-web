import React, { useState } from "react";
import UserDetail from "./UserDetails";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const UserPersonalDetails = () => {
 const [userDetails, setUserDetails] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || ""
 );
 console.log("userDetails:", userDetails);
 return (
  <UserDetail>
   <Box
    mx="auto"
    border="1px solid #ddd"
    borderRadius="lg"
    boxShadow="md"
    p={8}
   >
    <Heading
     color="rgb(250,181,25)"
     textAlign="center"
     as="h2"
     size="lg"
     mb={8}
    >
     Personal Details
    </Heading>
    <>
     <Flex alignItems="center" justifyContent="space-between" mb={4}>
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       Email ID
      </Text>
      <Text>{userDetails.Email}</Text>
     </Flex>
     <Flex alignItems="center" justifyContent="space-between" mb={4}>
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       Full Name
      </Text>
      <Text>
       {userDetails.Firstname} {userDetails.Lastname}
      </Text>
     </Flex>
     <Flex alignItems="center" justifyContent="space-between" mb={4}>
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       Mobile No
      </Text>
      <Text>{userDetails.Mobileno}</Text>
     </Flex>
     <Flex alignItems="center" justifyContent="space-between" mb={4}>
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       Age
      </Text>
      <Text>{userDetails.Age}</Text>
     </Flex>
     <Flex alignItems="center" justifyContent="space-between" mb={4}>
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       WhatsApp No
      </Text>
      <Text>{userDetails.Whatsappno}</Text>
     </Flex>
     <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="1rem" color="rgb(250,181,25)" fontWeight="bold">
       Location
      </Text>
      <Text>{userDetails.Location}</Text>
     </Flex>
    </>
   </Box>
  </UserDetail>
 );
};

export default UserPersonalDetails;
