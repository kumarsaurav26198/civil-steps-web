import React, { useEffect, useState } from "react";
import { Box, HStack, Button, Stack, Text, Flex } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import ApiService from "./ApiService";
import ErrorHandler from "./ErrorHandler";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext";

const Subject = () => {
 const navigate = useNavigate();
 const { setSubject } = useData();
 const [subjects, setSubjects] = useState([]);
 const [selectedSubject, setSelectedSubject] = useState("");

 useEffect(() => {
  const fetchSubjects = async () => {
   try {
    const data = await ApiService.fetchSubjects();
    console.log("data:", data);
    setSubjects(data);
   } catch (error) {
    ErrorHandler.handleError(error);
   }
  };
  fetchSubjects();
 }, []);

 const handleSubjectChange = (event) => {
  setSelectedSubject(event.target.value);
 };

 const handleSubmit = () => {
  setSubject(selectedSubject);
  navigate(`/test-description?subject=${selectedSubject}`);
 };
 return (
  <Box>
   <Box
    bgImage={`url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`}
    backgroundSize={"cover"}
    backgroundPosition={"center"}
   >
    <Text
     style={{ marginTop: "2vh" }}
     size="xl"
     color={"#FAB519"}
     fontSize={["1.2rem", "1.2rem", "1.5rem", "1.5rem"]}
     textAlign={"center"}
    >
     Unlock Your Potential: Choose Your Challenge!
    </Text>

    <Text
     style={{ color: "#000000" }}
     marginTop={"4vh"}
     fontSize={["1.2rem", "1.2rem", "1.8rem", "1.8rem"]}
     textAlign={"center"}
    >
     Top UPSC Challenges Await Your Expertise Here
    </Text>
    <Flex direction={"column"} align={"center"} justify={"center"}>
     <Box
      width={"80vw"}
      backgroundColor={"#FAB519"}
      m="10px auto"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      borderRadius={"18px"}
     >
      <HStack width={["80%", "80%", "70%", "70%"]} height={"100%"}>
       <Dropdown
        options={subjects?.map((subject) => ({
         label: subject.name,
         value: subject.name,
        }))}
        value={selectedSubject}
        onChange={handleSubjectChange}
        placeholder="Select Subject"
       />
      </HStack>
     </Box>
     <Button
      marginTop={"auto"}
      width={"20%"}
      fontWeight={"400"}
      backgroundColor={"#FAB519"}
      padding={"5px 40px"}
      _hover={{
       color: "black",
       border: "2px solid #FAB519",
       backgroundColor: "white",
      }}
      marginBottom={"5vh"}
      onClick={handleSubmit}
     >
      Submit
     </Button>
    </Flex>
    <Stack
     w="80%"
     direction={["column", "column", "row", "row"]}
     margin={"7vh auto"}
    >
     <Box
      textAlign={"center"}
      border={"3px solid #FAB519"}
      width={["85vw", "85vw", "28vw", "28vw"]}
      borderRadius={"16px"}
     >
      <Text
       color={"#FAB519"}
       fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
       fontWeight={"600"}
      >
       2000+
      </Text>
      <Text fontWeight={"300"} fontSize={"1.3rem"}>
       Student Attempted
      </Text>
     </Box>

     <Box
      textAlign={"center"}
      border={"3px solid #FAB519"}
      width={["85vw", "85vw", "28vw", "28vw"]}
      borderRadius={"16px"}
     >
      <Text
       color={"#FAB519"}
       fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
       fontWeight={"600"}
      >
       1000+
      </Text>
      <Text fontWeight={"300"} fontSize={"1.3rem"}>
       Student score more than 30%
      </Text>
     </Box>

     <Box
      textAlign={"center"}
      border={"3px solid #FAB519"}
      width={["85vw", "85vw", "28vw", "28vw"]}
      borderRadius={"16px"}
     >
      <Text
       color={"#FAB519"}
       fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
       fontWeight={"600"}
      >
       20+
      </Text>
      <Text fontWeight={"300"} fontSize={"1.3rem"}>
       Student Score more than 80%
      </Text>
     </Box>
    </Stack>
   </Box>
  </Box>
 );
};

export default Subject;
