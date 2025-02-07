import {
 Box,
 Card,
 CardBody,
 CardHeader,
 Heading,
 Image,
 Stack,
 StackDivider,
 Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TestResult = () => {
 const [userDetails, setUserDetails] = useState(
  JSON.parse(localStorage.getItem("userDetails")) || ""
 );
 const [testResult, setTestResult] = useState(null); // Initialize testResult state

 const getResult = async () => {
  try {
   //   /test-results/:userId/latest
   const response = await axios.get(
    `https://api.civilsteps.com/api/test-results/${userDetails._id}/latest`
   );
   // Sort the data in descending order based on submissionTime

   console.log("response:", response.data);
   setTestResult(response.data);
  } catch (error) {
   console.log("error:", error);
  }
 };

 useEffect(() => {
  getResult();
 }, []);
 return (
  <Box>
   <Box
    p="5"
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-between"}
    style={{
     backgroundImage: `url("https://res.cloudinary.com/dzz32ksnf/image/upload/v1715192668/map-bg_xurtzo.png")`,
     backgroundSize: "cover",
     backgroundPosition: "center",
     width: "85%",
     margin: "50px auto",
    }}
   >
    <Card w="50%" bg={"transparent"}>
     <CardHeader>
      <Heading size="md">Test Result of {testResult?.category}</Heading>
     </CardHeader>

     <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
       {testResult ? (
        <>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Score
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.score}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Test Category
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.category}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Total Questions
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.totalNosQues}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Questions Attempted
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.questionsAttempted}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Correct Answers
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.correctAnswers}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Wrong Answers
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.wrongAnswers}
          </Text>
         </Box>
         <Box>
          <Heading size="xs" textTransform="uppercase">
           Submission Time
          </Heading>
          <Text pt="2" fontSize="sm">
           {testResult.submissionTime}
          </Text>
         </Box>
        </>
       ) : (
        <Text>Loading test result...</Text>
       )}
      </Stack>
     </CardBody>
    </Card>
    <Image
     w="50%"
     src="https://res.cloudinary.com/dzz32ksnf/image/upload/v1715758186/logo-removebg-preview_fbf3vc.png"
     alt="image"
    />
   </Box>
   <Box
    p="5"
    border={"1px solid #cccc"}
    w="85%"
    margin={"auto"}
    height={"40px"}
    display={"flex"}
    alignItems={"center"}
    justifyContent={"space-around"}
   >
    <Link style={{ color: "blue" }} to="/user-test-results">
     Go to Dashboard
    </Link>
    <Link style={{ color: "blue" }} to="/">
     Go to Home
    </Link>
   </Box>
  </Box>
 );
};

export default TestResult;

// import {
//  Box,
//  Card,
//  CardBody,
//  CardHeader,
//  Heading,
//  Stack,
//  StackDivider,
//  Text,
// } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const TestResult = () => {
//  const [userDetails, setUserDetails] = useState(
//   JSON.parse(localStorage.getItem("userDetails")) || ""
//  );
//  const [testResult, setTestResult] = useState();
//  const getResult = async () => {
//   try {
//    const response = await axios.get(
//     `https://api.civilsteps.com/api/test-results/${userDetails._id}`
//    );
//    console.log("response:", response);
//   } catch (error) {
//    console.log("error:", error);
//   }
//  };
//  useEffect(() => {
//   getResult();
//  }, []);
//  return (
//   <Box border={"1px solid red"} width={"50%"} margin={"50px auto"}>
//    <Card>
//     <CardHeader>
//      <Heading size="md">Client Report</Heading>
//     </CardHeader>

//     <CardBody>
//      <Stack divider={<StackDivider />} spacing="4">
//       <Box>
//        <Heading size="xs" textTransform="uppercase">
//         Summary
//        </Heading>
//        <Text pt="2" fontSize="sm">
//         View a summary of all your clients over the last month.
//        </Text>
//       </Box>
//       <Box>
//        <Heading size="xs" textTransform="uppercase">
//         Overview
//        </Heading>
//        <Text pt="2" fontSize="sm">
//         Check out the overview of your clients.
//        </Text>
//       </Box>
//       <Box>
//        <Heading size="xs" textTransform="uppercase">
//         Analysis
//        </Heading>
//        <Text pt="2" fontSize="sm">
//         See a detailed analysis of all your business clients.
//        </Text>
//       </Box>
//      </Stack>
//     </CardBody>
//    </Card>
//   </Box>
//  );
// };

// export default TestResult;
