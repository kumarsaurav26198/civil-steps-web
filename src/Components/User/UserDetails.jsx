import { Avatar, Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserDetail = ({ children }) => {
 const navigate = useNavigate();
 const [selectedPage, setSelectedPage] = useState(null);
 const [userDetails, setUserDetails] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || ""
 );
 const handleButtonClick = (path) => {
  setSelectedPage(path);
  navigate(path);
 };
 console.log("userDetails:", userDetails);
 return (
  <Box>
   <Grid
    templateAreas={`"header header"
                        "nav main"
                        "nav main"`}
    gridTemplateRows={"50px 1fr 30px"}
    gridTemplateColumns={"300px 1fr"}
    gap="1"
    color="blackAlpha.700"
    fontWeight="bold"
   >
    <GridItem
     display={"flex"}
     alignItems={"center"}
     justifyContent={"center"}
     fontSize={"1.5rem"}
     pl="2"
     bg="#FAB519"
     area={"header"}
    >
     User Dashboard
    </GridItem>
    <GridItem
     display={"flex"}
     flexDirection={"column"}
     alignItems={"center"}
     justifyContent={"center"}
     pl="2"
     area={"nav"}
     gap={5}
    >
     <Box>
      <Avatar
       size="xl"
       name="Segun Adebayo"
       src="https://bit.ly/sage-adebayo"
      />
     </Box>
     <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
     >
      <Button
       w="250px"
       fontWeight={"400"}
       backgroundColor={"#FAB519"}
       padding={"5px 40px"}
       _hover={{
        color: "black",
        border: "2px solid #FAB519",
        backgroundColor: "white",
       }}
       onClick={() => handleButtonClick("/user-personal-details")}
      >
       Personal-Details
      </Button>
      <Button
       w="250px"
       fontWeight={"400"}
       backgroundColor={"#FAB519"}
       padding={"5px 40px"}
       _hover={{
        color: "black",
        border: "2px solid #FAB519",
        backgroundColor: "white",
       }}
       onClick={() => handleButtonClick("/user-level")}
      >
       Test-Levels
      </Button>
      <Button
       w="250px"
       fontWeight={"400"}
       backgroundColor={"#FAB519"}
       padding={"5px 40px"}
       _hover={{
        color: "black",
        border: "2px solid #FAB519",
        backgroundColor: "white",
       }}
       onClick={() => handleButtonClick("/user-test-results")}
      >
       Test-Results
      </Button>
     </Box>
    </GridItem>
    <GridItem pl="2" area={"main"}>
     {children || (
      <Box height={"60vh"} p={5}>
       <Text textAlign={"center"}>
        Hey {userDetails.Firstname} {"  "}
        {userDetails.Lastname}
       </Text>
       <ul>
        <li>You can see personal details</li>

        <li>You can see the test results of the past attempts</li>
        <li>
         You can buy the next level to attempt more difficult and
         curriculum-related multiple-choice questions to test their skills
        </li>
       </ul>
      </Box>
     )}
    </GridItem>
    {/* <GridItem pl="2" bg="blue.300" area={"footer"}>
          Footer
        </GridItem> */}
   </Grid>
  </Box>
 );
};

export default UserDetail;
