import React, { useEffect, useState } from "react";
import { Box, HStack, Button, Text, Flex, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetSubjects } from "../redux/testReducer/action";

const SelectTest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const { subject, isLoading, isError } = useSelector(
    (state) => state.testReducer
  );


  useEffect(() => {
    dispatch(GetSubjects());
  }, [dispatch]);

  const handleSubjectChange = (e) => {
    const selectedOption = subject.find(
      (subject) => subject._id === e.target.value
    );
    setSelectedSubject(selectedOption);
    setSelectedTopic(""); // Reset selected topic when subject changes
  };

  const handleTopicChange = (e) => {
    const selectedOption = selectedSubject?.topics?.find(
      (topic) => topic._id === e.target.value
    );
    setSelectedTopic(selectedOption);
  };

  const handleSubmit = () => {
    if (selectedSubject && selectedTopic ) {
      navigate(
        `/description/${selectedSubject.name}/${selectedTopic.name}`
      );
    } else {
      alert("Please select all options before submitting");
    }
  };
  console.log("subjects:", subject);
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading subjects</p>;

  return (
    <Box>
      <Box
        h="70vh"
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
            m="50px auto"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"18px"}
          >
            <HStack width={["80%", "80%", "70%", "70%"]} height={"100%"}>
              <Select
                placeholder="Select Subject"
                value={selectedSubject?._id || ""}
                onChange={handleSubjectChange}
              >
                {subject?.map((subject) => (
                  <option key={subject._id} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Select Topic"
                value={selectedTopic?._id || ""}
                onChange={handleTopicChange}
                isDisabled={!selectedSubject}
              >
                {selectedSubject?.topics?.map((topic) => (
                  <option key={topic._id} value={topic._id}>
                    {topic.name}
                  </option>
                ))}
              </Select>
              {/* <Select
                placeholder="Select Level"
                value={selectedLevel?.name || ""}
                onChange={handleLevelChange}
              >
                {levelsData?.map((level) => (
                  <option key={level.name} value={level.name}>
                    {level.name}
                  </option>
                ))}
              </Select> */}
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

        <HStack
          direction={["column", "column", "row", "row"]}
          align={"center"}
          justify={"center"}
          marginTop={"auto"}
          w="100%"
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
              Students Attempted
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
              Students scored more than 30%
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
              Students scored more than 80%
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default SelectTest;

// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   HStack,
//   Button,
//   Stack,
//   Text,
//   Flex,
//   Select,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import Dropdown from "../Components/user-test/Dropdown";
// import ErrorHandler from "../Components/user-test/ErrorHandler";
// import ApiService from "../Components/user-test/ApiService";
// import { useData } from "../Components/Context/DataContext";
// import { useDispatch, useSelector } from "react-redux";
// import { GetSubjects } from "../redux/testReducer/action";

// const lavelsData = [
//   { name: "Level-1" },
//   { name: "Level-2" },
//   { name: "Level-3" },
// ];
// const SelectTest = () => {
//   const navigate=useNavigate()
//   const dispatch = useDispatch();
//   const { testQuestions, isLoading, isError, subject, topic, level } =
//     useSelector((state) => state.testReducer);

//   useEffect(() => {
//     dispatch(GetSubjects());
//   }, [dispatch]);

//   const handleSubjectChange = (event) => {
//   };

//   const handleTopicChange = (event) => {
//   };

//   const handleSubmit = () => {
//     // setTopic(selectedTopic);
//     // setSubjectName(subjectName);
//     navigate(
//       `/description/${"subjectName"}/${"selectedTopic"}`
//     );
//   };
//   console.log('subject:', subject)
//   return (
//     <Box>
//       <Box
//         h="70vh"
//         bgImage={`url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`}
//         backgroundSize={"cover"}
//         backgroundPosition={"center"}
//       >
//         <Text
//           style={{ marginTop: "2vh" }}
//           size="xl"
//           color={"#FAB519"}
//           fontSize={["1.2rem", "1.2rem", "1.5rem", "1.5rem"]}
//           textAlign={"center"}
//         >
//           Unlock Your Potential: Choose Your Challenge!
//         </Text>

//         <Text
//           style={{ color: "#000000" }}
//           marginTop={"4vh"}
//           fontSize={["1.2rem", "1.2rem", "1.8rem", "1.8rem"]}
//           textAlign={"center"}
//         >
//           Top UPSC Challenges Await Your Expertise Here
//         </Text>
//         <Flex direction={"column"} align={"center"} justify={"center"}>
//           <Box
//             width={"80vw"}
//             backgroundColor={"#FAB519"}
//             m="50px auto"
//             display={"flex"}
//             alignItems={"center"}
//             justifyContent={"center"}
//             borderRadius={"18px"}
//           >
//             <HStack width={["80%", "80%", "70%", "70%"]} height={"100%"}>
//               <Dropdown
//                 options={subject?.map((subject) => ({
//                   label: subject.name,
//                   value: subject._id,
//                 }))}
//                 // value={selectedSubject}
//                 onChange={handleSubjectChange}
//                 placeholder="Select Subject"
//               />
//               {/* <Dropdown
//                 options={topic?.map((topic) => ({
//                   label: topic.name,
//                   value: topic.name,
//                 }))}
//                 // value={selectedTopic}
//                 onChange={handleTopicChange}
//                 placeholder="Select Topic"
//               /> */}
//               {/* <Dropdown
//                 options={lavelsData?.map((topic) => ({
//                   label: topic.name,
//                   value: topic.name,
//                 }))}
//                 value={selectedLevel}
//                 onChange={handleLevelChanges}
//                 placeholder="Select level"
//               /> */}
//             </HStack>
//           </Box>

//           <Button
//             marginTop={"auto"}
//             width={"20%"}
//             fontWeight={"400"}
//             backgroundColor={"#FAB519"}
//             padding={"5px 40px"}
//             _hover={{
//               color: "black",
//               border: "2px solid #FAB519",
//               backgroundColor: "white",
//             }}
//             marginBottom={"5vh"}
//             onClick={handleSubmit}
//           >
//             Submit
//           </Button>
//         </Flex>

//         <HStack
//           direction={["column", "column", "row", "row"]}
//           align={"center"}
//           justify={"center"}
//           marginTop={"auto"}
//           w="100%"
//         >
//           {/* Stats Boxes */}
//           <Box
//             textAlign={"center"}
//             border={"3px solid #FAB519"}
//             width={["85vw", "85vw", "28vw", "28vw"]}
//             borderRadius={"16px"}
//           >
//             <Text
//               color={"#FAB519"}
//               fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
//               fontWeight={"600"}
//             >
//               2000+
//             </Text>
//             <Text fontWeight={"300"} fontSize={"1.3rem"}>
//               Student Attempted
//             </Text>
//           </Box>

//           <Box
//             textAlign={"center"}
//             border={"3px solid #FAB519"}
//             width={["85vw", "85vw", "28vw", "28vw"]}
//             borderRadius={"16px"}
//           >
//             <Text
//               color={"#FAB519"}
//               fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
//               fontWeight={"600"}
//             >
//               1000+
//             </Text>
//             <Text fontWeight={"300"} fontSize={"1.3rem"}>
//               Student score more than 30%
//             </Text>
//           </Box>

//           <Box
//             textAlign={"center"}
//             border={"3px solid #FAB519"}
//             width={["85vw", "85vw", "28vw", "28vw"]}
//             borderRadius={"16px"}
//           >
//             <Text
//               color={"#FAB519"}
//               fontSize={["2.3rem", "2.3rem", "4rem", "5rem"]}
//               fontWeight={"600"}
//             >
//               20+
//             </Text>
//             <Text fontWeight={"300"} fontSize={"1.3rem"}>
//               Student Score more than 80%
//             </Text>
//           </Box>
//         </HStack>
//       </Box>
//     </Box>
//   );
// };

// export default SelectTest;
