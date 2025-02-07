import React, { useState, useEffect } from "react";
import { Box, Text, Button, Select } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnlockedLevels } from "../redux/testReducer/action";

const PremiumTestDescription = () => {
 const dispatch = useDispatch();
 const { subject, topic } = useParams();
 const navigate = useNavigate();
 const [userID, setUserID] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || {}
 );
 const [levels, setLevels] = useState(["Level-1"]);
 const [token] = useState(localStorage.getItem("token") || "");
 const { unlockedLevels } = useSelector((state) => state.testReducer);

 useEffect(() => {
  dispatch(fetchUnlockedLevels(userID._id, token));
 }, [dispatch, userID._id, token]);

 const handleSubmit = () => {
  const selectedLevel = levels[levels.length - 1]; // Get the currently selected level
  navigate(`/test/${subject}/${topic}/${selectedLevel}`); // Navigate to the selected level
 };

 // Ensure unlockedLevels is not null before accessing currentLevel
 const currLevel = unlockedLevels ? unlockedLevels.currentLevel : 0;

 useEffect(() => {
  // Generate levels array dynamically based on the current level
  const generatedLevels = Array.from(
   { length: currLevel },
   (_, i) => `Level-${i + 1}`
  );
  setLevels(generatedLevels);
 }, [currLevel]);

 // Render loading or error message if unlockedLevels is null
 if (!unlockedLevels) {
  return <div>Loading...</div>; // or return an error message
 }

 return (
  <Box
   width={"100%"}
   display={"flex"}
   flexDirection={"column"}
   alignItems={"center"}
  >
   <Box
    padding={"5vw"}
    boxShadow={"5px 5px 10px rgba(0, 0, 0, 0.6)"}
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    flexDirection={"column"}
   >
    <Box
     textAlign={"center"}
     backgroundColor={"#FAB519"}
     color={"white"}
     fontSize={"1.5rem"}
     width={"70vw"}
    >
     <h1 style={{ width: "100%" }} fontWeight={"100"}>
      {subject} Test
     </h1>
    </Box>
    <Box
     mt={5}
     width={"100%"}
     display={"flex"}
     alignItems={"center"}
     justifyContent={"center"}
    >
     <Box width={"50%"}>
      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}> Exam Name</span>: Union Public
       Service Commission
      </Text>

      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}>No Of Questions</span>: 100
      </Text>

      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}>
       <span style={{ fontWeight: "600" }}>Total Marks</span>: 200
      </Text>
     </Box>
     <Box
      width={"50%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      h="100px"
     >
      <Text fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]} fontWeight={"300"}>
       Select Level Here
      </Text>
      <Select
       placeholder="Choose a level"
       onChange={(e) =>
        setLevels(levels.slice(0, levels.indexOf(e.target.value) + 1))
       }
       value={levels[levels.length - 1]}
      >
       {levels.map((level) => (
        <option key={level} value={level}>
         {level}
        </option>
       ))}
      </Select>
     </Box>
    </Box>
    <Box
     marginTop={"6vh"}
     fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
     fontWeight={"100"}
     w={"100%"}
    >
     <Box>
      <h2 style={{ color: "#FAB519" }}>Instructions</h2>
      <ul color="black">
       <li style={{ marginTop: "1vh" }}>
        Arrange for Stable Internet Connectivity
       </li>
       <li style={{ marginTop: "1vh" }}>
        Make Sure your laptop should fully charged
       </li>

       <li style={{ marginTop: "1vh" }}>
        Giving exam on laptop or desktop is highly recommended
       </li>
       <li style={{ marginTop: "1vh" }}>
        Close all the tabs/browsers before starting the online examination start
        time
       </li>
       <li style={{ marginTop: "1vh" }}>
        Once the exam starts, do not switch to any other window/tab
       </li>
       <li style={{ marginTop: "1vh" }}>
        It is recommended to use web browser such as Google Chrome, Mozilla,
        etc.
       </li>
      </ul>
     </Box>
    </Box>
    <Button
     fontWeight={"400"}
     backgroundColor={"#FAB519"}
     padding={"5px 40px"}
     _hover={{
      color: "black",
      backgroundColor: "white",
     }}
     marginBottom={"5vh"}
     onClick={handleSubmit}
     margin={"0px auto"}
     marginTop={"5vh"}
     width={"60%"}
    >
     Start test
    </Button>
   </Box>
  </Box>
 );
};

export default PremiumTestDescription;
