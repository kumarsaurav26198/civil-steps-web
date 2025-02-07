import { Avatar, Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AdminDashboard = ({ children }) => {
 const location = useLocation();
 const navigate = useNavigate();
 const [selectedPage, setSelectedPage] = useState(null);

 const handleButtonClick = (path) => {
  setSelectedPage(path);
  navigate(path);
 };

 const checkAdmin = localStorage.getItem("admin");
 useEffect(() => {
  if (!checkAdmin) {
   navigate("/login", { state: { from: location.pathname } });
  } else {
  }
 }, []);
 return (
  <Box>
   <Grid
    w="100%"
    margin={"auto"}
    templateAreas={`"header header"
                        "nav main"
                        "nav main"`}
    gridTemplateRows={"50px 1fr 30px"}
    gridTemplateColumns={"300px 1fr"}
    gap="1"
    color="blackAlpha.700"
    fontWeight="bold"
    position={"relative"}
   >
    <GridItem
     display={"flex"}
     alignItems={"center"}
     justifyContent={"center"}
     fontSize={"1.5rem"}
     //  pl="2"
     bg="#FAB519"
     area={"header"}
    >
     {selectedPage ? "Admin Dashboard" : "Welcome to Admin Panel"}
    </GridItem>
    <GridItem
     h={"45vh"}
     display={"flex"}
     flexDirection={"column"}
     alignItems={"center"}
     justifyContent={"center"}
     pl="2"
     area={"nav"}
     gap={5}
     position={"sticky"}
     top={"10vh"}
     left={0}
    >
     <Box>
      <Avatar size="xl" name="Segun Adebayo" src="" />
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
       onClick={() => handleButtonClick("/view-table-subject")}
      >
       Ques based on subject
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
       onClick={() => handleButtonClick("/view-table-year")}
      >
       Ques based on year
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
       onClick={() => handleButtonClick("/view-table-sub-topic")}
      >
       Ques based on subject & topic
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
       onClick={() => handleButtonClick("/subject/operations")}
      >
       Update Subject Year Topic
      </Button>
     </Box>
    </GridItem>
    <GridItem pl="2" area={"main"}>
     {children}
    </GridItem>
   </Grid>
  </Box>
 );
};

export default AdminDashboard;
