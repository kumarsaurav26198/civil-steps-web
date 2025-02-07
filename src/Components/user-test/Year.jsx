// Year.js
import React, { useEffect, useState } from "react";
import { Box, Text, HStack, Button, Stack, Flex } from "@chakra-ui/react";
import ApiService from "./ApiService";
import ErrorHandler from "./ErrorHandler";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext"; // Import useData hook
import Dropdown from "./Dropdown";

const Year = () => {
 const navigate = useNavigate();
 const { setYear } = useData(); // Access setYear function from DataContext
 const [years, setYears] = useState([]);
 const [selectedYear, setSelectedYear] = useState("");

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await ApiService.fetchYears();
    setYears(response);
   } catch (error) {
    ErrorHandler.handleError(error);
   }
  };
  fetchData();
 }, []);

 const handleYearChange = (event) => {
  setSelectedYear(event.target.value);
 };

 const handleSubmit = () => {
  setYear(selectedYear); // Update year state in DataContext
  navigate(`/test-description?year=${selectedYear}`);
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
       {/* <select
       value={selectedYear}
       onChange={handleYearChange}
       style={{
        backgroundColor: "white",
        fontSize: "1.3rem",
        margin: ["4vw 1vw", "3vw 6vw", "2vw 5vw", "2vw 5vw"],
        height: "12vh",
       }}
      >
       <option value="">Select year to see questions</option>
       {years.map((year) => (
        <option key={year._id} value={year.year}>
         {year.year}
        </option>
       ))}
      </select> */}
       <Dropdown
        options={years?.map((subject) => ({
         label: subject.year,
         value: subject.year,
        }))}
        value={selectedYear}
        onChange={handleYearChange}
        placeholder="Select Year"
       />
      </HStack>
     </Box>

     <Button
      marginTop={"2vh"}
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
     {/* Stats Boxes */}
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

export default Year;

 