// Topic.js
import React, { useEffect, useState } from "react";
import { Box, HStack, Button, Stack, Text, Flex } from "@chakra-ui/react";
import Dropdown from "./Dropdown";
import ApiService from "./ApiService";
import ErrorHandler from "./ErrorHandler";
import { useNavigate } from "react-router-dom";
import { useData } from "../Context/DataContext"; // Import useData hook

const Topic = () => {
  const navigate = useNavigate();
  const { setTopic, setSubjectName, subjectName } = useData(); // Access setTopic and setSubjectName functions from DataContext
  const [subjects, setSubjects] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  //  const [subjectName, setSubjectName] = useState("");

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await ApiService.fetchSubject();
        // console.log("data:", data);
        setSubjects(data);
      } catch (error) {
        ErrorHandler.handleError(error);
      }
    };
    fetchSubjects();
  }, []);

  useEffect(() => {
    const fetchTopics = async () => {
      if (selectedSubject) {
        try {
          const data = await ApiService.fetchTopicsBySubject(selectedSubject);
          //  console.log("data sdfgggggggggggggg:", data);
          setTopics(data.topics);
          setSubjectName(data.subject);
        } catch (error) {
          ErrorHandler.handleError(error);
        }
      }
    };
    fetchTopics();
  }, [selectedSubject]);

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
    setSelectedTopic("");
  };

  const handleTopicChange = (event) => {
    setSelectedTopic(event.target.value);
  };

  const handleSubmit = () => {
    setTopic(selectedTopic); // Update topic state in DataContext
    setSubjectName(subjectName); // Update subjectName state in DataContext
    navigate(
      `/test-description?sub_name=${subjectName}&topic=${selectedTopic}`
    );
  };

  //  console.log("selectedSubject:", selectedSubject);
  //  console.log("selectedTopic:", selectedTopic);
  //  console.log("subjectName:", subjectName);
  return (
    <div>
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
            //   width={"90vw"}
            //   backgroundColor={"#FAB519"}
            //   marginTop={"5vh"}
            //   display={"flex"}
            //   alignItems={"center"}
            //   justifyContent={"center"}
            //   borderRadius={"18px"}
          >
            <HStack width={["80%", "80%", "70%", "70%"]} height={"100%"}>
              <Dropdown
                options={subjects?.map((subject) => ({
                  label: subject.name,
                  value: subject._id,
                }))}
                value={selectedSubject}
                onChange={handleSubjectChange}
                placeholder="Select Subject"
              />
              <Dropdown
                options={topics?.map((topic) => ({
                  label: topic.name,
                  value: topic.name,
                }))}
                value={selectedTopic}
                onChange={handleTopicChange}
                placeholder="Select Topic"
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
            //   marginTop={"2vh"}
            //   width={"20%"}
            //   fontWeight={"400"}
            //   backgroundColor={"#FAB519"}
            //   padding={"5px 40px"}
            //   _hover={{
            //     color: "black",
            //     border: "2px solid #FAB519",
            //     backgroundColor: "white",
            //   }}
            //   marginBottom={"5vh"}
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
        </HStack>
      </Box>
    </div>
  );
};

export default Topic;
 